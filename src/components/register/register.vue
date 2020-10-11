<template>
  <div class="register_container">
    <p class="register_title">Register for Geeks'Challenge</p>
    <el-form
      :model="registerForm"
      status-icon
      :rules="registerFormRules"
      ref="registerFormRef"
      class="register_form"
    >
      <el-form-item prop="username">
        <el-input
          v-model="registerForm.username"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="15">
          <el-form-item prop="email">
            <el-input v-model="email.prefix" placeholder="邮箱"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item prop="suffix">
            <el-select v-model="email.suffix">
              <el-option label="@qq.com" value="@qq.com"></el-option>
              <el-option label="@gmail.com" value="@gmail.com"></el-option>
              <el-option label="@foxmail.com" value="@foxmail.com"></el-option>
              <el-option label="@yahoo.com" value="@yahoo.com"></el-option>
              <el-option label="@163.com" value="@163.com"></el-option>
              <el-option label="@msn.com" value="@msn.com"></el-option>
              <el-option label="@hotmail.com" value="@hotmail.com"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18">
          <el-form-item prop="code">
            <el-input
              v-model="registerForm.code"
              placeholder="验证码"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="1" :span="5">
          <el-button type="primary" @click="sendCode">发送</el-button>
        </el-col>
      </el-row>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="registerForm.password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="registerForm.checkPass"
          placeholder="确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerFormRef')"
          >注册</el-button
        >
        <el-button @click="resetForm('registerFormRef')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Register, checkUsername, sendCode } from "../../api/user";
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入密码"));
      } else {
        checkUsername({ name: value }).then((res) => {
          if (res.status == 200) {
            console.log(res);
            callback();
          } else {
            callback(new Error("用户名已存在"));
          }
        });
      }
    };
    // 密码认证
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerFormRef.validateField("checkPass");
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      email: {
        prefix: "",
        suffix: "",
      },
      // 注册表单
      registerForm: {
        username: "",
        email: "",
        code: "",
        password: "",
        checkPass: "",
      },
      // 注册验证
      registerFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 4,
            max: 64,
            message: "长度在 4 到 12 个字符",
            trigger: "blur",
          },
          { validator: validateUsername, trigger: "blur" },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          {
            min: 4,
            max: 4,
            message: "请输入正确验证证码",
            trigger: "blur",
          },
        ],
        password: [
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
          { validator: validatePass, trigger: "blur" },
        ],
        checkPass: [
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
          { validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Register(this.registerForm).then((res) => {
            if (res.status == 200) {
              this.$notify({
                title: "成功",
                message: "注册成功",
                type: "success",
              });
              this.registerForm = {};
              this.$router.push("/login")
            } else {
              this.$notify.error({
                title: "错误",
                message: res.msg,
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    sendCode() {
      if (
        this.email.prefix == null ||
        this.email.prefix == "" ||
        this.email.suffix == null ||
        this.email.suffix == ""
      ) {
        this.$message({
          message: "邮箱不正确",
          type: "warning",
        });
      } else {
        this.registerForm.email = this.email.prefix + this.email.suffix;

        sendCode({ email: this.registerForm.email }).then((res) => {
          if (res.status == 200) {
            this.$notify({
              title: "成功",
              message:
                "An activation email has been sent to " +
                this.registerForm.email +
                ",please check your inbox",
              type: "success",
            });
          } else {
            this.$notify.error({
              title: "错误",
              message: res.msg,
            });
          }
        });
      }
    },
  },
};
</script>

<style>
.register_container {
  width: 30%;
  margin: auto;
  margin-top: 50px;
}

.register_title {
  color: #fff;
  text-align: left;
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 700;
}
</style>