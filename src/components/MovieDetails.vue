<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MovieHeader from './MovieHeader.vue'
import NavigationTabs from './NavigationTabs.vue'
import { useMovie } from '../composables/useMovie'

const activeTab = ref('Overview')
const { movie, error, loading, fetchMovie } = useMovie()

onMounted(() => {
  fetchMovie()
})
</script>

<template>
  <div class="text-white">
    <div v-if="loading" class="p-8 text-center">
      <div class="animate-pulse">Loading movie details...</div>
    </div>
    
    <div v-else-if="error" class="p-8 text-center">
      <div class="text-red-500 bg-red-100/10 p-4 rounded">
        {{ error }}
        <button 
          @click="fetchMovie" 
          class="ml-4 text-[#01B4E4] hover:underline"
        >
          Try again
        </button>
      </div>
    </div>
    
    <template v-else-if="movie">
      <MovieHeader :movie="movie" />
      <NavigationTabs
        :active-tab="activeTab"
        @update:active-tab="activeTab = $event"
      />
    </template>
  </div>
</template>