<template>
  <div>
    <h1 class="mb-12 font-bold text-2xl text-gray-700 text-purple-500">
      Rover Photos
    </h1>
    <div v-for="rover in roverPhotos" :key="rover._id">
      <RoverPhotosList :rover-photos="rover.photos" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RoverPhotosList from '@/components/RoverPhotos/RoverPhotosList.vue'

export default {
  name: 'RoverPhotos',
  components: {
    RoverPhotosList,
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
  },
}
</script>

<style></style>
