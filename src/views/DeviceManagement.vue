<template>
<div id="table-component-menu">
  <div class="button-warpper">
    <button
      v-for="(menuName,index) in menuList"
      v-bind:key="menuName.pathname"
      v-bind:class="['menu-button',{active:actionMenu === menuName.pathname}]"
      v-on:click="actionMenu = menuName.pathname"
    >
      <img :src="ImgList[index]" alt="" style="width: auto;position: relative;top:4px">
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
  import ImgA from '../assets/img/icon_monitor1.png'
  import ImgB from '../assets/img/icon_ph_1.png'
  import ImgC from '../assets/img/icon_message1.png'
  import ImgD from '../assets/img/icon_dd.png'
    export default {
        name: "device-management",
      data(){
          return {
            //表单ABCD分别代表设备管理、设备布防、推送设置、底库管理
            actionMenu:'TableA',
            menuList:[
              {name:'设备管理',pathname:'TableA'},
              {name:'设备布防',pathname:'TableB'},
              {name:'推送设置',pathname:'TableC'},
              {name:'底库管理',pathname:'TableD'}
            ],
            ImgList:[ImgA,ImgB,ImgC,ImgD]
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
        },
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
    /*display: flex;*/
    justify-content: end;
    height: 8%;
    margin: 0 3%;
    background-color: #f5f6fa;
    border-bottom:#cccccc solid 1px ;
  }

  .menu-button {
    width: 134px;
    height: 48px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: #c6cbd1;
    margin-right: 10px;
    margin-top: 10px;
    font-size: 16px;
    color: #fff;
    border: none;
  }
  .menu-button:hover{
    background-color: #6173b0;
  }
  .menu-button.active{
    background-color: #465484;
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
