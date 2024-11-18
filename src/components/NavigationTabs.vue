<script setup lang="ts">
const tabs = ['Overview', 'Media', 'Fandom', 'Share']
const emit = defineEmits<{
  (e: 'update:activeTab', value: string): void
}>()

defineProps<{
  activeTab: string
}>()
</script>

<template>
  <div class="border-b border-gray-700">
    <div class="container mx-auto">
      <div class="flex space-x-8">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="emit('update:activeTab', tab)"
          class="px-4 py-4 hover:text-[#01B4E4]"
          :class="{ 'border-b-2 border-[#01B4E4]': activeTab === tab }"
        >
          {{ tab }}
        </button>
      </div>
    </div>
  </div>
</template>