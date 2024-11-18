<script setup lang="ts">
import type { Movie } from '../types/movie'
import { computed } from 'vue'

const props = defineProps<{
  movie: Movie
}>()

const userScore = computed(() => {
  const score = parseFloat(props.movie.imdbRating)
  return (score * 10).toFixed(0)
})
</script>

<template>
  <div class="bg-gradient-to-r from-[#032541] to-[#032541]/80 p-8">
    <div class="container mx-auto flex flex-col md:flex-row gap-8">
      <div class="flex-shrink-0">
        <img 
          :src="movie.Poster" 
          :alt="movie.Title" 
          class="w-64 rounded-lg shadow-lg"
          @error="$event.target.src = 'https://via.placeholder.com/256x384?text=No+Poster'"
        />
      </div>
      
      <div class="flex flex-col justify-center flex-grow">
        <h1 class="text-4xl font-bold mb-2">
          {{ movie.Title }} ({{ movie.Year }})
        </h1>
        <div class="flex items-center gap-2 text-sm mb-4 flex-wrap">
          <span>{{ movie.Rated }}</span>
          <span class="text-gray-400">•</span>
          <span>{{ movie.Runtime }}</span>
          <span class="text-gray-400">•</span>
          <span>{{ movie.Genre }}</span>
        </div>
        
        <div class="flex items-center gap-6 mb-6 flex-wrap">
          <div class="flex items-center gap-2">
            <div class="w-16 h-16 rounded-full bg-[#081c22] flex items-center justify-center border-4" :class="[
              Number(userScore) >= 70 ? 'border-green-500' :
              Number(userScore) >= 40 ? 'border-yellow-500' :
              'border-red-500'
            ]">
              <span class="text-xl font-bold">{{ userScore }}%</span>
            </div>
            <span>User Score</span>
          </div>
          
          <div class="flex gap-4">
            <button class="hover:text-[#01B4E4] transition-colors duration-200">
              <span class="sr-only">Add to favorites</span>
              Like
            </button>
            <button class="hover:text-[#01B4E4] transition-colors duration-200">
              <span class="sr-only">Add to watchlist</span>
              Watchlist
            </button>
            <button class="hover:text-[#01B4E4] transition-colors duration-200">
              <span class="sr-only">Rate movie</span>
              Rate
            </button>
            <button class="bg-[#01B4E4] px-4 py-2 rounded hover:bg-[#01B4E4]/90 transition-colors duration-200">
              Play Trailer
            </button>
          </div>
        </div>
        
        <p class="italic text-gray-400 mb-4">{{ movie.Plot }}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div v-if="movie.Director">
            <h4 class="font-bold text-gray-300">Director</h4>
            <p>{{ movie.Director }}</p>
          </div>
          <div v-if="movie.Writer">
            <h4 class="font-bold text-gray-300">Writer</h4>
            <p>{{ movie.Writer }}</p>
          </div>
          <div v-if="movie.Actors">
            <h4 class="font-bold text-gray-300">Stars</h4>
            <p>{{ movie.Actors }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>