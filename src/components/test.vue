<template>
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="服务主机"
      prop="ip"
    >
      <!--<template slot-scope="scope">-->
      <!--<i class="el-icon-time"></i>-->
      <!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
      <!--</template>-->
    </el-table-column>
    <el-table-column
      label="操作系统"

    >
      <template slot-scope="scope">
        <!--<el-popover trigger="hover" placement="top">-->
        <!--<p>系统: {{ scope.row.name }}</p>-->
        <!--<p>IP: {{ scope.row.address }}</p>-->
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.operatingSystem }}</el-tag>
        </div>
        <!--</el-popover>-->
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
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true
      };
    },
    mounted(){

    }
  };
</script>
