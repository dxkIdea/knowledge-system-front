<template>
  <div class="main:" :style="mainStyle">
      <div class="login" :style="loginStyle">
        <div id="header" style="text-align: center">
          <div style="text-align: center">
            <svg-icon icon-class="java" style="width: 56px;height: 56px;"></svg-icon>
          </div>
          <h2 class="login-title color-main">Technology-System</h2>
        </div>
        <div id="main" >
          <el-form autoComplete="on"
                   :model="loginForm"
                   :rules="loginRules"
                   ref="loginForm"
                   label-width="100px"
                   label-position="left"
                   size="mini">
            <el-form-item prop="username">
              <el-input name="username"
                        type="text"
                        placeholder="请输入用户名"
                        autocomplete="on"
                        v-model="loginForm.username">
                <span slot="prefix">
                  <i class="el-icon-user-solid"></i>
                </span>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input name="password"
                        :type="pwdType"
                        placeholder="请输入密码"
                        v-model="loginForm.password">
                <span slot="prefix">
                  <i class="el-icon-lock"></i>
                </span>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native.p.prevent="handleLogin">登录</el-button>
              <el-button>注册</el-button>
            </el-form-item>
          </el-form>
        </div>
<!--        <div id="footer">
          <el-tag type="error">foot</el-tag>
        </div>-->
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
          backgroundColor: '#73adc4',
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
<style>
  #main .el-input {
    width: 80%;
    position: static;
  }
</style>
