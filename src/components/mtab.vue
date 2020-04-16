<template>
  <div>
    <div class="header">
      <div class="head">
        <a href="/" class="logo" title="首页">首页</a>
        <ul class="menu">
          <li class="more" v-for="(item,index) in menuList" :key="index">
            <a class="m">
              {{item.name}}
              <i></i>
            </a>
            <div class="nav cate">
              <em></em>
              <a
                v-for="(row,idx) in item.categoryList || []"
                :key="idx"
                href="javascript:;"
                @click="getPage(row.id)"
                :title="row.name"
              >{{row.name}}</a>
              <!-- <a href="/rili/" title="日历壁纸">日历</a>
              <a href="/dongman/" title="动漫壁纸">动漫</a>
              <a href="/fengjing/" title="风景壁纸">风景</a>
              <a href="/meinv/" title="美女壁纸">美女</a>
              <a href="/youxi/" title="游戏">游戏</a>
              <a href="/yingshi/" title="影视">影视</a>
              <a href="/dongtai/">动态</a>
              <a href="/weimei/" title="唯美壁纸">唯美</a>
              <a href="/sheji/" title="设计">设计</a>
              <a href="/keai/" title="可爱壁纸">可爱</a>
              <a href="/qiche/" title="汽车壁纸">汽车</a>
              <a href="/huahui/" title="花卉壁纸">花卉</a>
              <a href="/dongwu/" title="动物">动物</a>
              <a href="/jieri/" title="节日">节日</a>
              <a href="/renwu/" title="人物">人物</a>
              <a href="/meishi/" title="美食">美食</a>
              <a href="/shuiguo/" title="水果">水果</a>
              <a href="/jianzhu/" title="建筑">建筑</a>
              <a href="/tiyu/" title="体育">体育</a>
              <a href="/junshi/" title="军事">军事</a>
              <a href="/feizhuliu/" title="非主流">非主流</a>
              <a href="/qita/" title="其他">其他</a>
              <a href="/s/wangzherongyao/" target="_blank">王者荣耀</a>
              <a href="/s/huyan/" target="_blank">护眼</a>
              <a href="/s/lol/" target="_blank">LOL</a>-->
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="maincate">
      <a href="/">首页</a>
      <a href="/#/fengjing">风景</a>
      <a href="/#/meinv">美女</a>
      <a href="/#/dongman">动漫</a>
      <a href="/#/youxi">游戏</a>
      <a href="/#/qiche">汽车</a>
      <a href="/#/meishi">美食</a>
      <a href="/#/huyan">护眼</a>
      <a href="/#/feizhuliu">非主流</a>
      <a href="/#/phone">手机壁纸</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mtabs',
  data(){
    return{
      menuList:[]
    }
  },
  props: {
    msg: String
  },
  created(){
     this.$axios.get('api/v1/categories/app/listAll').then(res=>{
       this.menuList = res.data.data||[]
     })
  },
  methods:{
    getPage(id){
    this.$emit('getPage',id)
    },
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

.nav li.on,
.nav li:hover {
  background: #333;
}

.maincate {
  display: none;
  width: 100%;
  height: 50px;
  line-height: 50px;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-overflow-scrolling: touch;
  text-align: justify;
  background: #333;
  padding: 0px 5px;
  box-sizing: border-box;
}
.maincate a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}
.maincate::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 768px) {
  .maincate {
    display: block;
  }
  .header {
    display: none;
  }
}
.menu li:hover {
  background: #333;
}
.menu {
  float: left;
  height: 54px;
  width: 493px;
  font-size: 16px;
  padding-left: 14px;
}
.menu .more {
  position: relative;
  z-index: 999;
  cursor: pointer;
}
.menu li {
  float: left;
  height: 54px;
  list-style: none;
}
.menu li a.m,
.menu li a.m:visited {
  padding-right: 25px;
}
.menu li a,
.menu li a:visited {
  display: block;
  color: #fff;
  padding: 0 18px;
  line-height: 54px;
  height: 54px;
  outline: none;
  text-decoration: none;
}
.menu a.m i,
.menu a.m:visited i {
  width: 0;
  line-height: 0;
  height: 0;
  display: block;
  border-width: 5px 5px 0;
  border-style: solid;
  border-color: #fff transparent transparent;
  font-size: 0;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.menu .more .cate {
  position: absolute;
  top: 54px;
  width: 600px;
  padding: 15px 0;
  left: 0;
  display: none;
  background: #333;
  transition: all 0.5s linear;
}
.menu li .cate a,
.menu li .cate a:visited {
  width: 73px;
}
.menu li .nav a,
.menu li .nav a:visited {
  height: 30px;
  line-height: 30px;
  padding: 0;
  text-align: center;
  display: block;
  color: #bfbfbf;
  float: left;
  font-size: 12px;
}
.menu .more:hover .cate {
  display: block;
}
.menu li .cate a:hover {
  color: #fff;
  background: #000;
}
</style>
