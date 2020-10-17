<template>
  <div class="user_info">
    <p class="container_title">My Profile</p>
    <el-row>
      <el-col :offset="6" :span="6">
        <el-upload
          ref="upload"
          class="avatar-uploader"
          action="/api/upload/user"
          accept="image/png,image/jpg,image/jpeg"
          :auto-upload="true"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="userInfo.headerImg"
            :src="userInfo.headerImg"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>
      <el-col :span="12">
        <div class="info-container" @click="openChange" title="点击修改信息">
          <div class="user-name">
            {{ userInfo.username }}
          </div>
          <div class="user-motto">
            <p>{{ userInfo.motto }}</p>
          </div>
          <div class="student-info">
            <el-row>
              <el-col :span="3"> {{ userInfo.realName }} </el-col>
              <el-col :span="6"> {{ userInfo.studentId }}</el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 修改信息 -->
    <el-dialog :visible.sync="changeUserInfoVisible" width="30%">
      <el-form v-model="newInfo">
        <el-form-item>
          <el-input placeholder="个性签名" v-model="newInfo.motto"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="真实姓名" v-model="newInfo.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="学号" v-model="newInfo.number"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changeUserInfoVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeInfo">修改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getUserInfo, setUserInfo } from "../../util/cacheProcessing";
import { changeUserInfo } from "../../api/user";
export default {
  data() {
    return {
      changeUserInfoVisible: false,
      userInfo: {},
      newInfo: {
        motto: "",
        name: "",
        number: "",
        header_img: "",
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw);
      // console.log(res);
      // console.log(URL.createObjectURL(file.raw));
      if (res.status == 200) {
        this.userInfo = res.data;
        setUserInfo(res.data);
        this.$refs.upload.clearFiles();
        this.$notify({
          title: "头像修改成功",
          message: "",
          type: "success",
        });
        // setTimeout((res) => {
        //   this.$router.go(0);
        // }, 500);
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error("上传头像图片只能是 JPG 和 PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return (isJPG || isPNG) && isLt2M;
    },
    openChange() {
      this.changeUserInfoVisible = true;
    },
    changeInfo() {
      changeUserInfo(this.newInfo).then((res) => {
        // console.log(res);
        if (res.status == 200) {
          this.userInfo = res.data;
          setUserInfo(res.data);
          this.changeUserInfoVisible = false;
          this.$notify({
            title: "成功",
            message: "信息修改成功",
            type: "success",
          });
        } else {
          this.$notify.error({
            title: res.msg,
            message: "",
          });
        }
      });
    },
  },
  mounted() {
    this.userInfo = getUserInfo();
    this.newInfo.header_img = getUserInfo().headerImg;
    this.newInfo.motto = getUserInfo().motto;
    this.newInfo.number = getUserInfo().studentId;
    this.newInfo.name = getUserInfo().realName;
  },
};
</script>
<style scoped>
.user_info {
  text-align: center;
}
.avatar-uploader {
  text-align: center;
  width: 100%;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 300px;
  height: 300px;
  line-height: 300px;
  text-align: center;
}

.avatar {
  width: 300px;
  height: 300px;
  display: block;
  border-radius: 50%;
  float: right;
}
.user-name {
  text-align: left;
  font-size: 3em;
  color: aliceblue;
}
.user-motto {
  text-align: left;
  font-size: 2em;
  color: aliceblue;
}
.student-info {
  text-align: left;
  font-size: 1.5em;
  color: aliceblue;
}
.info-container {
  margin-top: 20px;
  cursor: hand;
}
</style>