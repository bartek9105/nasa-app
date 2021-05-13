<template>
  <ApodList :apod="apod" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ApodList from '@/components/Apod/ApodList.vue'

export default {
  components: {
    ApodList,
  },
  computed: {
    ...mapGetters({
      apod: 'apod/apod',
    }),
  },
  mounted() {
    this.fetchApodData()
  },
  methods: {
    ...mapActions({
      fetchApodData: 'apod/fetchApodData',
    }),
  },
}
</script>
