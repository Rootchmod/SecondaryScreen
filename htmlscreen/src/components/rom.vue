<template lang="pug">
  div
    .left
      img.romicon(src="https://img.alicdn.com/imgextra/i2/3604278968/O1CN01y2Rwix2G7OSScisFQ_!!3604278968.png")
    .center-div
      .jindutiao
        .jindu
    .right
      .d
        span.usedTitle 使用率:
        span.usedData 40%
      .pan C:\
        .progressBar
          .skills.cpan
      .pan D:\
        .progressBar
          .skills.dpan
      .pan E:\
        .progressBar
          .skills.epan
      .pan F:\
        .progressBar
          .skills.fpan
</template>

<script>
  export default {
    name: 'rom',
    props: {
      msg: String
    }
  }
</script>

<style lang="less" scoped>
  /* import './../theme/theme.less' */
  .left,.center-div,.right{
    display: inline-block;
  }
  .center-div,.right{
    margin-left: 15px;
  }
  .romicon{
    width: 200px;
  }
  .right{
    font-size: 35px;
    width: 70%;
  }
  .jindutiao{
    width: 15px;
    height: 250px;
    background-color: rgba(255,255,255,.6);
    position: relative;
  }
  .jindu{
    width: 15px;
    height: 45px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
  }
  .progressBar{
    margin-left: 15px;
    width: 90%;
  }
  .progressBar,.skills{
    height: 30px;
  }
  .pan{
    margin: 5px 0;
    width: 100%;
  }
  .cpan,.dpan,.epan,.fpan{
    width: 30%;
  }
  .usedTitle{
    font-size: 30px;
  }
  .usedData{
    position: relative;
    font-size: 50px;
    right: -450px;
  }

</style>
