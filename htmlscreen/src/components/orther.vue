<template lang="pug">
  div
    table
      tr
        td VPM: OFF
        td 进程: 213
        td 用户: RootChmod
      tr
        td 网络: WIFI
        td 线程: 213
        td 状态: 激活
      tr
        td V M: OFF
        td 速度: 2.5GHz
        td 用户组: 管理员

</template>

<script>
  export default {
    name: 'orther',
    props: {
        msg: String
    }
  }
</script>

<style lang="less" scoped>
  /* import './../theme/theme.less' */
  td{
    font-size: 35px;
    padding: 10px 15px;
  }
</style>
