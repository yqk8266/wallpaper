<template>
  <div>
    <div class="fixed-header">
      <ul class="tab-ul">
        <li
          class="tab-li"
          v-for="(item,index) in bannerList"
          :key="index"
          :class="{'active':activeTab===index}"
          @click="switchTab(item,index)"
        >
          <div class="tab-div"></div>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div style="position:relative;width:100%;margin-top:6rem;-webkit-overflow-scrolling: touch;">
      <mescroll-vue ref="mescroll" :up="mescrollDown">
        <div class="cell-boxes">
          <div
            class="cell-item"
            v-for="(item,index) in imgArr"
            :key="index"
            @click="goDetail(item)"
          >
            <img v-lazy="item.src" alt="加载错误" />
            <div class="cell-item-body">
              <div class="cell-item-desc">{{item.title}}</div>
            </div>
          </div>
        </div>
      </mescroll-vue>
    </div>
  </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
 import totop from './mescroll-totop.png'

export default {
  name:'fengjing',
  components: {
    MescrollVue // 注册mescroll组件
  },
  data(){
    return{
      data:[],
      mescrollDown:{
        callback:this.getList,
        toTop: {
					//回到顶部按钮
					src: totop, //图片路径,默认null,支持网络图
					offset: 900 //列表滚动1000px才显示回到顶部按钮
        },
        htmlNodata: '<p class="upwarp-nodata">暂无更多数据哦~</p>',
      },
      bannerList:[],
      imgArr:[],
      page:0,
      activeTab:0,
      id:''
    }
  },
  created(){
    this.getBanner()
    this.getList()
  },
  methods:{
    goDetail(row){
      this.$router.push({
        name:'detail',
        query:{
          id:row.id,
          categoryId:row.categoryId
        }
      })
    },
    switchTab(row,index){
      this.page=0
      this.activeTab  = index
      this.id = row.id
      this.imgArr = []
      this.getList()
    },
    
    getList(page,mescroll){
      let that = this
      if(that.id){
        that.$axios.get(`api/v1/wallpaper/listPage?pageIndex=${that.page}&pageSize=18&device=2&categoryId=${that.id}`).then(res=>{
          that.page++
          let list = res.data.data || []
          
            list.forEach(row=>{
              row.src =  row.smallUrl 
              row.href =  row.largeUrl || row.largeUrl || row.resourceUrl
              row.resolution = row.pixelWidth+'x'+row.pixelHeight
            })
            that.imgArr = that.imgArr.concat(list || [])
            that.$nextTick(() => {
              mescroll?mescroll.endSuccess(list.length):''
            })
        })
      } else {
        that.$axios.get(`/api/v1/recommend/phone/list?page=${that.page}&size=18&device=2`).then(res=>{
        that.page++
        let list = res.data.data || []
        list.forEach(row=>{
          row.src =  row.smallUrl 
          row.href =  row.largeUrl || row.largeUrl || row.resourceUrl
          row.resolution = row.pixelWidth+'x'+row.pixelHeight
        })
        that.imgArr = that.imgArr.concat(list || [])
        that.$nextTick(() => {
          mescroll?mescroll.endSuccess(list.length):''
        })
      }) 
      }
     
    },
    getBanner(){
      this.bannerList = []
      this.$axios.get('/api/v1/categories/app/listAll').then(res=>{
        let list = res.data.data||[]
        let sonList = []
        list.forEach(row=>{
          sonList = sonList.concat(row.categoryList||[])
        })
        sonList.unshift({
          id:'',
          name:'全部'
        })
        this.bannerList = sonList
      })
    }
  }
}
</script>
<style lang="scss">
.mescroll {
  position: fixed;
  top: 57px;
  bottom: 0;
  height: auto;
}
</style>