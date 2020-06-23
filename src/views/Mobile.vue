<template>
  <div class="main-body">
    <div class="raiyi-container">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="key" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :key="key" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Mobile',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
