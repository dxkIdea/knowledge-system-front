<template>
  <div class="main:" :style="mainStyle">
      <div class="login" :style="loginStyle">
        <div id="header">
          <div class="logo">
            <el-image src="u"></el-image>
            <span>技术手册</span>
          </div>
          <div></div>
        </div>
        <div id="main">
          <el-form ref="login" :model="form">
            <el-form-item label="用户名">
              <el-input v-model='form.name'></el-input>
            </el-form-item>
            <el-form-item label="密 码">
              <el-input v-model='form.password'></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="methods.onSubmit()">登录</el-button>
              <el-button>注册</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div id="footer">
          <el-tag type="error">foot</el-tag>
        </div>
      </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        //main样式
        mainStyle: {
          backgroundImage: 'url(' + require('@/static/images/user/login/login-bg.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",
          backgroundPosition: 'center',
          position: 'relative',
          height: '100%',
          width: '100%'

        },
        //登录模块样式
        loginStyle: {
          height: '40%',
          width: '30%',
          color: 'green',
          position: 'absolute',
          top:'20%',
          left:'8%'
        },
        //登录form表单
        form: {
          name: '',
          password: ''
        },
        //方法
        methods: {
          //登录
          onSubmit() {
            alert('哈哈哈~');
          }
        }
      }
    }
  }
</script>
