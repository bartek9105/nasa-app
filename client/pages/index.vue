<template>
  <div>{{ weather }}</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
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
