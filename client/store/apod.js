export const state = () => ({
  apod: {},
})

export const getters = {
  apod(state) {
    return state.apod
  },
}

export const mutations = {
  SET_APOD(state, apod) {
    state.apod = apod
  },
}

export const actions = {
  async fetchApodData({ commit }) {
    commit('SET_IS_LOADING', true, { root: true })
    const apodData = await this.$axios.$get('/apod')
    commit('SET_IS_LOADING', false, { root: true })
    commit('SET_APOD', apodData)
  },
}
