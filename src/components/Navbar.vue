<script setup lang="ts">
const menuItems = ['Movies', 'TV Shows', 'People', 'More']
</script>

<template>
  <nav class="bg-[#032541] text-white p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <span class="text-[#01B4E4] font-bold text-2xl">TMDB</span>
        <div class="hidden md:flex space-x-6">
          <a v-for="item in menuItems" :key="item" href="#" class="hover:text-[#01B4E4]">
            {{ item }}
          </a>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button class="bg-white text-[#032541] px-4 py-1 rounded">EN</button>
        <button class="text-white hover:text-[#01B4E4]">Login</button>
        <button class="text-white hover:text-[#01B4E4]">Join TMDB</button>
      </div>
    </div>
  </nav>
</template>