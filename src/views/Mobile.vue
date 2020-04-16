<template>
  <div class="main-body">
    <!-- <m-tabs class="top-tabs" /> -->
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

export default {
  name: 'Mobile',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
