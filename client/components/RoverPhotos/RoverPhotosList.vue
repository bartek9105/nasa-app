<template>
  <div class="grid grid-cols-3 gap-4">
    <RoverPhotosItem
      v-for="photo in roverPhotos"
      :key="photo._id"
      :photo="photo"
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
