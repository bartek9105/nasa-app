<template>
  <div class="w-screen h-screen bg-white absolute z-10 top-0 left-0 p-16">
    <nav class="flex flex-col items-end">
      <x-icon size="2x" class="mb-8" @click="closeMobileMenu"></x-icon>
      <ul class="flex flex-col text-right">
        <li
          class="text-gray-600 mb-12 text-xl font-bold"
          @click="closeMobileMenu"
        >
          <NuxtLink to="/apod"> Astronomy picture of the day </NuxtLink>
        </li>
        <li
          class="text-gray-600 mb-12 text-xl font-bold"
          @click="closeMobileMenu"
        >
          Rover photos
        </li>
        <li
          class="text-gray-600 mb-12 text-xl font-bold"
          @click="closeMobileMenu"
        >
          <NuxtLink to="/weather"> Mars weather </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
  name: 'AppMobileMenu',
  components: {
    XIcon,
  },
  methods: {
    closeMobileMenu() {
      document.body.style.overflow = 'visible'
      this.$emit('closeMobileMenu')
    },
  },
}
</script>
