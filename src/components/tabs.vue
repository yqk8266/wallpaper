<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="raiyi-banner"
      mode="horizontal"
      @select="handleSelect"
      border="none"
      background-color="rgba(255,255,255,.6)"
    >
      <el-menu-item index="1">风景</el-menu-item>
      <el-submenu index="2">
        <template slot="title">动漫</template>
        <el-menu-item index="2-1">海贼王</el-menu-item>
        <el-menu-item index="2-2">火影忍者</el-menu-item>
        <el-menu-item index="2-3">死神</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">游戏</template>
        <el-menu-item index="3-1">Dota2</el-menu-item>
        <el-menu-item index="3-2">英雄联盟</el-menu-item>
        <el-menu-item index="3-3">王者荣耀</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">美女</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data(){
    return{
      activeIndex:'1'
    }
  },
  props: {
    msg: String
  },
  methods:{
    handleSelect(key,keyPath){
      console.log(key, keyPath);
      this.$message.success('你点了该路由：'+key)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
