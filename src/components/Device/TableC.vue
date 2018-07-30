<template>
  <div>


    <el-table
      :data="tableData"
      style="width: 100%"

    >
      <el-table-column
        fixed
        prop="date"
        label="日期"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
      >
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300px">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" size="mini">详情</el-button>
          <el-button @click="handleClick(scope.row)"  size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
  // import myComponent from './mycomponent'
  // import myComponent2 from './mycomponent2'
  export default {
    name: "table-c",
    data() {
      return {
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
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px'
      }
    },
    components: {
      // 'my-component' : myComponent,
      // 'my-component2' : myComponent2
    },

    methods : {

      getMore(row) {
        this.getA = true
        this.row = row
      },
      getMore2(row) {
        this.getB = true
        this.row = row
      },
      handleEdit(index, row) {
        // console.log(index, row);
        // console.log("hello")
        // console.log(index)
        console.log(row)
      },
      handleDelete(index, row) {
        console.log(index, row);
      },


    }
  }
</script>

<style scoped>
  cell-style{
    height: 20px;
    line-height: 20px;
    background-color: #465484;
  }
</style>
