<template>
  <div
    class="
      flex
      justify-between
      items-center
      p-8
      border-2 border-gray-100
      shadow-sm
      bg-white
    "
  >
    <h1 class="text-purple-500 font-bold text-xl">Nasa App</h1>
    <nav class="hidden md:block">
      <ul class="flex">
        <NuxtLink
          to="/apod"
          class="mr-8 text-gray-600 hover:text-purple-500 cursor-pointer"
        >
          Astronomy picture of the day
        </NuxtLink>
        <NuxtLink
          to="/rover-photos"
          class="mr-8 text-gray-600 hover:text-purple-500 cursor-pointer"
        >
          Rovers photos
        </NuxtLink>
        <NuxtLink
          to="/weather"
          class="text-gray-600 hover:text-purple-500 cursor-pointer"
        >
          Mars weather
        </NuxtLink>
      </ul>
    </nav>
    <menu-icon
      size="1.5x"
      class="md:hidden cursor-pointer"
      @click="openMobileMenu"
    ></menu-icon>
  </div>
</template>

<script>
import { MenuIcon } from 'vue-feather-icons'

export default {
  name: 'AppNavbar',
  components: {
    MenuIcon,
  },
  methods: {
    openMobileMenu() {
      document.body.style.overflow = 'hidden'
      this.$emit('openMobileMenu')
    },
  },
}
</script>

<style></style>
