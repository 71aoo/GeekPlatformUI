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
        console.log(res)
      if (res != null) {
        this.$store.commit("changeLoginState", false);
        this.$store.commit("changeTeamState", false);
        removeUserInfo();
        removeTeamInfo();
        this.$route.push('/login')
      }
    });
  },
};
</script>

<style>
</style>