export const state = () => ({
  isLoading: false,
})

export const getters = {
  isLoading(state) {
    return state.isLoading
  },
}

export const mutations = {
  SET_IS_LOADING(state, payload) {
    state.isLoading = payload
  },
}
