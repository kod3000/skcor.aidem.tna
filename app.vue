<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
    class: 'h-full bg-gray-100'
  },
  bodyAttrs: {
    class: 'h-full'
  }
})
</script>