<template>
  <div class="text-gray-700 shadow-sm">
    <img :src="photo.img_src" alt="mars-photo" class="rounded-md" />
    <div class="bg-white px-8 py-6 rounded-md">
      <h2 class="font-bold">Camera: {{ photo.camera.name }}</h2>
      <h3 class="font-bold">Rover: {{ photo.rover.name }}</h3>
      <h4 class="font-bold">Date: {{ photo.earth_date }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoverPhotosItem',
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
}
</script>
