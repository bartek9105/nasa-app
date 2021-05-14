<template>
  <div class="text-gray-600">
    <form class="md:grid md:grid-cols-3 md:gap-16" @submit.prevent>
      <div class="flex flex-col mb-4 md:mb-0">
        <label for="camera" class="mb-4 font-bold">Camera</label>
        <select
          id="camera"
          v-model="queries.camera"
          name="camera"
          class="px-4 py-2 shadow-sm border-2 border-gray-200"
        >
          <option
            v-for="(camera, index) in cameras"
            :key="index"
            :value="camera"
          >
            {{ camera }}
          </option>
          <option value="CHEMCAM">CHEMCAM</option>
          <option value="MAHLI">MAHLI</option>
        </select>
      </div>
      <div class="flex flex-col mb-4 md:mb-0">
        <label for="camera" class="mb-4 font-bold">Rover</label>
        <select
          id="camera"
          v-model="queries.rover"
          name="camera"
          class="px-4 py-2 shadow-sm border-1 border-2 border-gray-200"
        >
          <option v-for="(rover, index) in rovers" :key="index" :value="rover">
            {{ rover }}
          </option>
        </select>
      </div>
      <div class="flex flex-col mb-4 md:mb-0">
        <label for="sort-order" class="mb-4 font-bold">Sort by date</label>
        <select
          id="sort-order"
          v-model="queries.sortBy"
          name="sort-order"
          class="px-4 py-2 shadow-sm border-2 border-gray-200"
        >
          <option value="earth_date:asc">Ascending</option>
          <option value="earth_date:desc">Descending</option>
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
        camera: 'CHEMCAM',
        rover: 'Curiosity',
        sortBy: 'earth_date:asc',
      },
      rovers: ['Curiosity', 'Opportunity', 'Spirit'],
      cameras: [
        'FHAZ',
        'RHAZ',
        'MAST',
        'CHEMCAM',
        'MAHLI',
        'MARDI',
        'NAVCAM',
        'PANCAM',
        'MINITES',
      ],
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
