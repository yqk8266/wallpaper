<template>
  <div class="waterfall-container">
    <vue-waterfall-easy
      :imgsArr="imgArr"
      :imgWidth="330"
      ref="waterfall"
      :maxCols="cols"
      :gap="5"
      :alt="`加载失败`"
      @click="goInfo"
      @scrollReachBottom="getList"
    >
      <div slot="waterfall-head">
        <div class="banner-box">
          <Swiper v-if="bannerList.length > 0" interval="4000">
            <!-- <Slide>
              <a href="/info_9345.html" target="_blank">
                <img src="http://10.10.80.43:8080/api/v1/file/wallpaper/1/1.jpg" alt="加载错误" />
              </a>
            </Slide>-->
            <Slide v-for="(item,index) in bannerList" :key="index">
              <a :href="item.toUrl" target="_blank">
                <img v-lazy="item.resourceUrl" lazy="loading" alt="加载错误" />
              </a>
            </Slide>
          </Swiper>
        </div>
        <div class="banners">
          <a href="javascript:;">
            <img src="/wallpaper/ad.jpg" alt />
          </a>
        </div>
      </div>
      <div class="img-info" slot-scope="props">
        <span class="some-info">{{props.value.resolution}}</span>
      </div>
      <div slot="waterfall-over">没有啦！数据就这么多了！</div>
    </vue-waterfall-easy>
    <!-- <img src="http://10.10.80.43:8080/api/v1/file/wallpaper/1/1.jpg" alt /> -->
    <loading :show="loading" />
  </div>
</template>

<script>
import loading from "@/views/Loading";
import vueWaterfallEasy from 'vue-waterfall-easy'
import { Swiper, Slide } from 'vue-swiper-component';
import { isMobile } from '@/utils/index'

export default {
  name:'dashboard',
   components: {
    loading,
    vueWaterfallEasy,
    Swiper,
    Slide
  },
  data(){
    return{
      data:[],
      cols:3,
      bannerList:[],
      loading:false,
      imgArr:[],
      page:0
    }
  },
  created(){
    this.getBanner()
    this.getList()
  },
  mounted(){
    if(isMobile()){
      console.log(1)
    }else{
      console.log(2)
    }
  },
  methods:{
    getList(){
      this.$axios.get(`/api/v1/recommend/list?page=${this.page}&size=18`).then(res=>{
        
        this.page++
        let list = res.data.data || []
        if(list.length==0){
          this.$refs.waterfall.waterfallOver()
        }
        list.forEach(row=>{
          row.src =  row.smallUrl || row.resourceUrl
          row.href = '/'+row.sourceUrl
          row.resolution = row.pixelWidth+'x'+row.pixelHeight
          
        })
        this.imgArr = this.imgArr.concat(list || [])
      }) 
    },
    goInfo(event, { value }){
      event.preventDefault()
      this.$axios.get(`/api/v1/wallpaper/getStaticPageById?id=${value.id}`).then(res=>{
         let url =window.location.origin+'/wp-api/'+ res.data.data ;
         window.open(url)
      })
    },
    getBanner(){
      this.$axios.get('/api/v1/banner/listByType?type=wallpaper').then(res=>{
        this.bannerList =res.data.data || []
      })
    }
  }
}
</script>
<style lang="scss">
</style>