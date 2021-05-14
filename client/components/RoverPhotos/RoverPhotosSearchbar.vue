<template>
  <div class="text-gray-600">
    <form class="md:grid md:grid-cols-2 md:gap-16" @submit.prevent>
      <div class="flex flex-col mb-4 md:mb-0">
        <label for="camera" class="mb-4 font-bold">Camera</label>
        <select
          id="camera"
          v-model="queries.camera"
          name="camera"
          class="px-4 py-2 shadow-sm border-2 border-gray-200"
        >
          <option value="FHAZ">FHAZ</option>
          <option value="CHEMCAM">CHEMCAM</option>
          <option value="MAHLI">MAHLI</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label for="camera" class="mb-4 font-bold">Rover</label>
        <select
          id="camera"
          v-model="queries.rover"
          name="camera"
          class="px-4 py-2 shadow-sm border-1 border-2 border-gray-200"
        >
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirit</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RoverPhotosSearchbar',
  data() {
    return {
      queries: {
        camera: '',
        rover: '',
      },
    }
  },
  watch: {
    queries: {
      handler(newQuery) {
        this.$emit('queries', newQuery)
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
