<template>
  <div class="text-gray-700">
    <h1 class="mb-8 font-bold text-lg">Astronomy picture of the day</h1>
    <img :src="apod.url" alt="astronomy-picture-of-the-day" class="mb-8" />
    <h2 class="mb-2 font-bold">{{ apod.title }}</h2>
    <span class="text-sm">{{ apod.date }}</span>
    <p class="mt-8">{{ apod.explanation }}</p>
  </div>
</template>

<script>
export default {
  name: 'Apod',
  props: {
    apod: {
      type: Object,
      required: true,
    },
  },
}
</script>
