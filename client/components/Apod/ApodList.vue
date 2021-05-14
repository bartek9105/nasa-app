<template>
  <div>
    <div class="mb-16">
      <h1 class="mb-12 font-bold text-2xl text-gray-700 text-purple-500">
        Astronomy picture of the day
      </h1>
      <ApodItem :apod="apod[0]" />
    </div>
    <div>
      <h1 class="mb-12 font-bold text-xl mt-8 text-gray-700 text-purple-500">
        Previous Astronomy pictures of the day
      </h1>
      <ApodItem
        v-for="apodItem in apod.slice(1)"
        :key="apodItem._id"
        :apod="apodItem"
        class="mb-12"
      />
    </div>
  </div>
</template>

<script>
import ApodItem from '@/components/Apod/ApodItem.vue'

export default {
  name: 'Apod',
  components: {
    ApodItem,
  },
  props: {
    apod: {
      type: Array,
      required: true,
    },
  },
}
</script>
