<template>
  <div id="app" v-loading="loading">
    <div class="title">
      Lacrae 产品操作系统
      <div class="Add" @click="addproduct()">
        添加
      </div>
    </div>
    <div class="conlist navlist" >
      <div class="number">序号</div>
      <div class="content">中</div>
      <div class="content">En</div>
      <div class="content">JP</div>
      <div class="sort">排序</div>
      <div class="edit">操作</div>
    </div>
    <div class="conlist" style="border-top:none">
        <div class="number">
          <div v-for="(item,key) in imgarr[1]" :key="key">{{key+1}}</div>
        </div>
        <div class="content">
          <div class="imglist" v-for="(item,key) in imgarr[1]" :key="key">
            <img class="small" v-if="item.small_ch" :src="item.small_ch" alt="" srcset="">
            <div class="filebox" v-else>
              <input type="file" name="small_ch" ref="small_ch" @change="chooseimg('small_ch')" accept=".jpg, .jpeg, .png" />
              <div class="tip">
                <img src="./assets/add.png" alt="" srcset=""><br><span>列表中文图</span> 
              </div>
            </div>
            <img class="detail_h5" v-if="item.detail_h5_ch" :src="item.detail_h5_ch" alt="" srcset="">
            <div class="filebox" v-else>
              <input type="file" name="detail_h5_ch" ref="detail_h5_ch" @change="chooseimg('detail_h5_ch')" accept=".jpg, .jpeg, .png" />
              <div class="tip">
                <img src="./assets/add.png" alt="" srcset=""><br><span>H5中文详情图</span> 
              </div>
            </div>
            
            <img class="detail_pc" v-if="item.detail_pc_ch" :src="item.detail_pc_ch" alt="" srcset="">
            <div class="filebox" v-else>
              <input type="file" name="detail_pc_ch" ref="detail_pc_ch" @change="chooseimg('detail_pc_ch')" accept=".jpg, .jpeg, .png" />
              <div class="tip">
                <img src="./assets/add.png" alt="" srcset=""><br><span>PC中文详情图</span> 
              </div>
            </div>
            
          </div>
        </div>
        <div class="content">
          <div class="imglist" v-for="(item,key) in imgarr[2]" :key="key">
            <img class="small" v-if="item.small_en" :src="item.small_en" alt="" srcset="">
            <div class="filebox" v-else>
              <input type="file" name="small_en" ref="small_en" @change="chooseimg('small_en')" accept=".jpg, .jpeg, .png" />
              <div class="tip">
                <img src="./assets/add.png" alt="" srcset=""><br><span>列表英文图</span> 
              </div>
            </div>
            <img class="detail_h5" v-if="item.detail_h5_en" :src="item.detail_h5_en" alt="" srcset="">
            <div class="filebox" v-else>
              <input type="file" name="detail_h5_en" ref="detail_h5_en" @change="chooseimg('detail_h5_en')" accept=".jpg, .jpeg, .png" />
              <div class="tip">
                <img src="./assets/add.png" alt="" srcset=""><br><span>H5英文详情图</span> 
              </div>
            </div>
            
            <img class="detail_pc" v-if="item.detail_pc_en" :src="item.detail_pc_en" alt="" srcset="">
            <div class="filebox" v-else>
              <input type="file" name="detail_pc_en" ref="detail_pc_en" @change="chooseimg('detail_pc_en')" accept=".jpg, .jpeg, .png" />
              <div class="tip">
                <img src="./assets/add.png" alt="" srcset=""><br><span>PC英文详情图</span> 
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="imglist" v-for="(item,key) in imgarr[3]" :key="key">
            <img class="small" v-if="item.small_jp" :src="item.small_jp" alt="" srcset="">
            <div class="filebox" v-else>
              <input type="file" name="small_jp" ref="small_jp" @change="chooseimg('small_jp')" accept=".jpg, .jpeg, .png" />
              <div class="tip">
                <img src="./assets/add.png" alt="" srcset=""><br><span>列表日文图</span> 
              </div>
            </div>
            <img class="detail_h5" v-if="item.detail_h5_jp" :src="item.detail_h5_jp" alt="" srcset="">
            <div class="filebox" v-else>
              <input type="file" name="detail_h5_jp" ref="detail_h5_jp" @change="chooseimg('detail_h5_jp')" accept=".jpg, .jpeg, .png" />
              <div class="tip">
                <img src="./assets/add.png" alt="" srcset=""><br><span>H5日文详情图</span> 
              </div>
            </div>
            
            <img class="detail_pc" v-if="item.detail_pc_jp" :src="item.detail_pc_jp" alt="" srcset="">
            <div class="filebox" v-else>
              <input type="file" name="detail_pc_jp" ref="detail_pc_jp" @change="chooseimg('detail_pc_jp')" accept=".jpg, .jpeg, .png" />
              <div class="tip">
                <img src="./assets/add.png" alt="" srcset=""><br><span>PC日文详情图</span> 
              </div>
            </div>
          </div>
        </div>
        <div class="sort">
          <div v-for="(item,key) in imgarr[1]" :key="key">
              <input v-if="item.id" v-model="item.sort" type="tel"  @blur="blurinput(item)">
          </div>
        </div>
        <div class="edit">
          <div v-for="(item,key) in imgarr[1]" :key="key">
            <span v-if="item.id" @click="deletelist(item)">删除</span>
            <span style="background:#67c23a" @click="uploadAvatar" v-else>保存</span>
          </div>
        </div>
    </div>
  </div>
 
  
</template>

<script>
export default {
  data() {
    return {
      formData1: new FormData(),
      navArr:[
        '序号',
        '中文',
        '英文',
        '日文',
        '排序',
        '编辑'
      ],
      loading:false,
      imgarr: {
       
      },
    };
  },
  mounted(){
    this.getlist()
  },
  methods: {
    getlist(){
       this.$get('/product/getlist').then((res)=>{
        //this.loading = false
        if(res.error == '0000'){
          this.imgarr = res.data
        }else{
          this.$message({
            message: '当前网络不稳定，请稍后再试',
            error: 'success'
          });
        }
      })
    },
    checkparams(){
      return new Promise((resolve,reject)=>{
        let flag = true;
        for(let index in this.imgarr){
          let length = this.imgarr[index].length
          let obj = this.imgarr[index][length-1];
          for(let key in obj){
            if(!obj[key] && key != 'sort'){
              flag = false;
              resolve(false)
              return;
            }
          }
        }
        resolve(true)
      })
    },
    getFileURL(file) {
      let getUrl = null;
      if (window.createObjectURL !== undefined) { 
        getUrl = window.createObjectURL(file);
      } else if (window.URL !== undefined) { 
        getUrl = window.URL.createObjectURL(file);
      } else if (window.webkitURL !== undefined) { 
        getUrl = window.webkitURL.createObjectURL(file);
      }
      return getUrl;
    },
    chooseimg(type){
      var file = this.$refs[type][0];
      this.formData1.delete([type])
      this.formData1.append([type],file.files[0])
      switch(type){
        case 'small_ch':
        case 'detail_h5_ch':
        case 'detail_pc_ch':
          this.imgarr[1][this.imgarr[1].length-1][type] = this.getFileURL(file.files[0])
          break;
        case 'small_en':
        case 'detail_h5_en':
        case 'detail_pc_en':
          this.imgarr[2][this.imgarr[2].length-1][type] = this.getFileURL(file.files[0])
          break;
        case 'small_jp':
        case 'detail_h5_jp':
        case 'detail_pc_jp':
          this.imgarr[3][this.imgarr[3].length-1][type] = this.getFileURL(file.files[0])
          break;
      }
    },
    uploadAvatar() {
      var _this = this;
      this.checkparams().then((flag)=>{
        if(!flag){
          _this.$message({
            message: '请填写所有参数',
            type: 'warning'
          });
        }else{
          _this.loading = true;
          _this.$post("/product/add", _this.formData1).then((res) => {
             if(res.error == '0000'){
               _this.$message({
                message: '添加产品成功',
                type: 'success'
              });
               _this.getlist()
             }else{
               _this.$message({
                message: '当前网络不稳定，请稍后再试',
                error: 'error'
              });
             }
            
          });
        }
      })
    },
    addproduct(){
      this.imgarr[1].push({
        detail_h5_ch:'',
        detail_pc_ch:'',
        small_ch:'',
        sort:''
      })
      this.imgarr[2].push({
        detail_h5_en:'',
        detail_pc_en:'',
        small_en:'',
        sort:''
      })
      this.imgarr[3].push({
        detail_h5_jp:'',
        detail_pc_jp:'',
        small_jp:'',
        sort:''
      })
      setTimeout(()=>{
        var ele = document.getElementById('app');
        ele.scrollTop = ele.scrollHeight;
      },100)
      
    },
    deletelist(item){
      this.loading = true;
      this.$get('/product/delete?id='+item.id).then((res)=>{
        this.loading = false
        if(res.error == '0000'){
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.getlist()
        }else{
          this.$message({
            message: '当前网络不稳定，请稍后再试',
            error: 'error'
          });
        }
      })
    },
    blurinput(item){
      if(!item.id)return
      this.loading = true;
      this.$post('/product/update',{
        id:item.id,
        sort:item.sort
      }).then((res)=>{
        this.loading = false
        if(res.error == '0000'){
          this.$message({
            message: '更新成功',
            type: 'success'
          });
          this.getlist()
        }else{
          this.$message({
            message: '当前网络不稳定，请稍后再试',
            error: 'error'
          });
        }
      })
    }
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.el-loading-mask{
  position: fixed !important;
}
html,body{
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #BF3A20, #EC580A, #FFFFC4);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  width: 100%;
  height: 100%;
  overflow: auto;
  font-size: 14px;
}
.shadebox{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.5);
  z-index: 99999;
}
input[type='file']{
  width: 100%;
  height: 100px;
  overflow: hidden;
  opacity: 0;
  position: absolute;
  left:0;
  top: 0;
  z-index: 11;

}
.filebox{
  width: 30%;
  height: 100px;
  position: relative;
}
.filebox .tip{
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  line-height: 1;
  border: 1px solid #ffffff;
}
.title{
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 30px;
  color: #ffffff;
  font-weight: 900;
  position: relative;
}
.Add{
  width: 60px;
  height: 30px;
  background: #409eff;
  text-align: center;
  line-height: 30px;
  position: absolute;
  right: 1%;
  top: 30px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
}
.navlist{
  height: 50px !important;
  line-height: 50px !important;
  border: 1px solid white;
}
.navlist >div{
  height: 50px !important;
  line-height: 50px !important;
  border-right: 1px solid white;
  box-sizing: border-box;
}
.conlist{
  width: 98%;
  margin: 0 1%;
  display: flex;
  justify-content: space-between;
  
}
.conlist >div{
  height: 220px;
  line-height: 220px;
}
.listtype{
  display: flex;
  
}
.number{
  width: 5%;
  text-align: center;
}
.number>div{
  border: 1px solid #ffffff;
  border-top: none;
}
.content{
  width: 27%;
  position: relative;
  text-align: center;
  
}
.imglist{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  border-right: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
}
.imglist img{
  margin: 5px 0px;
}
.content .small{
  width: 20%;
 
}
.content .detail_h5{
  width: 20%;
  
}
.content .detail_pc{
  width: 40%;
}
.sort{
  width: 7%;
  text-align: center;
}
.sort>div{
  border: 1px solid #ffffff;
  border-top: none;
  width: 100%;
  height: 100%;
}
.sort input{
  width: 50px;
  line-height: 30px;
  text-align: center;
}
.edit{
  width: 7%;
  text-align: center;
}
.edit>div{
  border: 1px solid #ffffff;
  border-top: none;
  border-left: none;
}
.edit span{
  display: inline-block;
  width: 80%;
  height:30px;
  margin: 0 auto;
  background: #BF3A20;
  line-height: 30px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
