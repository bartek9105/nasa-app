<template>
  <div>
    <AppNavbar @openMobileMenu="mobileMenu = true" />
    <AppMobileMenu v-if="mobileMenu" @closeMobileMenu="mobileMenu = false" />
    <div class="max-w-6xl mx-auto px-8 p-16">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppMobileMenu from '@/components/AppMobileMenu.vue'

export default {
  components: {
    AppNavbar,
    AppMobileMenu,
  },
  data() {
    return {
      mobileMenu: false,
    }
  },
}
</script>

<style>
body {
  background-color: rgba(243, 244, 246);
}
.nuxt-link-exact-active {
  color: #8b5cf6;
}
</style>
