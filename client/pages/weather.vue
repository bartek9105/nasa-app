<template>
  <div>
    <div v-if="loading" class="w-full text-center">
      <LoadingSpinner />
    </div>
    <MarsWeather v-else :weather="weather" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MarsWeather from '@/components/MarsWeather.vue'

export default {
  components: {
    MarsWeather,
  },
  computed: {
    ...mapGetters({
      weather: 'weather/weather',
      loading: 'isLoading',
    }),
  },
  mounted() {
    this.fetchWeatherData()
  },
  methods: {
    ...mapActions({
      fetchWeatherData: 'weather/fetchWeatherData',
    }),
  },
}
</script>
