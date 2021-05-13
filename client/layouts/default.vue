<template>
  <div>
    <AppNavbar />
    <div class="max-w-6xl mx-auto px-8 pt-16">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'

export default {
  components: {
    AppNavbar,
  },
}
</script>

<style>
body {
  background-color: rgba(243, 244, 246);
}
</style>
