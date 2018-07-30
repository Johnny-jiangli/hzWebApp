<template>
<div id="table-component-menu">
  <div class="button-warpper">
    <button
      v-for="menuName in menuList"
      v-bind:key="menuName.pathname"
      v-bind:class="['menu-button',{active:actionMenu == menuName.pathname}]"
      v-on:click="actionMenu = menuName.pathname"
    >
      <p>{{ menuName.url}}</p>
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
  import TableA from '../components/Device/TableA'
  import TableB from '../components/Device/TableB'
  import TableC from '../components/Device/TableC'
  import TableD from '../components/Device/TableD'
    export default {
        name: "device-management",
      data(){
          return {
            actionMenu:'TableA',
            menuList:[
              {name:'设备管理',pathname:'TableA',url:'../assets/img/icon_monitor1.png'},
              {name:'设备布防',pathname:'TableB',url:'../assets/img/icon_2_1.png'},
              {name:'推送设置',pathname:'TableC'},
              {name:'底库管理',pathname:'TableD'}
            ]
          }
      },
      components:{
          // DeviceTabel,
        TableA,
        TableB,
        TableC,
        TableD
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
    /*-webkit-border-radius: 3px;*/
    /*-moz-border-radius: 3px;*/
    /*border-radius: 3px;*/
    /*box-shadow: #cccccc 0px 0px 2px 2px;*/

  }

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

  }
  .menu-button:hover {
    background: #e0e0e0;
  }
  .menu-button.active {
    background: #465484;
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
