<template>
  <div class="login_container" v-if="!$store.state.isLogin">
    <p class="login_title">Login for GeeksChallenge</p>
    <el-form
      :model="loginForm"
      status-icon
      :rules="loginFormRules"
      ref="loginFormRef"
      class="login_form"
    >
      <el-form-item class="login_form_item" prop="username">
        <el-input
          class="form_input"
          v-model="loginForm.username"
          placeholder="用户名"
        ></el-input>
      </el-form-item>

      <el-form-item class="login_form_item" prop="password">
        <el-input
          class="form_input"
          v-model="loginForm.password"
          placeholder="密码"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginFormRef')"
          >登录</el-button
        >
        <el-button @click="resetForm('loginFormRef')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Request from "../../util/request";
import { setIsLogin } from "../../util/cacheProcessing";
export default {
  name: "login",
  props: ["isLogin"],
  data() {
    return {
      // 登录表单
      loginForm: {
        username: "",
        password: "",
      },

      // 登录验证规则
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 4,
            max: 64,
            message: "长度在 4 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 16,
            message: "长度在 5 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 提交登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Request.post("/login", this.loginForm)
            .then((res) => {
              console.log(res);
              if (res.status == 200) {
                this.$store.commit("changeLoginState", true);
                this.$notify({
                    title: "登录成功",
                    message: "",
                    type: "success",
                  });
                setTimeout(() => {
                  this.$router.go(0);
                }, 500);
              } else {
                this.$notify.error({
                  title: "用户名或密码错误",
                  message: "",
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    // 重置
    resetForm(formName) {},
  },
};
</script>

<style scoped>
.login_container {
  width: 30%;
  margin: auto;
  margin-top: 50px;
}

.login_title {
  color: #fff;
  text-align: left;
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 700;
}
</style>