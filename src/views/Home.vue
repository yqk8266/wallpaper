<template>
  <div class="main-body">
    <r-tabs class="top-tabs" />
    <div class="raiyi-container">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="key" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :key="key" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import rTabs from '@/components/tabs.vue'

export default {
  name: 'Home',
  components: {
    rTabs
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
