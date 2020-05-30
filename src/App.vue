<template>
  <div id="app">
    <input type="file" name="small_ch" ref="small_ch" @change="chooseimg('small_ch')" accept=".jpg, .jpeg, .png" />
    <input type="file" name="small_en" ref="small_en" @change="chooseimg('small_en')" accept=".jpg, .jpeg, .png" />
    <input type="file" name="small_jp" ref="small_jp" @change="chooseimg('small_jp')" accept=".jpg, .jpeg, .png" />
    <input type="file" name="detail_h5_ch" ref="detail_h5_ch" @change="chooseimg('detail_h5_ch')" accept=".jpg, .jpeg, .png" />
    <input type="file" name="detail_h5_en" ref="detail_h5_en" @change="chooseimg('detail_h5_en')" accept=".jpg, .jpeg, .png" />
    <input type="file" name="detail_h5_jp" ref="detail_h5_jp" @change="chooseimg('detail_h5_jp')" accept=".jpg, .jpeg, .png" />
    <input type="file" name="detail_pc_ch" ref="detail_pc_ch" @change="chooseimg('detail_pc_ch')" accept=".jpg, .jpeg, .png" />
    <input type="file" name="detail_pc_en" ref="detail_pc_en" @change="chooseimg('detail_pc_en')" accept=".jpg, .jpeg, .png" />
    <input type="file" name="detail_pc_jp" ref="detail_pc_jp" @change="chooseimg('detail_pc_jp')" accept=".jpg, .jpeg, .png" />
    <button @click="uploadAvatar">提交</button>
    <div class="listcon">
      <div class="list" v-for="(item,index) in imgarr" :key="index">
        <span>{{item.id}}</span> 
        <span>sort: <input type="text" v-model="item.sort" @blur="blurinput(item)"> </span> 
        <button @click="deletelist(item)">删除</button> 
       </div>
    </div>
  </div>

  
</template>

<script>
export default {
  data() {
    return {
      formData1: new FormData(),
      imgurl: "",
      imgarr: [],
    };
  },
  mounted(){
    this.getlist()
  },
  methods: {
    getlist(){
      this.$get('/product/getlist').then((res)=>{
        this.imgarr = res.data[1]
      })
    },
    chooseimg(type){
      var file = this.$refs[type];
      this.formData1.delete([type])
      this.formData1.append([type],file.files[0])
    },
    uploadAvatar() {
      console.log(this.formData1);
      this.$post("/product/add", this.formData1).then((res) => {
        console.log(res);
        this.getlist()
      });
    },
    deletelist(item){
      this.$get('/product/delete?id='+item.id).then((res)=>{
        this.getlist()
      })
    },
    blurinput(item){
      console.log(item)
      this.$post('/product/update',{
        id:item.id,
        sort:item.sort
      }).then((res)=>{
        this.getlist()
      })
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 500px;
}

img {
  width: 100px;
}
.list{
  width: 100%;
  display: flex;
  justify-content: space-between;
}

</style>
