<template>
    <div class="warpper">
      <el-row style="height: 100%">
        <el-col :span="4" style="height: 100%">
          <div class="inner1">
            1111
          </div>
        </el-col>
        <el-col :span="20" style="height: 100%">
          <div class="inner2">
            22222
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "warning-and-monitor-footer"
    }
</script>

<style scoped>
  .warpper{
    margin-top: -17px;
    width: auto;
    height: 100%;
  }
  .inner1{
    height: 95%;
    background-color: #303C65 ;
    -webkit-border-radius: 3px 0px 0px 3px;
    -moz-border-radius: 3px 0px 0px 3px;
    border-radius: 3px 0px 0px 3px;

  }
  .inner2{
    height: 95%;
    background-color: #6173b0;
    -webkit-border-radius: 0px 3px 0px 3px;
    -moz-border-radius: 0px 3px 0px 3px;
    border-radius: 0px 3px 0px 3px;
  }
</style>
