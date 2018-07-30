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
            @close="closetag(tag,index,scope.row.serviceHostList)"
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
            @click="handleAdd()" class="el-icon-circle-plus-outline">添加</el-button>
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
          v-model="checkedCities1"
          :min="0"
          :max="4">
          <el-checkbox v-for="city in cities" :label="city.moduleId" :key="city.moduleId" class="checkBoxStyle">{{city.moduleName}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitModule">确 定</el-button>
  </span>
    </el-dialog>
  </el-main>
</template>

<script>
  const cityOptions = ['流媒体','人脸识别','危险物识别'];
  export default {
    name: "system-main",
    data() {
      return {
        aa:{name:'hah'},
        tableData:[
          {
            "remark": null,
            "createTime": null,
            "createId": null,
            "updateTime": null,
            "updateId": null,
            "agentId": "38d6573e71f84288b1deddc8599dd4d4",
            "ip": "192.168.3.118",
            "operatingSystem": "Linux",
            "systemInfo": "{\"memory_info\":\"6.0%\",\"cpu_info\":\"0.9%\"}",
            "serviceHostList": [
              {
                "remark": null,
                "createTime": null,
                "createId": null,
                "updateTime": null,
                "updateId": null,
                "hostId": "0954bbc967284d08a67fe498a52e5291",
                "agentId": "38d6573e71f84288b1deddc8599dd4d4",
                "code": null,
                "hostName": "人脸算法",
                "serviceType": "2",
                "port": 29931,
                "status": null,
                "agent": null
              },
              {
                "remark": null,
                "createTime": null,
                "createId": null,
                "updateTime": null,
                "updateId": null,
                "hostId": "1",
                "agentId": "38d6573e71f84288b1deddc8599dd4d4",
                "code": null,
                "hostName": "报警主机",
                "serviceType": "3",
                "port": 8001,
                "status": null,
                "agent": null
              },
              {
                "remark": null,
                "createTime": null,
                "createId": null,
                "updateTime": null,
                "updateId": null,
                "hostId": "4",
                "agentId": "38d6573e71f84288b1deddc8599dd4d4",
                "code": null,
                "hostName": "流媒体",
                "serviceType": "1",
                "port": 0,
                "status": null,
                "agent": null
              }
            ]
          },
          {
            "remark": null,
            "createTime": null,
            "createId": null,
            "updateTime": null,
            "updateId": null,
            "agentId": "16ae9c5dcc1045029caeb601615f87d5",
            "ip": "192.168.2.106",
            "operatingSystem": "Linux",
            "systemInfo": "{\"memory_info\":\"3.4%\",\"cpu_info\":\"0.4%\"}",
            "serviceHostList": [
              {
                "remark": null,
                "createTime": null,
                "createId": null,
                "updateTime": null,
                "updateId": null,
                "hostId": null,
                "agentId": "16ae9c5dcc1045029caeb601615f87d5",
                "code": null,
                "hostName": '报警主机',
                "serviceType": null,
                "port": null,
                "status": null,
                "agent": null
              }
            ]
          },
          {
            "remark": null,
            "createTime": null,
            "createId": null,
            "updateTime": null,
            "updateId": null,
            "agentId": "3dc43278246b4da787eb9e6a7252e949",
            "ip": "192.168.2.172",
            "operatingSystem": "windows",
            "systemInfo": "{\"memory_info\":\"79.6%\",\"cpu_info\":\"5.8%\"}",
            "serviceHostList": [
              {
                "remark": null,
                "createTime": null,
                "createId": null,
                "updateTime": null,
                "updateId": null,
                "hostId": null,
                "agentId": "3dc43278246b4da787eb9e6a7252e949",
                "code": null,
                "hostName": null,
                "serviceType": null,
                "port": null,
                "status": null,
                "agent": null
              }
            ]
          },
        ],
        centerDialogVisible:false,
        checkedCities1: [],
        cities:[],
        loading:false
      }
    },
    methods: {
      handleAdd() {
        var _this =this
        this.$axios.post('/moduleInfo/findList',{
          pageNum:1,
          pageSize:10
        }).then(function (res) {
          // console.log(res.data)
          _this.cities = res.data.data;
          console.log(_this.cities)
        }).catch(function (err) {
          console.log(err)
        })
        this.centerDialogVisible = true;
      },

      submitModule(){
        this.centerDialogVisible = false
        console.log(this.checkedCities1)
      },
      closetag(tag,index,data){
        console.log('hello')
        console.log(tag)
        console.log(index)
        console.log(data)
        console.log()
        axios.get('/serviceAgent/deleteHost ', {
          params: {
            ID: tag.hostId
          }
        })
          .then(function (response) {
            console.log(response);
            if(response.code == 10200) {
              data.splice(index,1)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>
  .el-main{
    background-color:#F5F6FA ;
  }

</style>
