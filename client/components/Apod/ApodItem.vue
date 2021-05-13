<template>
  <div class="text-gray-700 mb-24 bg-white shadow-sm rounded-md p-8">
    <h2 class="mb-6 font-bold text-lg">{{ apod.title }}</h2>
    <img
      :src="apod.url"
      alt="astronomy-picture-of-the-day"
      class="mb-8 rounded-md"
    />
    <span class="text-sm bg-purple-400 rounded-md px-4 py-2 text-white">
      Date: {{ apod.date }}
    </span>
    <div class="mt-8">
      <h3 class="font-bold">Description</h3>
      <p class="mt-4">{{ apod.explanation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApodItem',
  props: {
    apod: {
      type: Object,
      required: true,
    },
  },
}
</script>
