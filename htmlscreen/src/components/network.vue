<template lang="pug">
  div
    .left
      img.network(src="https://img.alicdn.com/imgextra/i3/3604278968/O1CN01RPPCki2G7OSTGxJys_!!3604278968.png")
      br
      br
      .wlandata 上载: 200kb
      .wlandata 下载: 200kb
    .right
      .shutiao
        .jindutiao.jindu
      .desc 50%
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<style lang="less" scoped>
  /* import './../theme/theme.less' */
  .left,.right{
    display: inline-block;
  }
  .left{
    width: 70%;
  }
  .right{
    margin-left: 10%;
    width: 20%;
  }
  .network{
    width: 100%;
  }
  .wlandata{
    font-size: 25px;
  }

  .shutiao{
    width: 15px;
    height: 200px;
    position: relative;
    display: inline-block;
    background-color: rgba(255,255,255,.6);
    margin-left: 10px;
  }

  .skills {
    width: 15px;
    background-color: rgba(255,255,255,.8);
  }
  .jindu{
    height: 60px;
  }
  .desc{
    font-size: 20px;
  }
</style>
