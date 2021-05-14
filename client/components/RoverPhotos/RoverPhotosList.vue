<template>
  <div class="md:grid md:grid-cols-3 md:gap-4">
    <RoverPhotosItem
      v-for="photo in roverPhotos"
      :key="photo._id"
      :photo="photo"
      class="mb-8 md:mb-0"
    />
  </div>
</template>

<script>
import RoverPhotosItem from '@/components/RoverPhotos/RoverPhotosItem.vue'

export default {
  name: 'RoverPhotosList',
  components: {
    RoverPhotosItem,
  },
  props: {
    roverPhotos: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
