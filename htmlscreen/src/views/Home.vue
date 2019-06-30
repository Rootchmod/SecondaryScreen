<template lang="pug">
  div
    .model.timeModel
      .timeText {{ times }}
      br
      .content 今天的你需要腾出一些时间来处理个人的事情，只能把前行的步伐放慢一些。工作/学习上，你会遇到不少的杂事，需要把周围的绊脚石搬开才能好好投入自己的事情中，压力难免会有点大。感情方面，对方的不理解，让有伴人士感到吃力，需要时间的磨合
    .model.cpuModel
      cpuModel(cpuInfo1="Inter(R) Core(TM)", cpuInfo2="i7-8700 @5200GHz", temperature="50", type="i7 8700K")
    .model.ramModel
      ramModel
    .model.gpuModel
      gpuModel
    .model.networkModel
      networkModel
    .model.romModel
      romModel
    .model.orther
      ortherModel
</template>
<script>
  let _this;
  import cpuModel from "@/components/cpu";
  import ramModel from "@/components/ram";
  import gpuModel from "@/components/gpu";
  import networkModel from "@/components/network";
  import romModel from "@/components/rom";
  import ortherModel from "@/components/orther";
export default {
  name: 'home',
  components: {
      cpuModel,ramModel,gpuModel,networkModel,romModel,ortherModel
  },
  data: ()=>{
    return {
      times: "Welcome"
    }
  },
  mounted() {
      _this = this;
      setInterval(()=>{
        _this.times = dateFtt('hh:mm:ss',new Date());
      },1000);
  }
}

function dateFtt(fmt,date)
{ //author: meizz
    var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}
</script>

<style lang="less" scoped>
  .model{
    /*background-image: url();*/
    background-color: rgba(38,52,56,.6);
    color: rgba(255,255,255,.6);
    padding: 15px;
    text-align: left;
    display: inline-block;
    margin: 20px 5px;
  }

  .model:hover{
    box-shadow:rgb(11, 234, 235) 0px 0px 18px inset;
    transition: .8s;
  }

  .timeModel{
    width: 42%;
  }
  .cpuModel{
    width: 53%;
    height: 245px;
  }
  .timeText{
    font-family: tr2n,serif;
    font-size: 160px;
  }
  .ramModel{
    width: 45%;
  }
  .gpuModel{
    width: 37%;
  }
  .networkModel{
    width: 11%;
    height: 245px;
  }
  .romModel{
    width: 50%;
  }
</style>
