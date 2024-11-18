import { ref, shallowRef } from 'vue'
import axios from 'axios'
import type { Movie } from '../types/movie'

export function useMovie() {
  const movie = shallowRef<Movie | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(true)

  const fetchMovie = async () => {
    loading.value = true
    error.value = null
    
    try {
      const { data } = await axios.get<Movie>(
        'https://www.omdbapi.com/?i=tt3896198&apikey=d2132124',
        { 
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          timeout: 10000
        }
      )
      
      if (data.Response === 'False') {
        throw new Error(data.Error || 'Failed to fetch movie data')
      }
      
      movie.value = data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        error.value = err.response?.data?.Error || 
                     err.message || 
                     'Failed to connect to the movie database'
      } else {
        error.value = err instanceof Error ? 
                     err.message : 
                     'An unexpected error occurred'
      }
      console.error('Error fetching movie:', error.value)
    } finally {
      loading.value = false
    }
  }

  return {
    movie,
    error,
    loading,
    fetchMovie
  }
}