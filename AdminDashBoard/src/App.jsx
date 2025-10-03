import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleProductAdded = () => {
    setRefreshTrigger(prev => prev + 1)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Header */}
        <header className="relative backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 shadow-xl border-b border-white/20 dark:border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Product Manager
                  </h1>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-lg">
                    Manage your inventory with style and real-time updates
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    Firebase
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    Live
                  </span>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            <div className="transform hover:scale-[1.01] transition-all duration-300">
              <ProductForm onProductAdded={handleProductAdded} />
            </div>
            
            <div className="transform hover:scale-[1.01] transition-all duration-300">
              <ProductList refreshTrigger={refreshTrigger} />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative backdrop-blur-sm bg-white/60 dark:bg-slate-800/60 border-t border-white/20 dark:border-slate-700/50 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                Built with ❤️ using React, Tailwind CSS, and Firebase Firestore
              </p>
              <div className="flex items-center justify-center space-x-6 text-xs text-slate-500 dark:text-slate-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                  System Online
                </span>
                <span>•</span>
                <span>Real-time Sync Active</span>
                <span>•</span>
                <span>Dark Mode Ready</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
