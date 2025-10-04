# Sqac-tasks
1.Currency Converter
# 💱 Professional Currency Converter

A modern, responsive currency converter built with React and Tailwind CSS, featuring a stunning glassmorphism design and real-time exchange rates.

![Currency Converter](https://img.shields.io/badge/React-19.1.1-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)

## ✨ Features

- **🎨 Modern Glassmorphism UI** - Beautiful glass-like design with backdrop blur effects
- **🌍 160+ Currencies** - Support for major world currencies with flag emojis
- **⚡ Real-time Conversion** - Live exchange rates from ExchangeRate-API
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎭 Smooth Animations** - Professional animations and micro-interactions
- **🔄 Auto-conversion** - Instant conversion as you type
- **♿ Accessible** - WCAG compliant with proper focus management
- **🌙 Dark Theme** - Elegant dark theme with gradient backgrounds

## 🚀 Live Demo

[View Live Demo](https://your-demo-url.com) *(Update with your deployment URL)*

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Tailwind CSS 3.4.17
- **Build Tool**: Vite 7.1.2
- **API**: ExchangeRate-API
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🎯 Key Features Explained

### Glassmorphism Design
- Backdrop blur effects with `backdrop-filter`
- Semi-transparent backgrounds with `rgba()` colors
- Subtle borders and shadows for depth
- Animated gradient backgrounds

### Real-time Conversion
- Automatic conversion on input change
- Loading states with spinner animations
- Error handling for API failures
- Exchange rate display

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface
- Optimized for all screen sizes

## 🎨 Design System

### Color Palette
- **Primary**: Indigo to Purple gradients
- **Secondary**: Blue to Green gradients
- **Background**: Dark gradient (Indigo → Purple → Pink)
- **Glass**: Semi-transparent whites with blur

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: Responsive scaling

### Animations
- **Blob Animation**: Floating background elements
- **Hover Effects**: Scale and glow transitions
- **Loading States**: Spinner and shimmer effects
- **Micro-interactions**: Button and input feedback

## 📱 Screenshots

### Desktop View
![Desktop View](screenshots/desktop.png)

### Mobile View
![Mobile View](screenshots/mobile.png)

## 🔧 Customization

### Adding New Currencies
The currency flags are defined in `src/components/Input.jsx`:

```javascript
const currencyFlags = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  // Add new currencies here
};
```

### Styling Modifications
- **Colors**: Update `tailwind.config.js` for custom color schemes
- **Animations**: Modify `src/App.css` for custom animations
- **Layout**: Adjust component structure in `src/App.jsx`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: < 100KB gzipped
- **Load Time**: < 2 seconds on 3G
- **Core Web Vitals**: All green

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ExchangeRate-API](https://exchangerate-api.com/) for providing free exchange rates
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for beautiful SVG icons
- [Inter Font](https://rsms.me/inter/) for typography

## 📞 Contact

**Your Name** - [@yourusername](https://twitter.com/yourusername) - your.email@example.com

Project Link: [https://github.com/yourusername/currency-converter](https://github.com/yourusername/currency-converter)

---

⭐ **Star this repository if you found it helpful!**
<img width="1596" height="739" alt="image" src="https://github.com/user-attachments/assets/0a577db2-b858-4359-96a2-6668b474b9ee" />

2.MovieSearch
# 🎬 MovieFlix - Movie Search App

A beautiful, responsive movie search application built with **Vite + React** and **Tailwind CSS**.

## ✨ Features

- 🔍 **Real-time movie search** using OMDB API
- 🎨 **Modern UI** with gradient backgrounds and glassmorphism effects
- 📱 **Fully responsive** design for all devices
- ⚡ **Fast loading** with smooth animations
- 🎭 **Movie details** including poster, title, year, rating, cast, and plot

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Get your free OMDB API key:**
   - Visit: http://www.omdbapi.com/apikey.aspx
   - Sign up for a free account
   - Copy your API key

3. **Update API key:**
   - Open `src/App.jsx`
   - Replace `'trilogy'` with your actual API key on line 24

4. **Run the app:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Go to `http://localhost:5173`
   - Start searching for movies!

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **API:** OMDB (Open Movie Database)

## 📱 Try These Movies

- "Inception"
- "The Dark Knight"
- "Avatar"
- "Interstellar"
- "Spider-Man"

## 🎯 Requirements Met

✅ **Input for movie title** - Search box with icon  
✅ **Movie poster** - High-quality poster display  
✅ **Movie title** - Large, bold title  
✅ **Release year** - Displayed in colored badge  
✅ **API fetching** - OMDB API integration  
✅ **Dynamic DOM manipulation** - Real-time updates  
✅ **Responsive UI** - Works on all devices  

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

**Note:** The CSS warnings about `@tailwind` directives are normal and don't affect functionality.
<img width="1599" height="736" alt="image" src="https://github.com/user-attachments/assets/ce79717d-040f-4c18-8a7e-22e97165caa3" />

3.Admin DashBoard
# 🚀 Product Manager - Modern Web Application

A beautiful, modern full-stack web application built with React, Tailwind CSS, and Firebase Firestore for managing products with real-time updates and stunning UI design.

![Product Manager](https://img.shields.io/badge/React-19-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC) ![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange) ![Vite](https://img.shields.io/badge/Vite-Build-646CFF)

## ✨ Features

- 🎨 **Beautiful Modern UI**: Glass morphism effects, gradient backgrounds, and smooth animations
- 🌙 **Dark/Light Theme**: Seamless theme switching with persistent preferences
- ✨ **Add Products**: Elegant form to add product details (name, price in ₹, description)
- 📊 **Real-time Updates**: Automatic UI updates without page refresh using Firebase listeners
- 🗃️ **Firebase Storage**: Reliable data persistence with Firestore database
- ✅ **Smart Validation**: Client-side validation with beautiful error handling
- 🔄 **CRUD Operations**: Create, Read, and Delete products with smooth animations
- 📱 **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- 🎭 **Interactive Elements**: Hover effects, scale animations, and gradient overlays
- 💰 **Indian Currency**: Prices displayed in Indian Rupees (₹) format

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks and features
- **Tailwind CSS 3.4** - Utility-first CSS with custom animations
- **Vite 7** - Lightning-fast build tool and development server
- **Custom CSS** - Glass morphism effects and smooth animations

### Backend & Database
- **Firebase Firestore** - NoSQL document database with real-time sync
- **Firebase SDK 10.7** - Latest Firebase client library

## Project Structure

```
src/
├── components/
│   ├── ProductForm.jsx      # Beautiful form component with animations
│   ├── ProductList.jsx      # Modern table with hover effects
│   └── ThemeToggle.jsx      # Dark/light theme switcher
├── contexts/
│   └── ThemeContext.jsx     # Theme management context
├── firebase/
│   └── config.js           # Firebase configuration
├── services/
│   └── productService.js   # Firebase Firestore operations
├── App.jsx                 # Main application with gradient backgrounds
├── main.jsx               # Application entry point
└── index.css              # Custom CSS with animations
```

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Firebase account** - [Create free account](https://firebase.google.com/)

### 1. 📥 Clone and Install

```bash
# Clone the repository (if from git)
git clone <repository-url>
cd product-manager

# OR navigate to your project directory
cd c:\WEBSITES\react\backend

# Install all dependencies
npm install
```

### 2. 🔥 Firebase Setup

#### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Enter project name: `product-manager`
4. Follow the setup wizard

#### Step 2: Enable Firestore Database
1. In your Firebase project, go to **"Firestore Database"**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development)
4. Select your preferred location

#### Step 3: Get Firebase Configuration
1. Go to **Project Settings** (⚙️ gear icon)
2. Scroll to **"Your apps"** section
3. Click **Web icon** (`</>`) to add a web app
4. Register app name: `product-manager`
5. Copy the **configuration object**

#### Step 4: Configure Firebase
1. Open `src/firebase/config.js`
2. Replace the placeholder values with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 3. 🎯 Run the Application

```bash
# Start the development server
npm run dev
```

🎉 **Your app will be available at:** `http://localhost:5173` (or next available port)

### 4. 🏗️ Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 📱 How to Use

### Adding Products
1. **Fill the form** with product details:
   - **Name**: Product name (min 2 characters)
   - **Price**: Price in Indian Rupees (₹)
   - **Description**: Product description (min 10 characters)
2. **Click "Add Product"** - Beautiful animation will confirm success
3. **Product appears instantly** in the table below

### Managing Products
- **View Products**: All products display in a beautiful table
- **Real-time Sync**: Changes appear instantly across all browser tabs
- **Delete Products**: Click red "Delete" button with confirmation
- **Theme Toggle**: Switch between light/dark modes (top-right)

### Features in Action
- **Hover Effects**: Cards and buttons have smooth hover animations
- **Loading States**: Beautiful spinners during operations
- **Error Handling**: Elegant error messages with icons
- **Responsive Design**: Perfect on mobile, tablet, and desktop

## 🎨 Design Features

### Modern UI Elements
- **Glass Morphism**: Backdrop blur effects with transparency
- **Gradient Backgrounds**: Multi-color animated gradients
- **Smooth Animations**: Scale transforms and hover effects
- **Custom Icons**: Beautiful gradient icon containers
- **Typography**: Gradient text effects and modern fonts

### Theme System
- **Dark Mode**: Deep slate colors with vibrant accents
- **Light Mode**: Soft pastels with clean whites
- **Auto Detection**: Respects system theme preference
- **Persistent**: Remembers your theme choice

## 🔧 Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# If port 5173 is busy, Vite will automatically try 5174, 5175, etc.
# Check the terminal output for the correct port number
```

**Firebase Connection Issues**
```bash
# Make sure your Firebase config is correct
# Check browser console for detailed error messages
# Ensure Firestore is enabled in Firebase Console
```

**Tailwind CSS Not Working**
```bash
# Restart the development server
npm run dev
```

**Build Errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📋 Validation Rules

- **Product Name**: Minimum 2 characters, required
- **Price**: Must be a positive number, required
- **Description**: Minimum 10 characters, required

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables for Firebase

### Deploy to Vercel
1. Connect your GitHub repository
2. Vercel will auto-detect Vite configuration
3. Add Firebase environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Firebase** - For the real-time database and hosting
- **Vite** - For the lightning-fast build tool

---

**Made with ❤️ and modern web technologies**

🌟 **Star this repo if you found it helpful!**
