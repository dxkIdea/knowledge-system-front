<template>
  <el-container>
    <el-aside>
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item-group>
          <el-menu-item index="1">
            <template>
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template>
              <i class="el-icon-s-custom"></i>
              <span>会员管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <template>
              <i class="el-icon-s-help"></i>
              <span>资源管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="4">
            <template>
              <i class="el-icon-s-data"></i>
              <span>权限管理</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    <el-main></el-main>
  </el-container>
</template>

<script>
export default {
  name: "layout"
}
</script>

<style scoped>
.el-container {
  width: 100%;
  height: 100%;
}
/*!important：覆盖element.style样式*/
.el-container .el-aside {
  width: 10% !important;
  background-color: #4d4a4a;
}
.el-container .el-main {
  width: 90%;
  background-color: #ded8c2;
}
</style>