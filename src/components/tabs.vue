<template>
  <div>
    <div class="header">
      <div class="head">
        <a href="/" class="logo" title="首页">首页</a>
        <ul class="nav">
          <li>
            <a href="/#/fengjing" class="nav-link" rel="nofollow">风景</a>
          </li>
          <li>
            <a href="/#/meinv" class="nav-link" rel="nofollow">美女</a>
          </li>
          <li>
            <a href="/#/dongman" class="nav-link" rel="nofollow">动漫</a>
          </li>
          <li>
            <a href="/#/youxi" class="nav-link" rel="nofollow">游戏</a>
          </li>
          <li>
            <a href="/#/qiche" class="nav-link" rel="nofollow">汽车</a>
          </li>
          <li>
            <a href="/#/meishi" class="nav-link" rel="nofollow">美食</a>
          </li>
          <li>
            <a href="/#/huyan" class="nav-link" rel="nofollow">护眼</a>
          </li>
          <li>
            <a href="/#/feizhuliu" class="nav-link" rel="nofollow">非主流</a>
          </li>
          <!-- <li>
            <a href="/#/phone" class="nav-link" rel="nofollow">手机壁纸</a>
          </li>-->
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
        <!-- <div class="login-box">
          <div class="no-user" @click="showLogin">
            <img src="../assets/nouser.png" alt />
          </div>
        </div>-->
        <div class="login-box">
          <a href="/#/upload">上传壁纸</a>
        </div>
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
      <a href="/#/upload">上传壁纸</a>
    </div>
    <!-- <el-dialog title="登录" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>-->
    <div class="dialog-box" v-if="dialogVisible">
      <div class="dialog-form">
        <i class="el-icon-close delete-icon" @click="dialogVisible=false"></i>
        <div class="login-title">用户登录</div>
        <el-form
          :model="loginForm"
          status-icon
          :rules="rules"
          ref="loginForm"
          label-width="60px"
          class="demo-loginForm"
        >
          <el-form-item label label-width="0" prop="username">
            <el-input
              type="password"
              v-model="loginForm.username"
              placeholder="手机/邮箱"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label label-width="0" prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="密码"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label-width="0" style="margin-bottom:0px;">
            <el-button style="width:100%" type="primary">登录/注册</el-button>
          </el-form-item>
          <el-form-item label-width="0">
            <el-button type="text">忘记密码？</el-button>
            <!-- <el-button type="text">立即注册</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data(){
    return{
      dialogVisible:false,
      loginForm:{
        username:'',
        password:''
      },
      rules:{
         username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
         password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
      }
    }
  },
  props: {
    msg: String
  },
  methods:{
    goUpload(){
      this.$router.push('/upload')
    },
    handleSelect(key,keyPath){
      console.log(key, keyPath);
      this.$message.success('你点了该路由：'+key)
    },
    showLogin(){
      this.dialogVisible = true
      this.loginForm.username = ''
      this.loginForm.password = ''
    },
    handleClose(){
      this.dialogVisible = false
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
.login-box {
  float: right;
  height: 54px;
  line-height: 54px;
  color: #fff;
  padding: 0 5px;
}
.no-user {
  // line-height: 54px;
  margin-top: 13px;
}
.no-user img {
  width: 30px;
  height: 30px;
  background: #aaa;
  padding: 6px;
  border-radius: 100%;
}
.no-user:hover img {
  background: #e1e3e5;
  cursor: pointer;
}
</style>
