<template>
  <div>
    <div class="detail-box" :class="{'active':isOpen}">
      <swiper
        class="detail-swiper"
        v-if="imgList.length>0"
        :autoPlay="false"
        :showIndicator="false"
        @slideChangeTransitionEnd="getNum"
        ref="swiper"
      >
        <swiper-slide
          v-for="(item,index) in imgList"
          :key="index"
          :class="{'isFullScreen':isFullScreen}"
        >
          <div class="img-box" :style="{'height': imgHeight}">
            <span @click="goBack" class="iconfont icon-shanchu"></span>
            <img
              @click="swicthFullScreen"
              v-lazy="item.resourceUrl || item.largeUrl"
              lazy="loading"
              alt="加载错误"
            />
          </div>
          <div class="user-box">
            <div>上传者：{{item.uploadUserNickName||'李磊'}}</div>
            <div class="icon-box">
              <div v-show="showBox" class="hidden-box">
                <a
                  v-for="(row,idx) in groupList"
                  :href="row.href"
                  target="_blank"
                  :alt="row.alt"
                  :itle="row.title"
                  :key="idx"
                >
                  <img
                    border="0"
                    src="https://pub.idqqimg.com/wpa/images/group.png"
                    alt="壁纸学院初中部"
                    title="壁纸学院初中部"
                  />
                </a>
              </div>
              <span class="iconfont icon-dianshang" @click="openUrl"></span>
              <span class="iconfont icon-shenglve" @click="showBox=!showBox"></span>
            </div>
          </div>

          <div v-for="row in list" :key="row.id" class="good_box" @click="goPage(row)">
            <div class="good-img-box">
              <img :src="row.goodsImageUrl" alt />
            </div>

            <div class="good-info-box">
              <div>{{row.goodsName}}</div>
              <div class="coupon-item">{{row.couponPrice}}</div>
              <div class="price-box">
                <div style="color:red;font-size:1.2rem;">
                  <span style="font-size:1rem;">￥</span>
                  {{(row.price-row.couponPriceNum).toFixed(2)}}元
                  <span
                    style="text-decoration:line-through;color:#666;font-size:1.1rem;margin-left:6px;"
                  >原价：{{row.price}}元</span>
                </div>
                <div class="good-btn">立即领取</div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import '@/styles/iconfont.css' 

export default {
  name:'detail',
  data(){
    return {
      isLoadOver:false,
      isFullScreen:false,
      imgList:[],
      isOpen:false,
      wallpaperId:'',
      categoryId:'',
      list:[],
      oldIndex:0,
      downloadUrl:'',
      groupList:[],
      imgHeight:'400px',
      showBox:false,
    }
  },
  created(){
    this.imgHeight =  document.body.clientHeight*0.75+'px'
  },
  mounted(){
    this.categoryId = this.$route.query.categoryId
    this.wallpaperId = this.$route.query.id
    this.getList()
    this.getGood()
    this.getConfig()
  },
  methods:{
    goPage(row){
       let endDate = new Date(row.couponEndDate).getTime()
        let nowTime = new Date().getTime()
        if (endDate - nowTime > 0) {
          window.open(row.couponUrl, '_blank')
        } else {
          window.open(row.goodsUrl, '_blank')
        }
    },
    openUrl(){
      window.open(this.downloadUrl)
    },
    swicthFullScreen(){
      this.isFullScreen = !this.isFullScreen
      if(this.isFullScreen){
        this.imgHeight =  document.body.clientHeight*1+'px'
      }else{
        this.imgHeight =  document.body.clientHeight*0.75+'px'
      }
    },
    goBack(){
      this.$router.push({
        name:'category'
      })
    },
    getNum(){
      let that = this
      let data = this.$refs.swiper.$swiper.activeIndex
      let dataObj = this.imgList[data]
      if(window.history){
          window.history.replaceState(null, null, `#/phone/category/detail?id=${dataObj.id}&categoryId=${dataObj.categoryId}`)
      }
      if (this.$wechat && this.$wechat.isWechat()) {
        
        this.$wechat.share({  
              title:dataObj.title,
              desc: 'wp.8yx.co,找寻属于你自己的精选壁纸~',  
              img: dataObj.smallUrl|| dataObj.sourceUrl
        },window.location.href) 
			}
      if(data==this.oldIndex){
        this.$message.info('暂无数据')
        return 
      }
      if (this.$wechat && this.$wechat.isWechat()) {
      let dataObj = that.imgList[data]
        this.$wechat.share({  
              title:dataObj.title,
              desc: 'wp.8yx.co,找寻属于你自己的精选壁纸~',  
              img: dataObj.smallUrl|| dataObj.sourceUrl
        },window.location.href) 
      } 
      if(this.isLoadOver){
        that.getGood()
        return
      }
      if(this.imgList.length-data<5){
        this.$axios.get(`/api/v1/wallpaper/listFrontAndBehind?wallpaperId=${this.imgList[this.imgList.length-1].id}&categoryId=${this.categoryId}&size=20`).then(res=>{
          let list = res.data.data||[]
          if(list.length>0){
            list.forEach((row,idx)=>{
              if(idx>0){
              this.imgList.push(row)

              }
            })
            that.getGood()
            if(list.length<20){
              this.isLoadOver = true
            }
          }else{
            this.isLoadOver = true
          }
      
          this.oldIndex = data
        })
      }else{
        this.oldIndex = data
        this.getGood()
      }
    },
    getList(){
       this.$axios.get(`/api/v1/wallpaper/listFrontAndBehind?wallpaperId=${this.wallpaperId}&categoryId=${this.categoryId}&size=20`).then(res=>{
         this.imgList = res.data.data||[]
          let dataObj = this.imgList[0]
          if (this.$wechat && this.$wechat.isWechat()) {
            this.$wechat.share({  
                  title:dataObj.title,
                  desc: 'wp.8yx.co,找寻属于你自己的精选壁纸~',  
                  img: dataObj.smallUrl|| dataObj.sourceUrl
            },window.location.href) 
					} 
       })
    },
    getConfig(){
       this.$axios.get(`/api/v1/wallpaper/listLink`).then(res=>{
         this.downloadUrl = res.data.data.downloadUrl
         this.groupList = res.data.data.linkInfos||[]
       })
    },
     getGood: function () {
        let self = this
        this.$axios.post(`http://shenghuojun.zt.raiyi.com/promotion/service/goods/random?size=1`).then(function (response) {
          self.list = response.data.data || []
        }).catch(function (error) {
          console.log(error);
        });
      }
  }
}
</script>

<style lang="scss">
.detail-box {
  position: relative;
  .img-box {
    position: relative;
    text-align: center;
    span {
      position: absolute;
      top: 10px;
      left: 10px;
      color: #999;
      font-size: 1.8rem;
    }
    img {
      background-size: contain;
      height: 100%;
      width: auto;
    }
  }

  .isFullScreen {
    .img-box {
      .icon-shanchu {
        display: none;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
  .user-box {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    font-size: 1.3rem;
    color: #666;
    .icon-box {
      position: relative;
      color: #409eff;
      .hidden-box {
        position: absolute;
        padding: 4px 0;
        background: #fff;
        border-radius: 4px;
        top: -130px;
        right: 0px;
        z-index: 9;
        height: 120px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
          0 4px 12px 1px rgba(0, 0, 0, 0.14);
        -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
          0 4px 12px 1px rgba(0, 0, 0, 0.14);
        &:before {
          content: "";
          display: block;
          width: 12px;
          height: 12px;
          position: absolute;
          top: 114px;
          right: 20px;
          transform: rotate(-135deg);
          background: #fff;
          border-left: 1px solid #e2e2e2;
          border-top: 1px solid #e2e2e2;
        }
        a {
          display: block;
          width: 80px;
          height: 20px;
          padding: 0;
          margin-bottom: 15px;
        }
      }
      span {
        display: inline-block;
        margin: 0 10px;
        font-size: 1.8rem;
      }
    }
  }
}
.good_box {
  // border: 1px solid #666;
  // border-radius: 4px;
  // padding: 25px 0px;
  position: relative;
  display: flex;
  .good-img-box {
    width: 7rem;
    height: 7rem;
    padding: 5px;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .good-info-box {
    position: relative;
    flex: 1;
    padding: 0 8px;
    font-size: 1.2rem;
    .coupon-item {
      text-align: center;
      border: 1px dashed #e5004f;
      border-radius: 4px;
      height: 3rem;
      line-height: 3rem;
      margin: 0.5rem 6rem;
      color: #e5004f;
      transform: rotate(29deg);
    }
    .price-box {
      position: absolute;
      box-sizing: border-box;
      bottom: 0.55rem;
      left: 0;
      right: 15px;
      display: flex;
      padding: 0px 10px;
      justify-content: space-between;
      .good-btn {
        color: #409eff;
      }
    }
  }
}
</style>