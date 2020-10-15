<template>
  <div>
    <div
      class="challenge-container"
      @click="a"
      :style="'background-color:' + color + ';'"
    >
      <div class="card-body">
        <div class="title">{{ challenge.name }}</div>
      </div>
      <div class="score">{{ challenge.score }}</div>
    </div>
    <div>
      <el-dialog
        :title="challenge.name"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span></span>
        <el-row>
          <el-col :span="3">
            <span class="subtitle">作者：</span>
          </el-col>
          <el-col :span="21">
            <span class="content">{{ challenge.author.name }}</span>
          </el-col>
        </el-row>
        <el-row class="challenge-title">
          <el-col :span="3">
            <span class="subtitle">简介：</span>
          </el-col>
          <el-col :span="21">
            <span class="content">{{ challenge.intro }}</span>
          </el-col>
        </el-row>
        <el-row class="challenge-title" v-show="challenge.hint">
          <el-col :span="3">
            <span class="subtitle">提示：</span>
          </el-col>
          <el-col :span="21">
            <span class="content">{{ challenge.hint }}</span>
          </el-col>
        </el-row>
        <el-row class="challenge-title">
          <el-col :span="3">
            <span class="subtitle">分数：</span>
          </el-col>
          <el-col :span="21">
            <span class="content">{{ challenge.score }}</span>
          </el-col>
        </el-row>
        <el-row class="challenge-title">
          <el-col :span="3">
            <span class="subtitle">答案：</span>
          </el-col>
          <el-form :model="flagForm" class="flag-form" v-if="!answerShow">
            <el-col :span="17">
              <el-form-item class="input-item">
                <el-input v-model="flagForm.flag" placeholder="Flag"></el-input>
              </el-form-item>
            </el-col>
            <el-col :offset="1" :span="2">
              <el-form-item>
                <el-button type="primary" @click="flagSubmit">提交</el-button>
              </el-form-item>
            </el-col>
          </el-form>
          <el-col :span="21" v-else>
            <span class="notify">已提交</span>
          </el-col>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { SubmitFlag } from "../../api/challenge";
import { getUserInfo, getTeamInfo } from "../../util/cacheProcessing";
export default {
  props: {
    challenge: {
      type: Object,
      required: true,
    },
    answerShow: {
      type: Number,
      required: true,
      default: 0,
    },
    userInfo: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
    teamInfo: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
    color: {
      type: String,
      required: true,
      default: "#181626",
    },
  },
  data() {
    return {
      dialogVisible: false,

      flagForm: {
        flag: "",
        token: this.teamInfo.token,
        teamID: this.teamInfo.id,
        userID: this.userInfo.id,
        challengeID: this.challenge.id,
      },
    };
  },
  methods: {
    a() {
      this.dialogVisible = true;
    },

    handleClose() {
      this.dialogVisible = false;
    },

    flagSubmit() {
      console.log("flag提交");
      // console.log(this.challenge);
      if (this.flagForm.flag != null && this.flagForm.flag != "") {
        let form = this.flagForm;
        form.token = this.teamInfo.token
        form.teamID = this.teamInfo.id
        form.challengeID = this.challenge.id
        console.log(form)
        SubmitFlag(form).then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$notify({
              title: "成功",
              message: "Flag 正确",
              type: "success",
            });
          this.dialogVisible = false;
          this.$emit('reGetChallenge');
            // setTimeout(()=>{
            //   // this.$router.go(0);
            //   this.$emit('reGetChallenge');
            // }, 500)
          } else {
            this.$notify.error({
              title: "错误",
              message: res.msg,
            });
          }
        });
      } else {
        this.$notify.error({
          title: "Flag不为空",
          message: "",
        });
      }
    },
  },
};
</script>

<style>
/* #177cb0 */
.challenge-container {
  cursor: pointer;
  height: 150px;
  padding: 2px;
  margin: auto;
  margin-top: 30px;
  border-radius: 2%;
  border: 2px solid hsla(0, 0%, 100%, 0.25);
  /* background-color: #181626;  */
}
.card-body {
  height: 130px;
  margin: auto;
  color: #eee;
  text-align: center;
  display: table;
  font-weight: 700;
  font-size: 16px;
}

.title {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
}

.score {
  color: hsla(0, 0%, 100%, 0.25);
  float: right;
  font-size: 1.2em;
}

.challenge-container:hover {
  background-color: #adadad;
  opacity: 0.99;
}

.el-dialog__title {
  color: azure;
  font-size: 25px;
  font-weight: 600;
}

.subtitle {
  color: beige;
  font-size: 20px;
}

.content {
  color: #eee;
  font-size: 18px;
  text-align: left;
  float: left;
}

.el-row {
  padding-top: 20px;
}

.flag-form {
  width: 100%;
}
/* .input-item {
  width: 50%;
} */

.notify {
  color: red;
  font-size: 18px;
  text-align: left;
  float: left;
}
</style>