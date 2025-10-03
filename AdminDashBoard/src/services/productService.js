import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot,
  orderBy,
  query,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config.js';

const COLLECTION_NAME = 'products';

// Add a new product
export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...productData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { id: docRef.id, ...productData };
  } catch (error) {
    console.error('Error adding product: ', error);
    throw error;
  }
};

// Get all products
export const getProducts = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error('Error getting products: ', error);
    throw error;
  }
};

// Real-time listener for products
export const subscribeToProducts = (callback) => {
  const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (querySnapshot) => {
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    callback(products);
  });
};

// Update a product
export const updateProduct = async (id, productData) => {
  try {
    const productRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(productRef, {
      ...productData,
      updatedAt: serverTimestamp()
    });
    return { id, ...productData };
  } catch (error) {
    console.error('Error updating product: ', error);
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return id;
  } catch (error) {
    console.error('Error deleting product: ', error);
    throw error;
  }
};

// Validate product data
export const validateProductData = (productData) => {
  const errors = {};
  
  if (!productData.name || productData.name.trim().length < 2) {
    errors.name = 'Product name must be at least 2 characters long';
  }
  
  if (!productData.price || isNaN(productData.price) || productData.price <= 0) {
    errors.price = 'Price must be a valid positive number';
  }
  
  if (!productData.description || productData.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters long';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
