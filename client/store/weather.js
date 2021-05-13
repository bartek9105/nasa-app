export const state = () => ({
  weather: {},
})

export const getters = {
  weather(state) {
    return state.weather
  },
}

export const mutations = {
  SET_WEATHER(state, weather) {
    state.weather = weather
  },
}

export const actions = {
  async fetchWeatherData({ commit }) {
    const weatherData = await this.$axios.$get('/perservance-weather')
    commit('SET_WEATHER', weatherData[0])
  },
}
