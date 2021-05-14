<template>
  <div>
    <h1 class="mb-12 font-bold text-2xl text-gray-700 text-purple-500">
      Rover Photos
    </h1>
    <RoverPhotosSearchbar class="mb-8" @queries="queriesHandler" />
    <div v-for="rover in roverPhotos" :key="rover._id">
      <RoverPhotosList :rover-photos="rover.photos" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RoverPhotosList from '@/components/RoverPhotos/RoverPhotosList.vue'
import RoverPhotosSearchbar from '@/components/RoverPhotos/RoverPhotosSearchbar.vue'

export default {
  name: 'RoverPhotos',
  components: {
    RoverPhotosList,
    RoverPhotosSearchbar,
  },
  computed: {
    ...mapGetters({
      roverPhotos: 'rover-photos/roverPhotos',
    }),
  },
  mounted() {
    this.fetchRoverPhotosData()
  },
  methods: {
    ...mapActions({
      fetchRoverPhotosData: 'rover-photos/fetchRoverPhotosData',
    }),
    queriesHandler(queryData) {
      this.fetchRoverPhotosData(queryData)
    },
  },
}
</script>

<style></style>
