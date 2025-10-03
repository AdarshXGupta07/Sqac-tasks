# Product Manager - Full Stack Web Application

A modern full-stack web application built with React, Tailwind CSS, and Firebase Firestore for managing products with real-time updates.

## Features

- ✨ **Add Products**: Form to add product details (name, price, description)
- 📊 **Real-time Updates**: Automatic UI updates without page refresh using Firebase listeners
- 🗃️ **Data Storage**: Firebase Firestore database for reliable data persistence
- ✅ **Form Validation**: Client-side validation with error handling
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 🔄 **CRUD Operations**: Create, Read, and Delete products
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server

### Backend
- **Firebase Firestore** - NoSQL document database
- **Firebase SDK** - Client library for Firebase services

## Project Structure

```
src/
├── components/
│   ├── ProductForm.jsx      # Form component for adding products
│   └── ProductList.jsx      # Component for displaying products table
├── firebase/
│   └── config.js           # Firebase configuration
├── services/
│   └── productService.js   # Firebase Firestore operations
├── App.jsx                 # Main application component
└── main.jsx               # Application entry point
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### 1. Clone and Install Dependencies

```bash
# Navigate to project directory
cd product-manager

# Install dependencies
npm install
```

### 2. Firebase Setup

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project"
   - Follow the setup wizard

2. **Enable Firestore Database**:
   - In your Firebase project, go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" for development
   - Select a location for your database

3. **Get Firebase Configuration**:
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Click "Web" icon to add a web app
   - Register your app and copy the configuration object

4. **Update Firebase Configuration**:
   - Open `src/firebase/config.js`
   - Replace the placeholder values with your actual Firebase config

### 3. Run the Application

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Adding a Product**:
   - Fill in the product form with name, price, and description
   - Click "Add Product" to save to Firestore
   - The product will appear in the table immediately

2. **Viewing Products**:
   - All products are displayed in a responsive table
   - Products are sorted by creation date (newest first)
   - Real-time updates show new products without refresh

3. **Deleting Products**:
   - Click "Delete" button next to any product
   - Confirm the deletion in the popup
   - Product is removed from Firestore and UI updates automatically

## Validation Rules

- **Product Name**: Minimum 2 characters
- **Price**: Must be a positive number
- **Description**: Minimum 10 characters

## License

This project is licensed under the MIT License.
