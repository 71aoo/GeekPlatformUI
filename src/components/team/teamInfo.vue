<template>
  <div class="info_container">
    <div class="make_team" v-if="isInTeam == false">
      <p class="no_team">You are not in any team !!!</p>
      <p class="info">
        Please
        <el-link type="primary" @click="jionVisible = true">join</el-link
        >&nbsp;or
        <el-link type="primary" @click="createVisible = true">create</el-link
        >&nbsp;a team
      </p>
    </div>
    <div class="team_info" v-else>
      <p class="container_title">My Team</p>
      <el-row>
        <el-col :offset="6" :span="6">
          <el-upload
            ref="upload"
            class="avatar-uploader"
            action="/api/upload/team"
            accept="image/png,image/jpg,image/jpeg"
            :auto-upload="true"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="teamInfo.headerImg"
              :src="teamInfo.headerImg"
              class="team_avatar"
            />

            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
        <el-col :span="12">
          <div class="right-info">
            <h1 class="team-name">{{ teamInfo.name }}</h1>
          </div>
          <div class="right-info" @click="changeInfoVisible">
            <h1 class="team-motto" title="点击修改">{{ teamInfo.motto }}</h1>
          </div>
          <div class="right-info">
            <h1 class="team-token">{{ teamInfo.token }}</h1>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- jion -->
    <el-dialog :visible.sync="jionVisible" width="30%">
      <el-input v-model="teamToken.token" placeholder="队伍 Toke"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="jionVisible = false">取 消</el-button>
        <el-button type="primary" @click="joinTeam">加入</el-button>
      </span>
    </el-dialog>

    <!-- create -->
    <el-dialog :visible.sync="createVisible" width="30%">
      <el-row>
        <!-- <el-col :span="8">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="newTeam.img" :src="newTeam.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col> -->
        <!-- <el-col :span="16"> -->
          <el-input
            v-model="newTeam.teamName"
            placeholder="队伍名称"
          ></el-input>
          <el-input v-model="newTeam.motto" placeholder="个性签名"></el-input>
        <!-- </el-col> -->
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button @click="createVisible = false">取 消</el-button>
        <el-button type="primary" @click="createTeam">创建</el-button>
      </span>
    </el-dialog>

    <!-- 修改信息 -->
    <el-dialog :visible.sync="changeTeamInfoVisible" width="30%">
      <el-form v-model="newInfo">
        <el-form-item>
          <el-input placeholder="个性签名" v-model="newInfo.motto"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changeTeamInfoVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeInfo">修改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getInTeam,
  setInTeam,
  getUserInfo,
  setTeamInfo,
} from "../../util/cacheProcessing";
import {
  getMyTeamInfo,
  joinTeam,
  createTeam,
  changeTeamInfo,
} from "../../api/team";
export default {
  data() {
    return {
      // 是否有队伍
      isInTeam: false,

      // 输入队伍token
      teamToken: {
        token: "",
      },
      // 加入队伍框
      jionVisible: false,
      //   创建队伍框
      createVisible: false,

      newTeam: {
        img: "",
        teamName: "",
        motto: "",
      },

      // 队伍信息
      teamInfo: {},

      // 修改信息框
      newInfo: {
        motto: "",
        headerImg: "",
      },

      changeTeamInfoVisible: false,
    };
  },
  mounted() {
    this.getInTeamInfo();
  },
  methods: {
    handleAvatarSuccess(res, file) {
      if (res.status == 200) {
        this.teamInfo = res.data;
        setTeamInfo(res.data);
        this.$refs.upload.clearFiles();
        this.$notify({
          title: "头像修改成功",
          message: "",
          type: "success",
        });
        // setTimeout((res) => {
        //   this.$router.go(0);
        // }, 500);
      } else {
        this.$notify.error({
          title: res.msg,
          message: "",
        });
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

    getInTeamInfo() {
      let inTeam = getInTeam();
      
      if (inTeam != null && inTeam != false && inTeam != '' && inTeam == "true") {
        console.log("inteam")
        this.isInTeam = true
        getMyTeamInfo().then((res) => {
          if (res.status == 200) {
            // console.log(res);
            this.teamInfo = res.data;
            
          }
        });
      } else {
        this.isInTeam = false;
      }
    },
    // 加入队伍
    joinTeam() {
      if (this.teamToken.token != null && this.teamToken.token != "") {
        this.jionVisible = false;
        joinTeam(this.teamToken).then((res) => {
          if (res.status == 200) {
            setInTeam(true);
            this.teamInfo = res.data;
            setTeamInfo(res.data);
            this.isInTeam = true;
            this.$notify({
              title: "成功",
              message: res.msg,
              type: "success",
            });
            this.$router.go(0);
          } else {
            this.$notify.error({
              title: "错误",
              message: res.msg,
            });
          }
        });
        this.teamToken.token = "";
      }
    },

    // 创建队伍
    createTeam() {
      createTeam(this.newTeam).then((res) => {
        if (res.status == 200) {
          setInTeam(true);
          this.teamInfo = res.data;
          setTeamInfo(res.data);
          this.inTeam = true
          setInTeam(true)
          this.$notify({
            title: "成功",
            message: res.msg,
            type: "success",
          });
        } else {
          this.$notify.error({
            title: "错误",
            message: res.msg,
          });
        }

        this.createVisible = false;
      });
    },

    changeInfoVisible(){
      
      if(this.isInTeam == true){
        this.changeTeamInfoVisible = true
      }
    },

    // 修改队伍信息
    changeInfo() {
      this.newInfo.headerImg = this.teamInfo.headerImg;

      changeTeamInfo(this.newInfo).then((res) => {
        console.log(res)
        if (res.status == 200) {
          this.teamInfo = res.data;
          setTeamInfo(res.data);
          this.changeTeamInfoVisible = false;
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
};
</script>

<style scoped>
.info_container {
  text-align: center;
}
.no_team {
  font-size: 3em;
  color: #8176a9;
}
.info {
  color: #8176a9;
  font-size: 25px;
  font-weight: 700;
}

.el-link {
  font-size: 25px;
  font-weight: 500;
  font-style: oblique;
}

.avatar-uploader {
  text-align: center;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.team_avatar {
  width: 300px;
  height: 300px;
  display: block;
  border-radius: 50%;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
  border-radius: 50%;
}

.el-input {
  margin-top: 30px;
}
.team_info .avatar-uploader-icon {
  width: 300px;
  height: 300px;
  line-height: 300px;
  text-align: center;
}

.right-info {
  width: 100%;
  height: 100px;
}

.team-name {
  color: aliceblue;
  float: left;
  /* margin-top: 30px; */
  font-size: 2em;
}

.team-motto {
  color: aliceblue;
  float: left;
  /* margin-top: 30px; */
  font-size: 1.5em;
}

.team-token {
  color: aliceblue;
  float: left;
  font-size: 1.2em;
}
</style>