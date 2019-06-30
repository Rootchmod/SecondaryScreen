<template lang="pug">
  div
    img.ramIcon(src="https://img.alicdn.com/imgextra/i3/3604278968/O1CN0104YEwp2G7OSTxC6Lc_!!3604278968.png")
    .ramRight
      .title R A M
      .status 50%
    .rightParam 500/2400 MB
    .progressBar
      .ramProgress.skills
</template>

<script>
    export default {
        name: 'ram',
        props: {
            msg: String
        }
    }
</script>

<style lang="less" scoped>
  /* import './../theme/theme.less' */
  .ramIcon,.ramRight{
    vertical-align: top;
    display: inline-block;
    margin: 0 1%;
    .title{
      font-size: 70px;
    }
    .status{
      font-size: 100px;
    }
  }

  .progressBar{
    width: 100%
  }
  .ramProgress{
    width: 60%;
  }
  .rightParam{
    text-align: right;
  }
</style>
