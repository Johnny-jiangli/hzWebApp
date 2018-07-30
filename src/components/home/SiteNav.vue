<template>

  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="transparent"
    text-color="#FFFFFF"
    active-text-color="#1feeed"
  >
    <el-submenu index="1">
      <template slot="title"><span style="font-size: 18px">实时监控</span></template>
      <el-menu-item index="1-1">
        <router-link to="/">实时监控</router-link>
      </el-menu-item>
      <el-menu-item index="1-2">
        <router-link to="/">实时监控</router-link>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
    <router-link to="warningmessage">布防监控</router-link>
  </el-menu-item>

    <el-menu-item index="3">
      <router-link to="devicemanagement">报警信息</router-link>
      </el-menu-item>
    <el-menu-item index="4">
      <router-link to="systemmanagement">系统管理</router-link>
    </el-menu-item>

  </el-menu>
</template>

<script>
    export default {
        name: "site-nav",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>

  .el-menu-demo{
    display: flex;
    border: none;
    justify-content: center;
  }
  ul{
    margin-top: 10px;
  }
  ul li a{
    font-size: 18px;
    text-decoration: none;

  }

</style>
