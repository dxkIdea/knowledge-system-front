<template>
  <div class="main:" :style="mainStyle">
      <div class="login" :style="loginStyle">
        <div id="header" style="text-align: center">
          <div class="logo">
            <svg-icon icon-class="java"></svg-icon>
            <span>技术手册</span>
          </div>
          <div></div>
        </div>
        <div id="main">
          <el-form autoComplete="on"
                   :model="loginForm"
                   :rules="loginRules"
                   ref="loginForm"
                   label-width="100px"
                   label-position="left"
                   size="mini">
            <el-form-item label="用户名" prop="username">
              <el-input name="username"
                        type="text"
                        placeholder="请输入用户名"
                        v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密 码" prop="password">
              <el-input name="password"
                        :type="pwdType"
                        placeholder="请输入密码"
                        v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native.p.prevent="handleLogin">登录</el-button>
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
  import {isvalidUsername} from '@/utlis/validate';
  //import {setCookie} from '@/utlis/support';
  import {login} from '@/api/login'

  export default {
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('密码不能小于3位'))
        } else {
          callback()
        }
      };
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
          top:'30%',
          left:'30%',
          backgroundColor: 'white'
        },
        //登录form表单
        loginForm: {
          username: '',
          password: '',
        },
        //表单元素校验
        loginRules: {
          username: [{require: true, trigger: 'blur', validator: validateUsername}],
          password: [{require: true, trigger: 'blur', validator: validatePassword}],
        },
        loading: false,
        pwdType: 'password'
      }
    },
    //方法
    methods: {
      //登录
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            login(this.loginForm);
          }else {
            console.log("请求参数不合法！");
            return false;
          }
        })
      }
    }
  }
</script>
