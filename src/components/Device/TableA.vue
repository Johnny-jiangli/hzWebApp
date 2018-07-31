<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="deviceName"
        label="名称"
      >
      </el-table-column>
      <el-table-column
        prop="manufacturer"
        label="产商"
      >
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名"
      >
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
      >
      </el-table-column>
      <el-table-column
        prop="ip"
        label="IP"
      >
      </el-table-column>
      <el-table-column
        prop="port"
        label="端口"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="安装地点"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300px">
        <template slot-scope="scope">
          <el-button @click="handleClickDetail(scope.row)" size="small"><img src="../../assets/img/icon_more.png"
                                                                             style="padding: 0 2px;" alt="">详情
          </el-button>
          <el-button @click="handleClickEdit(scope.row)" size="small"><img src="../../assets/img/icon_edit.png" alt="">编辑
          </el-button>
          <el-button @click="handleClickDelete(scope.row)" type="danger" size="small"><img
            src="../../assets/img/icon_delete.png" alt="">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    详情模态框
    <el-dialog title="设备详情:" :visible.sync="dialogDetail">
      <el-form :model="detailData">
        <el-col :span="12">
          <el-form-item label="名称:" :label-width="formLabelWidth">
            <span>{{detailData.deviceName}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="产商:" :label-width="formLabelWidth">
            <span>{{detailData.manufacturer}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户名:" :label-width="formLabelWidth">
            <span>{{detailData.userName}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="密码:" :label-width="formLabelWidth">
            <span>{{detailData.password}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="IP:" :label-width="formLabelWidth">
            <span>{{detailData.ip}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="端口号:" :label-width="formLabelWidth">
            <span>{{detailData.port}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="安装地点:" :label-width="formLabelWidth">
            <span>{{detailData.address}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="流分发服务器:" :label-width="formLabelWidth">
            <span>{{detailData.channelNums}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="设备型号:" :label-width="formLabelWidth">
            <span>{{detailData.deviceModel}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="通道个数:" :label-width="formLabelWidth">
            <span>{{}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注:" :label-width="formLabelWidth">
            <span>{{detailData.remark}}</span>
          </el-form-item>
        </el-col>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <el-button @click="dialogDetail = false">取 消</el-button>
        <el-button type="primary" @click="dialogDetail = false">确 定</el-button>
      </div>
    </el-dialog>

    编辑模态框
    <el-dialog title="设备编辑" :visible.sync="dialogEdit">
      <el-form :model="detailsData" :label-width="30">
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form-item label="名称:" :label-width="formLabelWidth">
              <el-input v-model="detailsData.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="产商:" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="用户名:" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="密码:" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="IP:" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="端口号:" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="安装地点:" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="流分发服务器：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="设备型号：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="通道个数：" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="20">
            <!--<el-form-item label="备注：" :label-width="formLabelWidth">-->
              <!--<el-select v-model="form.region" placeholder="请选择活动区域">-->
                <!--<el-input v-model="form.name" about-complete="off"></el-input>-->
              <!--</el-select>-->
            <!--</el-form-item>-->
            <el-form-item label="活动区域:" :label-width="formLabelWidth" >
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    删除模态框
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "table-a",
    data() {
      return {
        detailData: {},
        tableData: [{
          "remark": null,
          "createTime": 1532663083000,
          "createId": 1,
          "updateTime": null,
          "updateId": null,
          "deviceId": "d53f4f00dcb440fc819e51d6112ad606",
          "mediaId": null,
          "deviceName": 'cecece',
          "deviceModel": null,
          "manufacturer":'大华',
          "userName":'johnny',
          "password":'123456',
          "ip": '123456',
          "port": '8080',
          "setUpTime": null,
          "channels": null,
          "address": 'chengdu',
          "status": null,
          "channelNums": null
        },
          {
            "remark": null,
            "createTime": 1532507655000,
            "createId": null,
            "updateTime": null,
            "updateId": null,
            "deviceId": "6f074dc205e84f97bbb0405b6a14124c",
            "mediaId": null,
            "deviceName": null,
            "deviceModel": null,
            "manufacturer": null,
            "userName": null,
            "password": null,
            "ip": null,
            "port": null,
            "setUpTime": null,
            "channels": null,
            "address": null,
            "status": null,
            "channelNums": null
          },
          {
            "remark": "1",
            "createTime": 1532489324000,
            "createId": null,
            "updateTime": null,
            "updateId": null,
            "deviceId": "1",
            "mediaId": "4",
            "deviceName": "1",
            "deviceModel": "1",
            "manufacturer": "1",
            "userName": "1",
            "password": "1",
            "ip": "1",
            "port": "1",
            "setUpTime": 1531929600000,
            "channels": 1,
            "address": "1",
            "status": "1",
            "channelNums": null
          }],
        dialogDetail: false,
        dialogEdit: false,
        centerDialogVisible: false,
        bb: false,
        // form: {
        //   name: '',
        //   region: '',
        //   date1: '',
        //   date2: '',
        //   delivery: false,
        //   type: [],
        //   resource: '',
        //   desc: ''
        // },
        formLabelWidth: '110px'
      }
    },
    components: {},

    methods: {
      // 处理设备详情页
      handleClickDetail(data) {
        this.dialogDetail = true;

        console.log(data);
        // this.detailData ;

        console.log(data.deviceId)
        // this.$axios.get('/device/findById',{
        //   params:{
        //     deviceId:data.deviceId
        //   }
        // }).then(function (res) {
        //
        // }).catch(function (err) {
        //
        // })

      },
      // 处理编辑页，在编辑保存后发出一个请求给服务器，根据返回状态更新本地data数据
      handleClickEdit(index, row) {
        // console.log(index, row);
        // console.log("hello")
        // console.log(index)
        this.dialogEdit = true;
        console.log(row)
      },
      // 处理删除页，给定设备id给服务器确认删除，返回状态后，若是ok则在本地维护的数据内删除该条数据
      handleClickDelete(index, row) {
        this.centerDialogVisible = true;

      },
    },
    mounted(){
    }
  }
</script>

<style scoped>
  .inner {
    background: url("../../assets/img/icon_more.png") 0 50% no-repeat;

  }

</style>
