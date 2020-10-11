<template>
  <div class="teamList_container">
    <p class="container_title">All Teams</p>
    <TeamList></TeamList>
  </div>
</template>

<script>
import TeamList from "../../components/team/teamList";
export default {
  name: "teamList",
  components: {
    TeamList,
  },
};
</script>

<style scoped>
.teamList_container {
    margin: auto;
    width: 80%;
  text-align: center;
}
</style>