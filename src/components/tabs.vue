<template>
  <div>
    <div class="header">
      <div class="head">
        <a href class="logo" title="首页">首页</a>
        <ul class="nav">
          <li>
            <a href="/new/" class="nav-link" rel="nofollow">风景</a>
          </li>
          <li>
            <a href="/new/" class="nav-link" rel="nofollow">美女</a>
          </li>
          <li>
            <a href="/new/" class="nav-link" rel="nofollow">游戏</a>
          </li>
          <li>
            <a href="/new/" class="nav-link" rel="nofollow">汽车</a>
          </li>
          <li>
            <a href="/new/" class="nav-link" rel="nofollow">美食</a>
          </li>
          <li>
            <a href="/new/" class="nav-link" rel="nofollow">护眼</a>
          </li>
          <li>
            <a href="/new/" class="nav-link" rel="nofollow">非主流</a>
          </li>
          <!-- <li> <a href="javascript:;" class="nav-link">分类</a>
            <div class="nav-m clearfix tran"><a href="/4kfengjing/" title="4K风景图片">4K风景</a><a href="/4kmeinv/"
                class="curr" title="4K美女图片">4K美女</a><a href="/4kyouxi/" title="4K游戏图片">4K游戏</a><a href="/4kdongman/"
                title="4K动漫图片">4K动漫</a><a href="/4kyingshi/" title="4K影视图片">4K影视</a><a href="/4kmingxing/"
                title="4K明星图片">4K明星</a><a href="/4kqiche/" title="4K汽车图片">4K汽车</a><a href="/4kdongwu/"
                title="4K动物图片">4K动物</a><a href="/4krenwu/" title="4K人物图片">4K人物</a><a href="/4kmeishi/"
                title="4K美食图片">4K美食</a><a href="/4kzongjiao/" title="4K宗教图片">4K宗教</a><a href="/4kbeijing/"
                title="4K背景图片">4K背景</a></div>
          </li>
          <li><a href="javascript:;" class="nav-link">尺寸</a>
            <div class="nav-m clearfix tran"> <a href="http://pic.netbian.com/e/search/result/?searchid=1224">4K壁纸</a><a
                href="http://pic.netbian.com/e/search/result/?searchid=1224">3840x2160壁纸</a><a
                href="http://pic.netbian.com/e/search/result/?searchid=2446">带鱼屏壁纸</a><a
                href="http://pic.netbian.com/e/search/result/?searchid=2446">3440x1440壁纸</a><a
                href="http://pic.netbian.com/e/search/result/?searchid=2453">5K壁纸</a><a
                href="http://pic.netbian.com/e/search/result/?searchid=2453">5120x2880壁纸</a><a
                href="http://pic.netbian.com/e/search/result/?searchid=2543">8K壁纸</a><a
                href="http://pic.netbian.com/e/search/result/?searchid=2543">7680x4320壁纸</a><a
                href="/shoujibizhi/">手机壁纸</a><a href="http://pic.netbian.com/e/search/result/?searchid=12689"
                target="_blank">5120x1440壁纸</a></div>
          </li>
          <li><a href="/4kdongman/" class="nav-link pc-click">4K动漫</a></li>
          <li><a href="/4kyouxi/" class="nav-link" rel="nofollow">4K游戏</a></li>
          <li><a href="/dashang.html" class="nav-link" rel="nofollow" style="color:#FFA800; target=_blank">打赏1元</a></li>-->
        </ul>
      </div>
    </div>
    <!-- <el-menu
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
    </el-menu>-->
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
.header .head,
.link,
.foot,
#main,
.lod,
.w,
.menu,
.wrap {
  width: 1000px;
  margin: 0 auto;
}

.bold {
  font-weight: 700;
}

[v-cloak] {
  display: none;
}

.tran {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.header {
  clear: both;
  background: #1b1b1b;
  height: 54px;
  min-width: 1200px;
  // margin-bottom: 10px;
}

.head {
  height: 54px;
}

a.logo,
a.logo:visited {
  float: left;
  /* width: 80px; */
  padding-right: 10px;
  display: block;
  line-height: 36px;
  height: 36px;
  font-size: 18px;
  color: #fff;
  overflow: hidden;
  /* background: url('http://pic.netbian.com/static/img/logo.jpg') no-repeat; */
  margin-top: 10px;
}

.nav {
  position: relative;
  float: left;
  /* padding-left: 30px; */
  z-index: 99;
}

.nav li {
  float: left;
  padding: 0 16px;
  position: relative;
  height: 54px;
  overflow: hidden;
}

.nav li .nav-link {
  height: 28px;
  display: block;
  line-height: 28px;
  font-size: 16px;
  color: #fff;
  margin-top: 14px;
}

// .nav li .nav-m {
//   border: 2px #eeeff2 solid;
//   background: #fff;
//   width: 288px;
//   position: absolute;
//   left: 0;
//   top: 100px;
//   padding: 9px 0 9px 18px;
//   box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
//   opacity: 0;
//   filter: alpha(opacity=0);
// }

// .nav li .more {
//   width: 120px;
//   padding: 9px 0 17px 18px;
// }

// .nav li:hover {
//   overflow: visible;
// }

// .nav li:hover .nav-m {
//   opacity: 1;
//   filter: alpha(opacity=100);
//   top: 54px;
// }

// .nav li .nav-m a {
//   float: left;
//   white-space: nowrap;
//   width: 132px;
//   line-height: 30px;
// }

// .nav li .more a {
//   width: 100px;
//   color: #333;
// }

// .nav li .nav-m a:hover {
//   color: #63b504;
// }

.nav li.on,
.nav li:hover {
  background: #333;
}
</style>
