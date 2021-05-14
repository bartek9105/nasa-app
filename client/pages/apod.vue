<template>
  <div>
    <div v-if="loading" class="w-full text-center">
      <LoadingSpinner />
    </div>
    <ApodList v-if="!loading && apod.length > 0" :apod="apod" />
  </div>
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
      loading: 'isLoading',
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
