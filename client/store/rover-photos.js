export const state = () => ({
  roverPhotos: [],
})

export const getters = {
  roverPhotos(state) {
    return state.roverPhotos
  },
}

export const mutations = {
  SET_ROVER_PHOTOS(state, roverPhotos) {
    state.roverPhotos = roverPhotos
  },
}

export const actions = {
  async fetchRoverPhotosData({ commit }, queries) {
    commit('SET_IS_LOADING', true, { root: true })
    const roverPhotosData = await this.$axios.$get('/rover-photos', {
      params: queries,
    })
    commit('SET_IS_LOADING', false, { root: true })
    commit('SET_ROVER_PHOTOS', roverPhotosData)
  },
}
