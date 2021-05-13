<template>
  <div class="text-gray-600">
    <h2 class="mb-8 font-bold text-lg">Today's Mars weather</h2>
    <p class="mb-4">
      <span class="font-bold">Date:</span>
      {{ weather.terrestrial_date }}
    </p>
    <p class="mb-4">
      <span class="font-bold">Season:</span>
      {{ weather.season }}
    </p>
    <p class="mb-4">
      <span class="font-bold">Min temp:</span>
      {{ weather.min_temp }}
    </p>
    <p class="mb-4">
      <span class="font-bold">Max temp:</span>
      {{ weather.max_temp }}
    </p>
    <p class="mb-4">
      <span class="font-bold">Pressure:</span>
      {{ weather.pressure }}
    </p>
    <p class="mb-4">
      <span class="font-bold">Sunrise:</span>
      {{ weather.sunrise }}
    </p>
    <p class="mb-4">
      <span class="font-bold">Sunset:</span>
      {{ weather.sunset }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MarsWeather',
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
