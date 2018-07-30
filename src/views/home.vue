<template>
  <el-container>
    <el-aside width="18%" style="background-color: #465484">
      <warning-and-monitor-left-aside>
      </warning-and-monitor-left-aside>
    </el-aside>
    <el-container>
      <el-main style="height: 81%; background-color: #465484">
        <el-row :gutter="16" style="height: 100%;">
          <el-col :span="18" style="height: 100%;">
            <warning-and-monitor-sys>

            </warning-and-monitor-sys>
          </el-col>
          <el-col :span="6" style="height: 100%;">
            <div class="rightAside">
              <div>
                12345567
              </div>
              <div>
                <warning-and-monitor-aside>

                </warning-and-monitor-aside>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer height="18%" style="background-color: #465484">
        <warning-and-monitor-footer>

        </warning-and-monitor-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>


<script>
  import WarningAndMonitorLeftAside from '../components/home/WarningAndMonitorLeftAside'
  import WarningAndMonitorAside from '../components/home/WarningAndMonitorAside'
  import WarningAndMonitorFooter from '../components/home/WarningAndMonitorFooter'
  import WarningAndMonitorSys from '../components/home/WarningAndMonitorSys'
    export default {
        name: "home",
      components:{
        WarningAndMonitorSys,
        WarningAndMonitorFooter,
        WarningAndMonitorAside,
        WarningAndMonitorLeftAside
      },
      data(){
          return{
            show:false,
            show3:true,
            isdisable:false
          }
      },
      methods: {
        handleClick() {
          alert('button click');
        },
        greet(event) {
          // `this` 在方法里指向当前 Vue 实例
          alert('Hello ' + this.name + '!')
          // `event` 是原生 DOM 事件
          if (event) {
            alert(event.target.tagName)
          }
        }
      }
    }
</script>

<style scoped>
.wrapper{
  background-color: #465484;
}
.homeMain{
  height: 100%;
}
.video{
    height: 100%;
    margin-right:10px;
    background-color: #6173b0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}
  .call{
    width: 20%;
    height: 100%;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
.rightAside{
  height: 99%;
  margin-top: -5px;
}
.rightAside>div:first-child{
  height: 10%;
  background-color: #6173b0;
  -webkit-border-radius: 3px 3px 0 0 ;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
}
.rightAside>div:last-child{
  height: 90%;
  background-color: #6173b0;
  -webkit-border-radius: 0 0 3px 3px;
  -moz-border-radius: 0 0 3px 3px;
  border-radius: 0 0 3px 3px;
}

</style>
