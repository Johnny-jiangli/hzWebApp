<template>
  <div id="table-component-menu">
    <div class="button-warpper">
      <button
        v-for="menuName in menuList"
        v-bind:key="menuName.pathname"
        v-bind:class="['menu-button',{active:actionMenu === menuName.pathname}]"
        v-on:click="actionMenu = menuName.pathname"
        class="active"
      >
     {{menuName.name}}
      </button>
    </div>
    <comment
      v-bind:is="menuListComputed"
      class="tableMainStyle"
    ></comment>
  </div>
</template>

<script>
  import SystemMain from '../components/SystemComponents/SystemMain'
  import SystemUser from '../components/SystemComponents/SystemUser'
  import PermissionSetting from '../components/SystemComponents/PermissionSetting'
  export default {
    name: "System-management",
    data(){
      return {
        actionMenu:'SystemMain',
        menuList:[
          {name:'功能部署',pathname:'SystemMain'},
          {name:'用户管理',pathname:'SystemUser'},
          {name:'权限设置',pathname:'PermissionSetting'},
        ]
      }
    },
    components:{
      SystemMain,
      SystemUser,
      PermissionSetting
    },
    computed:{
      menuListComputed(){
        return this.actionMenu;
      }
    }
  }
</script>

<style scoped>
  #table-component-menu{
    height: 100%;
    width: 100%;
    background-color: #F5F6FA;
  }
  .button-warpper{
    display: flex;
    justify-content: end;
    height: 8%;
    margin: 0 3%;
    background-color: #f5f6fa;
    border-bottom:#cccccc solid 1px ;
  }
  /*.button-warpper>button:first-child{*/
    /*background: url("../assets/img/icon_function1.png")10% 50% no-repeat #c6cbd1;*/
  /*}*/
  /*.button-warpper>button:first-child:hover,*/
  /*.button-warpper>button:first-child:active{*/
    /*background: url("../assets/img/icon_function1.png")10% 50% no-repeat #465484;*/
  /*}*/
  /*.button-warpper>button:last-child{*/
    /*background: url("../assets/img/icon_set1.png")10% 50% no-repeat #c6cbd1;*/
  /*}*/
  /*.button-warpper>button:last-child:hover,*/
  /*.button-warpper>button:last-child:active{*/
    /*background: url("../assets/img/icon_set1.png")10% 50% no-repeat #465484;*/
  /*}*/
  /*.button-warpper>button:nth-child(2){*/
    /*background: url("../assets/img/icon_user1.png")10% 50% no-repeat #c6cbd1;*/
  /*}*/
  /*.button-warpper>button:nth-child(2):hover,*/
  /*.button-warpper>button:nth-child(2):active{*/
    /*background: url("../assets/img/icon_user1.png")10% 50% no-repeat #465484;*/
  /*}*/
  .menu-button {
    width: 134px;
    height: 48px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    cursor: pointer;
    background: #c6cbd1;
    margin-right: 10px;
    margin-top: 11px;
    font-size: 16px;
    color: #fff;
    border: none;
  }
  .tableMainStyle {
    height: 74%;
    margin: 1% 3%;
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

</style>
