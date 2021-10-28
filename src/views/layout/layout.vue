<template>
  <el-container>
    <Aside id="aside"></Aside>
    <Home id="home"></Home>
  </el-container>

</template>

<script>

import {Aside,Home} from '../layout/components/index'


export default {
  name: "layout",
  components: {
    Aside,
    Home
  }
}
</script>

<style scoped>
.el-container {
  width: 100% !important;
  height: 100%;
}
#aside {
  width: 12% !important;
  height: 100%;
}

#home {
  width: 88%;
}

</style>