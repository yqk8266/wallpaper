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
      <div slot="waterfall-head">
        <div class="banner-box">
          <Swiper v-if="bannerList.length > 0" interval="4000">
            <Slide>
              <a href="/info.html" target="_blank">
                <img src="/bizhi/banner_2.jpg" alt="加载错误" />
              </a>
            </Slide>
            <Slide v-for="(item,index) in bannerList" :key="index">
              <a href="/info.html" target="_blank">
                <img src="/bizhi/banner_1.jpg" alt="加载错误" />
              </a>
            </Slide>
          </Swiper>
        </div>
        <div class="banners">
          <a href="javascript:;">
            <img src="/bizhi/ad.jpg" alt />
          </a>
        </div>
      </div>
      <div class="img-info" slot-scope="props">
        <span class="some-info">{{props.value.resolution}}</span>
      </div>
      <div slot="waterfall-over">没有啦！数据就这么多了！</div>
    </vue-waterfall-easy>

    <loading :show="loading" />
  </div>
</template>

<script>
import loading from "@/views/Loading";
import vueWaterfallEasy from 'vue-waterfall-easy'
import { Swiper, Slide } from 'vue-swiper-component';

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
      page:0,
      imgsArr:[
        {
          src:
            "/bizhi/1_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/2_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/3_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/4_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/5_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/6_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/7_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/8_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/9_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/7_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/8_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/9_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/7_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/8_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/9_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/7_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/8_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/9_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/7_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/8_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
        {
          src:
            "/bizhi/9_small.jpg",
          href:
            "/info.html",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          resolution: "1920 x 1080"
        },
       
      
        
       
     
      ],
    }
  },
  created(){
    // this.getData() //测试用数据
    this.getBanner()
    this.getList()
  },
  mounted(){
   
  },
  methods:{
    getList(){
      this.$axios.get(`/api/v1/recommend/list?page=${this.page}&size=12`).then(res=>{
        
        this.page++
        let list = res.data.data || []
        if(list.length==0){
          this.$refs.waterfall.waterfallOver()
        }
        list.forEach(row=>{
          row.src =  row.resourceUrl
          row.href =  row.sourceUrl
          
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
    goInfo(event, { index, value }){
      // event.preventDefault()
      console.log(index,value)
    },
    getData(){
      this.imgArr = this.imgArr.concat(this.imgsArr || [])
    },
  }
}
</script>
<style lang="scss">
</style>