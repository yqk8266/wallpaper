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
    <div style="position:relative;width:100%;margin-top:6rem;">
      <waterfall :col="cols" :data="imgArr" @loadmore="getList">
        <template>
          <div
            class="cell-item"
            v-for="(item,index) in imgArr"
            :key="index"
            @click="goDetail(item)"
          >
            <img v-lazy="item.src" alt="加载错误" />
            <div class="cell-item-body">
              <div class="cell-item-desc">{{item.title}}</div>
              <!-- <div class="cell-item-footer">
                <div class="cell-item-user-name">{{item.uploadUserNickName}}</div>
              </div>-->
            </div>
          </div>
        </template>
      </waterfall>
    </div>
  </div>
</template>

<script>

export default {
  name:'fengjing',
  data(){
    return{
      data:[],
      cols:2,
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
  mounted(){
   
  },
  methods:{
    goDetail(row){
      console.log(row)
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
    
    getList(){
      if(this.id){
        this.$axios.get(`api/v1/wallpaper/listPage?pageIndex=${this.page}&pageSize=18&device=2&categoryId=${this.id}`).then(res=>{
          this.page++
          let list = res.data.data || []
          
            list.forEach(row=>{
              row.src =  row.smallUrl 
              row.href =  row.largeUrl || row.largeUrl || row.resourceUrl
              row.resolution = row.pixelWidth+'x'+row.pixelHeight
            })
            this.imgArr = this.imgArr.concat(list || [])
        })
      } else {
         this.$axios.get(`/api/v1/recommend/phone/list?page=${this.page}&size=18&device=2`).then(res=>{
        this.page++
        let list = res.data.data || []
        list.forEach(row=>{
          row.src =  row.smallUrl 
          row.href =  row.largeUrl || row.largeUrl || row.resourceUrl
          row.resolution = row.pixelWidth+'x'+row.pixelHeight
        })
        this.imgArr = this.imgArr.concat(list || [])
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
    },
    goInfo(event, { index, value }){
      // //event.preventDefault()
      console.log(index,value)
    },
  }
}
</script>
<style lang="scss">
</style>