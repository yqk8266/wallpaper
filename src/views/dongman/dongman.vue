<template>
  <div class="waterfall-container">
    <vue-waterfall-easy
      :imgsArr="imgArr"
      :imgWidth="330"
      ref="waterfall"
      :maxCols="cols"
      :gap="5"
      @click="goInfo"
      @scrollReachBottom="getList"
    >
      <!-- <div slot="waterfall-head">
        <div class="banner-box">
          <Swiper v-if="bannerList.length > 0" interval="4000">
            <Slide>
              <a href="/info.html" target="_blank">
                <img src="/wallpaper/banner_2.jpg" alt="加载错误" />
              </a>
            </Slide>
            <Slide v-for="(item,index) in bannerList" :key="index">
              <a href="/info.html" target="_blank">
                <img src="/wallpaper/banner_1.jpg" alt="加载错误" />
              </a>
            </Slide>
          </Swiper>
        </div>
      </div>-->
      <div class="img-info" slot-scope="props">
        <span class="some-info">{{props.value.resolution}}</span>
      </div>
      <div slot="waterfall-over">没有啦！数据就这么多了！</div>
    </vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import { Swiper, Slide } from 'vue-swiper-component';

export default {
  name:'dongman',
   components: {
    vueWaterfallEasy,
    Swiper,
    Slide
  },
  data(){
    return{
      data:[],
      cols:3,
      bannerList:[],
      imgArr:[],
      page:0
    }
  },
  created(){
    // this.getBanner()
    this.getList()
  },
  mounted(){
   
  },
  methods:{
    getList(){
      this.$axios.get(`/api/v1/wallpaper/listPage?categoryId=6&pageIndex=${this.page}&pageSize=18`).then(res=>{
        this.page++
        let list = res.data.data || []
        if(list.length==0){
          this.$refs.waterfall.waterfallOver()
        }
        list.forEach(row=>{
          row.src =  row.smallUrl
          row.href =  '/'+row.sourceUrl
          row.resolution = row.pixelWidth+'x'+row.pixelHeight
        })
        this.imgArr = this.imgArr.concat(list || [])
      }) 
    },
    getBanner(){
      this.$axios.get('/api/v1/banner/listByType?type=wallpaper').then(res=>{
        this.bannerList =res.data.data || []
      })
    },
    callback(){

    },
    goInfo(event, { value }){
      event.preventDefault()
      this.$axios.get(`/api/v1/wallpaper/getStaticPageById?id=${value.id}`).then(res=>{
         let url =window.location.origin+'/wp-api/'+ res.data.data ;
         window.open(url)
      })
    }
  }
}
</script>
<style lang="scss">
</style>