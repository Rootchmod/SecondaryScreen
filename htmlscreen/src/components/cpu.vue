<template lang="pug">
  div
    img.cpuicon(src="https://img.alicdn.com/imgextra/i1/3604278968/O1CN01mB6Vjq2G7OSQWxGF1_!!3604278968.png")
    .cpuInfo
      .info1 {{ cpuInfo1 }}
      .info11 {{ cpuInfo2 }}
      .info2 {{ temperature }} ℃
      .info3 {{ type }}
    .core
      label.pasen 10% &nbsp;
      .progressBar
        .cpu1.skills
      br
      br
      label.pasen 20% &nbsp;
      .progressBar
        .cpu2.skills
      br
      br
      label.pasen 30% &nbsp;
      .progressBar
        .cpu3.skills
      br
      br
      label.pasen 40% &nbsp;
      .progressBar
        .cpu4.skills
    .cpuChart
      #cpuChart
      // el-progress(percentage="40")
</template>

<script>
  let _this;
  export default {
    name: 'cpu',
    components: {
    },
    props:{
      cpuInfo1:String,
      cpuInfo2:String,
      temperature:String,
      type:String
    },
    data: ()=>{
        return {
            cpuChart: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('cpuChart'));
        // 绘制图表
        myChart.setOption({
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          color:"#36ae91",
          backgroundColor:"rgba(34,64,63,.6)",
          grid:{top:"5%",left:"3%",right:"3%",bottom:"5%"},
          series: [{
            data:_this.cpuChart,
            type: 'line',
            areaStyle: {}
          }]
        });

        setInterval(()=>{
            _this.cpuChart.shift();
            _this.cpuChart.push(Math.round(Math.random()*100));
            myChart.setOption({
                series:[
                    {
                        data:_this.cpuChart
                    }
                ]
            })
        },1000)

      }
    },
    mounted() {
        _this = this;
        this.drawLine();
    }
  }
</script>

<style lang="less" scoped>
  /* import './../theme/theme.less' */
  .cpuicon,.core{
    height: 240px;
    display: inline-block;
  }
  .cpuInfo{
    vertical-align: top;
    padding: 60px 0;
    left: -180px;
    width: 16%;
    font-size: 5px;
    display: inline-block;
    position: relative;
    color: rgba(255,255,255,.8);
  }
  .info2{
    font-size: 40px;
    margin: 10px 12px;
  }
  .info3{
    font-size: 15px;
    margin: 5px 30px;
  }

  .core{
    position: relative;
    left: -100px;
    width: 40%;
  }

  /*.progressBar{*/
  /*  width: 60%;*/
  /*  height: 15px;*/
  /*  display: inline-block;*/
  /*  background-color: rgba(255,255,255,.6);*/
  /*}*/

  /*.skills {*/
  /*  height: 15px;*/
  /*  background-color: rgba(255,255,255,.8);*/
  /*}*/

  .cpu1{
    width: 10%;
  }
  .cpu2{
    width: 20%;
  }
  .cpu3{
    width: 30%;
  }
  .cpu4{
    width: 40%;
  }

  .pasen{
    font-size: 20px;
  }
  #cpuChart{
    width: 20%;
    display: inline-block;
    height: 250px;
    position: absolute;
    top: 4%;
    right: 3%;
  }


</style>
