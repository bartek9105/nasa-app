<template>
  <MarsWeather :weather="weather" />
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
