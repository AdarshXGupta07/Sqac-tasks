import { useState } from 'react';
import { Search, Film, Calendar, Star, Sparkles, AlertCircle } from 'lucide-react';
import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movie, setMovie] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMovie = async () => {
    if (!searchTerm.trim()) {
      setError('Please enter a movie title');
      return;
    }

    setLoading(true);
    setError('');
    setMovie(null);
    setMovieList([]);
    setShowList(false);

    try {
      // Search for multiple movies using TMDB API
      console.log('Searching for movies...');
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=8265bd1679663a7ea12ac168da84d2e8&query=${encodeURIComponent(searchTerm)}`;
      const response = await fetch(searchUrl);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Search Results:', data);
        
        if (data.results && data.results.length > 0) {
          // Convert all results to our format
          const movies = data.results.slice(0, 10).map(movie => ({
            id: movie.id,
            Title: movie.title,
            Year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
            Poster: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'N/A',
            Plot: movie.overview || 'N/A',
            imdbRating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
            Genre: 'N/A',
            Director: 'N/A',
            Actors: 'N/A',
            Rated: 'N/A',
            Response: 'True'
          }));
          
          setMovieList(movies);
          setShowList(true);
          console.log('Found movies:', movies);
        } else {
          setError('No movies found. Try a different search term.');
        }
      } else {
        throw new Error('Search failed');
      }
    } catch (err) {
      console.error('Search failed:', err);
      setError('Unable to search movies. Please try again later.');
      setMovieList([]);
      setShowList(false);
    } finally {
      setLoading(false);
    }
  };

  // Function to get detailed movie info when user clicks on a movie
  const getMovieDetails = async (movieId) => {
    setLoading(true);
    setError('');
    
    try {
      console.log('Getting details for movie ID:', movieId);
      const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8265bd1679663a7ea12ac168da84d2e8&append_to_response=credits`;
      const response = await fetch(detailsUrl);
      
      if (response.ok) {
        const movieData = await response.json();
        console.log('Movie Details:', movieData);
        
        // Convert to our format with detailed info
        const detailedMovie = {
          Title: movieData.title,
          Year: movieData.release_date ? movieData.release_date.split('-')[0] : 'N/A',
          Poster: movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : 'N/A',
          Plot: movieData.overview || 'N/A',
          imdbRating: movieData.vote_average ? movieData.vote_average.toFixed(1) : 'N/A',
          Genre: movieData.genres ? movieData.genres.map(g => g.name).join(', ') : 'N/A',
          Director: movieData.credits?.crew?.find(person => person.job === 'Director')?.name || 'N/A',
          Actors: movieData.credits?.cast?.slice(0, 3).map(actor => actor.name).join(', ') || 'N/A',
          Rated: 'N/A',
          Runtime: movieData.runtime ? `${movieData.runtime} min` : 'N/A',
          Response: 'True'
        };
        
        setMovie(detailedMovie);
        setShowList(false);
      } else {
        throw new Error('Failed to get movie details');
      }
    } catch (err) {
      console.error('Details fetch failed:', err);
      setError('Unable to get movie details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovie();
    }
  };

  // Test API function
  const testAPI = async () => {
    console.log('Testing all API methods...');
    
    // Test TMDB API (working alternative)
    try {
      const tmdbUrl = `https://api.themoviedb.org/3/search/movie?api_key=8265bd1679663a7ea12ac168da84d2e8&query=inception`;
      const response = await fetch(tmdbUrl);
      const data = await response.json();
      console.log('TMDB API Response:', data);
      
      if (data.results && data.results.length > 0) {
        alert('✅ API is working! The app will fetch real movie data. Try searching for any movie!');
      } else {
        alert('⚠️ API connected but no results. Demo data will be used.');
      }
    } catch (err) {
      console.error('API Test Error:', err);
      alert('⚠️ API connection failed. Demo data will be used for popular movies.');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start py-8 px-4">
      {/* Header Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Film className="text-white w-12 h-12 md:w-16 md:h-16 animate-bounce" />
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            MovieFlix
          </h1>
        </div>
        <p className="text-white/90 text-lg md:text-xl font-medium">
          Discover movies instantly • Search by title
        </p>
        <button 
          onClick={testAPI}
          className="mt-4 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all text-sm"
        >
          Test API Connection
        </button>
      </div>

      {/* Search Section */}
      <div className="w-full max-w-2xl mb-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for any movie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-12 pr-4 py-4 text-lg bg-gray-50 border-2 border-transparent rounded-xl focus:border-purple-500 focus:outline-none focus:bg-white transition-all"
                />
              </div>
              <button
                onClick={searchMovie}
                disabled={loading}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="spinner"></div>
                    Searching...
                  </span>
                ) : (
                  'Search'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 bg-red-500/90 backdrop-blur-sm text-white px-6 py-4 rounded-xl flex items-center gap-3 animate-slideDown shadow-lg">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium">{error}</p>
          </div>
        )}
      </div>

      {/* Movie List Results */}
      {showList && movieList.length > 0 && (
        <div className="w-full max-w-6xl mb-10 animate-fadeIn">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Found {movieList.length} movies for "{searchTerm}"
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {movieList.map((movie, index) => (
              <div
                key={movie.id || index}
                onClick={() => getMovieDetails(movie.id)}
                className="bg-white/90 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105 overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  {movie.Poster && movie.Poster !== 'N/A' ? (
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <Film className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">
                    {movie.Title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {movie.Year}
                    </span>
                    {movie.imdbRating !== 'N/A' && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        {movie.imdbRating}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-white/80 text-sm">Click on any movie to see full details</p>
          </div>
        </div>
      )}

      {/* Movie Card */}
      {movie && (
        <div className="w-full max-w-5xl animate-fadeIn">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Poster Section */}
              <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-pink-100 p-8 flex items-center justify-center">
                {movie.Poster && movie.Poster !== 'N/A' ? (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="rounded-2xl shadow-2xl w-full max-w-sm hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full max-w-sm h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                    <Film className="w-24 h-24 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="md:w-2/3 p-8 md:p-12">
                {movieList.length > 0 && (
                  <button
                    onClick={() => setShowList(true)}
                    className="mb-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-all text-sm font-medium"
                  >
                    ← Back to Search Results
                  </button>
                )}
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                  {movie.Title}
                </h2>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span className="font-bold text-purple-900">{movie.Year}</span>
                  </div>
                  {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                    <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
                      <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                      <span className="font-bold text-yellow-900">{movie.imdbRating}/10</span>
                    </div>
                  )}
                  {movie.Rated && movie.Rated !== 'N/A' && (
                    <div className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full">
                      <Sparkles className="w-4 h-4 text-pink-600" />
                      <span className="font-bold text-pink-900">{movie.Rated}</span>
                    </div>
                  )}
                </div>

                {/* Additional Info */}
                <div className="space-y-4 text-gray-700">
                  {movie.Genre && movie.Genre !== 'N/A' && (
                    <div>
                      <span className="font-bold text-gray-900">Genre: </span>
                      <span className="text-lg">{movie.Genre}</span>
                    </div>
                  )}
                  {movie.Director && movie.Director !== 'N/A' && (
                    <div>
                      <span className="font-bold text-gray-900">Director: </span>
                      <span className="text-lg">{movie.Director}</span>
                    </div>
                  )}
                  {movie.Actors && movie.Actors !== 'N/A' && (
                    <div>
                      <span className="font-bold text-gray-900">Cast: </span>
                      <span className="text-lg">{movie.Actors}</span>
                    </div>
                  )}
                  {movie.Plot && movie.Plot !== 'N/A' && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-lg leading-relaxed text-gray-800">{movie.Plot}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!movie && !loading && !error && (
        <div className="text-center text-white/80 animate-fadeIn">
          <div className="mb-6 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
            <Film className="w-24 h-24 mx-auto relative animate-float" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Ready to explore?</h2>
          <p className="text-xl">Search for your favorite movies above</p>
        </div>
      )}
    </div>
  );
}