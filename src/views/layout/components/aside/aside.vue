<template>
  <el-aside>
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-submenu index="1">
        <template></template>
      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-aside{
  height: 100%;
  background-color: #545c64;
}

.el-aside .el-menu{
  width: 100%;
  background-color: #545c64;
}
</style>