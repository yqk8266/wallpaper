<template>
  <div class="waterfall-container">
    <vue-viewer
      v-if="showPreviewVisible"
      @hidden="hidePreview"
      @viewed="switchPreview"
      ref="preview"
      :navbar="0"
      style="display:none;"
      :images="previewImg"
    ></vue-viewer>
    <vue-waterfall-easy
      :imgsArr="imgArr"
      :imgWidth="350"
      :maxCols="cols"
      :gap="10"
      @click="showPreview"
      @scrollReachBottom="getData"
    >
      <!-- <div slot="waterfall-head">1920*1080</div> -->
      <div class="img-info" slot-scope="props">
        <span class="some-info">1920 x 1080</span>
      </div>
    </vue-waterfall-easy>

    <loading :show="loading" />
  </div>
</template>

<script>
import loading from "@/views/Loading";
import vueWaterfallEasy from 'vue-waterfall-easy'
 import VueViewer from 'vue-viewerjs'

export default {
  name:'dashboard',
   components: {
    loading,
    vueWaterfallEasy,
    VueViewer
  },
  data(){
    return{
      data:[],
      sd:1,
      showPreviewVisible:false,
      previewImg:[],
      cols:4,
      loading:false,
      imgArr:[],
      imgsArr:[
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/224125-1583246485f9d4.jpg",
          avatar:
            "https://w.wallhaven.cc/full/4v/wallhaven-4v9ml0.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "www",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/223838-158324631800ad.jpg",
          avatar:
            "https://w.wallhaven.cc/full/nz/wallhaven-nzqy3y.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "952"
        },
          
       
          {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/222228-158324534867a4.jpg",
          avatar:
            "https://w.wallhaven.cc/full/eo/wallhaven-eol96o.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/221712-15832450325090.jpg",
          avatar:
            "https://w.wallhaven.cc/full/4g/wallhaven-4g7eqe.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200223/230244-1582470164f4f4.jpg",
          avatar:
            "https://w.wallhaven.cc/full/eo/wallhaven-eol96o.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/221712-15832450325090.jpg",
          avatar:
            "https://w.wallhaven.cc/full/4g/wallhaven-4g7eqe.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200223/230244-1582470164f4f4.jpg",
          avatar:
            "https://w.wallhaven.cc/full/eo/wallhaven-eol96o.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/224125-1583246485f9d4.jpg",
          avatar:
            "https://w.wallhaven.cc/full/4v/wallhaven-4v9ml0.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "www",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/223838-158324631800ad.jpg",
          avatar:
            "https://w.wallhaven.cc/full/nz/wallhaven-nzqy3y.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "952"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/222228-158324534867a4.jpg",
          avatar:
            "https://w.wallhaven.cc/full/eo/wallhaven-eol96o.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/224125-1583246485f9d4.jpg",
          avatar:
            "https://w.wallhaven.cc/full/4v/wallhaven-4v9ml0.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "www",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/223838-158324631800ad.jpg",
          avatar:
            "https://w.wallhaven.cc/full/nz/wallhaven-nzqy3y.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "952"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/222228-158324534867a4.jpg",
          avatar:
            "https://w.wallhaven.cc/full/eo/wallhaven-eol96o.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/224125-1583246485f9d4.jpg",
          avatar:
            "https://w.wallhaven.cc/full/4v/wallhaven-4v9ml0.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "www",
          like: "953"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/223838-158324631800ad.jpg",
          avatar:
            "https://w.wallhaven.cc/full/nz/wallhaven-nzqy3y.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "952"
        },
        {
          img:
            "http://pic.netbian.com/uploads/allimg/200303/222228-158324534867a4.jpg",
          avatar:
            "https://w.wallhaven.cc/full/eo/wallhaven-eol96o.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        
       
     
      ],
    }
  },
  created(){
     this.imgsArr.forEach(item=>{
      item.src = item.img
      item.href = item.avatar
      item.url = item.avatar
    })
    this.getData()
  },
  mounted(){

    // this.getData()
    // this.imgsArr.forEach(item=>{
    //   item.src = item.img
    //   item.href = item.avatar
    //   item.url = item.avatar
    // })
  },
  methods:{
    switchPreview(){
      console.log(1001)
    },
    hidePreview(e){
      console.log(e)
      this.showPreviewVisible = false
    },
    showPreview(event, { index, value }){
      event.preventDefault()
      this.showPreviewVisible = true
      setTimeout(()=>{
         console.log(123)
        this.$refs.preview.show()
        this.$refs.preview.view(index)
      },200)
     
     
    },
    getData(){
      this.imgArr = this.imgArr.concat(this.imgsArr || [])
      this.previewImg=[]
      this.imgArr.forEach(row=>{
        this.previewImg.push({
          url:row.avatar,
          title:row.title
        })
      })
    },
  }
}
</script>
<style lang="scss">
</style>