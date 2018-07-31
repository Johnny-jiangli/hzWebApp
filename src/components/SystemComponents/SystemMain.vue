<template>
  <el-main>
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="服务主机"
        prop="ip"
      >
      </el-table-column>
      <el-table-column
        label="操作系统"
      >
        <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.operatingSystem }}</el-tag>
            </div>
        </template>
      </el-table-column>
      <el-table-column
        label="服务"
      >
        <template slot-scope="scope">
          <el-tag
            v-for="(tag,index) in scope.row.serviceHostList"
            :key="tag.hostName"
            v-if="tag.hostName ? true:false"
            closable
            type="info"
            size="mini"
            @close="closetag(tag,index,scope.row)"
            style="margin-right: 2px"
          >
            {{tag.hostName}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleAdd(scope.row)" ><i class="el-icon-plus"></i>添加</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="添加服务"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <div class="ckeckbox">
        <el-checkbox-group
          v-model="checkedService"
          :min="0"
          :max="4">
          <el-checkbox v-for="serviceHostList in cities" :label="serviceHostList.moduleId" :key="serviceHostList.moduleId">{{serviceHostList.moduleName}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="noSubmit()">取 消</el-button>
    <el-button type="primary" @click="submitService()">确 定</el-button>
  </span>
    </el-dialog>
  </el-main>
</template>

<script>
  export default {
    name: "system-main",
    data() {
      return {
        // aa:{name:'hah'},
        // tableData:[],
        // centerDialogVisible:false,
        // checkedService: [],
        // cities:[],
        // loading:false,
        // agentId:''
      }
    },
    methods: {

      handleAdd(data) {
        this.agentId = data.agentId
        let aId = this.agentId
        console.log(aId)
        let _this = this;
        this.$axios.get('/serviceAgent/findModuleList?agentId='+aId
        ).then(function (res) {
          _this.cities = res.data.data;
           console.log(_this.cities);

        }).catch(function (err) {
          // console.log(err)
        })
        this.centerDialogVisible = true;
      },
      //  提交服务
      submitService(){
        this.centerDialogVisible =false
        console.log(this.checkedService)
        var _this = this;
        this.$axios.post('/serviceAgent/saveHost',{
            moduleIds:this.checkedService,
            agentId:this.agentId
        }).then(function (res) {
          // console.log(res.status)
          _this.$axios.post('/serviceAgent/findList',{
            pageNum:1,
            pageSize:10
          }).then(function (res) {
            // console.log(res)
            _this.tableData = res.data.data;
            _this.checkedService =[]
          }).catch(function (err) {

          })
        })
      },
      //取消添加
      noSubmit(){
        this.centerDialogVisible =false;
        this.checkedService = []
      },
      closetag(tag,index,data){
        console.log('hello')
        console.log(tag)
        console.log(index)
        console.log(data)
        console.log(data.serviceHostList[index].hostId)

        let hostId = data.serviceHostList[index].hostId
           console.log(hostId)
        this.$axios.get('/serviceAgent/deleteHost', {
          params: {
            hostId: hostId
          }
        })
          .then(function (response) {
            // console.log(response);
            if(response.status === 200) {
              data.serviceHostList.splice(index,1)
            }else {
              console.log('响应的状态码bushi200')
          }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },

    mounted(){
        const _this= this;
      this.$axios.post('/serviceAgent/findList',{
        pageNum:1,
        pageSize:10
      }).then(function (res) {
          console.log(res)
        _this.tableData = res.data.data;
      }).catch(function (err) {

      })
    }
  }
</script>

<style scoped>

</style>
