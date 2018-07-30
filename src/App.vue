<template>
  <div id="app">
    <!--<el-container class="home">-->
      <!--<el-header height="74px">Header</el-header>-->
      <!--程序视图入口-->
    <el-container>
      <el-header height="74px">
        <site-nav></site-nav>
      </el-header>
      <router-view></router-view>
    </el-container>

    <!--</el-container>-->
  </div>
</template>

<script>
  import SiteNav from './components/home/SiteNav'
export default {
  name: 'App',

  components:{
    SiteNav
  }
  }
</script>

<style>
html,body,#app {
  margin:0 0;
  padding: 0 0;
  width: 100%;
  height: 100%;
}
.el-container{
  width: 100%;
  height: 100%;
  margin: 0 0;
  padding: 0 0 ;
}
.el-header{
  background: url("./assets/img/logo.png")10px 10px no-repeat,
  url('./assets/img/logo_bg_bar.png') no-repeat,
  url("./assets/img/top_bar.png") round #465484;
}
</style>
