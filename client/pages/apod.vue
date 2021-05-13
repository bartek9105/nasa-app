<template>
  <Apod :apod="apod" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Apod from '@/components/Apod.vue'

export default {
  components: {
    Apod,
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
