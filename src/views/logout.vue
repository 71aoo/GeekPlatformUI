<template>
    <div>

    </div>
</template>

<script>
import {
  removeTeamInfo,
  removeIsLogin,
  removeUserInfo,
  removeInTeam,
} from "../util/cacheProcessing";
import { Logout } from "../api/user";
export default {
  name: "logout",
  mounted() {
    console.log("dddd")
    Logout().then((res) => {
      if (res.status == 200) {
        this.$store.commit("changeLoginState", false);
        this.$store.commit("changeTeamState", false);
        removeUserInfo();
        removeTeamInfo();
        this.$notify({
            title: "注销成功",
            message: "",
            type: "success",
          });
        this.$route.push('/login')
      }
    });
  },
};
</script>

<style>
</style>