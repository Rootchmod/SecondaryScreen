<template lang="pug">
  div
    img(src="https://img.alicdn.com/imgextra/i4/3604278968/O1CN01j3vFo62G7OSPLOXj3_!!3604278968.png")
    .gpuInfo
      br
      .gpuName GEFORCE GTX 2080TI XP
      br
      .pasent 50℃
      span.capacity 1404 MB
    .progressBar
      .gpuProgress.skills
    span.gpuParam 60%
</template>

<script>
  export default {
    name: 'gpu',
    props: {
      msg: String
    },
  }
</script>

<style lang="less" scoped>
  /* import './../theme/theme.less' */
  .gpuInfo{
    vertical-align: top;
    display: inline-block;
    .gpuName,.pasent{
      margin: 0 15px;
    }
    .gpuName{
      font-size: 30px;
    }
    .pasent{
      font-size: 80px;
      display: inline-block;
    }
    .capacity{
      font-size: 40px;
    }
  }
  .progressBar{
    width: 80%;
    margin-right: 20px;
  }
  .gpuProgress{
    width: 60%;
  }
  .gpuParam{
    font-size: 50px;
  }
</style>
