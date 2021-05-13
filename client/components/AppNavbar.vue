<template>
  <div
    class="flex justify-between px-16 py-8 border-2 border-gray-100 shadow-sm"
  >
    <h1 class="text-purple-500 font-bold text-xl">Nasa App</h1>
    <nav>
      <ul class="flex">
        <NuxtLink
          to="/apod"
          class="mr-8 text-gray-600 hover:text-purple-500 cursor-pointer"
        >
          Astronomy picture of the day
        </NuxtLink>
        <li class="mr-8 text-gray-600 hover:text-purple-500 cursor-pointer">
          Rover photos
        </li>
        <NuxtLink
          to="/weather"
          class="text-gray-600 hover:text-purple-500 cursor-pointer"
        >
          Mars weather
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style></style>
