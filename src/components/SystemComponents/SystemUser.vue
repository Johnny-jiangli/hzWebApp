<template>
  <div>
    <el-table :data="tableData" style="width: 100%"
             >
      <el-table-column fixed prop="deviceName" label="序号">

      </el-table-column>
      <el-table-column prop="manufacturer" label="账号">

      </el-table-column>
      <el-table-column prop="userName" label="姓名">

      </el-table-column>
      <el-table-column prop="password" label="性别">

      </el-table-column>
      <el-table-column prop="ip" label="电话">

      </el-table-column>
      <el-table-column prop="port" label="角色">

      </el-table-column>
      <el-table-column prop="address" label="备注">

      </el-table-column>
      <el-table-column fixed="right" label="操作" width="300px">
        <template slot-scope="scope">
          <el-button @click="handleClickDetail(scope.row)" size="small">
            <i class="el-icon-document"></i>
            详情
          </el-button>
          <el-button @click="handleClickEdit(scope.row)" size="small">
            <i class="el-icon-edit-outline"></i>编辑
          </el-button>
          <el-button @click="handleClickDelete(scope.row)" size="small">
            <i class="el-icon-delete"></i>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--详情模态框-->
    <!--<el-dialog title="设备详情:" :visible.sync="dialogDetail">-->
      <!--<el-form :model="detailsData">-->
        <!--<el-col :span="12">-->
          <!--<el-form-item label="名称:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<el-form-item label="产商:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<el-form-item label="用户名:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<el-form-item label="密码:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<el-form-item label="IP:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<el-form-item label="端口号:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<el-form-item label="安装地点:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<el-form-item label="流分发服务器:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<el-form-item label="设备型号:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<el-form-item label="通道个数:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="24">-->
          <!--<el-form-item label="备注:" :label-width="formLabelWidth">-->
            <!--<span>{{detailsData.name}}</span>-->
          <!--</el-form-item>-->
        <!--</el-col>-->
      <!--</el-form>-->
      <!--<div slot="footer" class="dialog-footer" style="text-align: center">-->
        <!--<el-button @click="dialogDetail = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="dialogDetail = false">确 定</el-button>-->
      <!--</div>-->
    <!--</el-dialog>-->
    <!--编辑模态框-->
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
    <!--删除模态框-->
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
    name: "system-user",
    data() {
      return {
        loading:true,
        detailsData: {},
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        dialogDetail: false,
        dialogEdit: false,
        centerDialogVisible: false,
        bb: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '110px'
      }
    },
    components: {},

    methods: {
      // 处理设备详情页
      handleClickDetail(index, row) {

        this.dialogDetail = true;
        console.log(index, row);
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


    }
  }
</script>

<style scoped>
  /*button{*/
  /*font-size: 16px;*/
  /*}*/
  /*button:hover{*/
  /*color: #f5f6fa;*/
  /*background-color: #6173b0;*/
  /*}*/
  .inner {
    background: url("../../assets/img/icon_more.png") 0 50% no-repeat;

  }

</style>
