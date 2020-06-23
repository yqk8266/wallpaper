<template>
  <div class="up-main">
    <el-row>
      <el-col :lg="14" :md="14" :sm="24">
        <div class="left-box">
          <label class="up-title">壁纸上传：</label>
          <div class="up-msg">
            <div>请将壁纸按照右侧要求，打包发送到 dizshare@sina.com 邮箱。</div>
            <div>由运营人员负责审核上传。</div>
            <div>我们会在48小时内反馈上传或审核结果。谢谢您的配合！</div>
          </div>
        </div>
      </el-col>
      <el-col :lg="10" :md="10" :sm="24" style="position:relative;overflow:hidden;">
        <div class="up-title" style="width:120px">用户上传须知：</div>
        <el-row style="color:#666;font-size:14px;letter-spacing:.5px;margin-left:120px;">
          <el-col
            style="padding:2px 0;"
            v-for="(item,index) in tips"
            :key="index"
          >{{`${index+1}、${item}`}}</el-col>
        </el-row>
        <div class="up-warn-text">所有上传壁纸需经过审核之后才可见。</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'upload',
  data(){
    return {
      tips:[
        '每组图要求不低于10张',
        '每组图要求不高于50张',
        '桌面壁纸上传最小分辨率1920x1080',
        '手机壁纸上传最小分辨率为640x960',
        '不得涉及政治、暴力、色情；',
        '涉及著作作品版权问题的不可有；',
        '请标明用户名或者邮箱，方便展示作者信息；'
      ]
    }
  }
}
</script>

<style >
</style>