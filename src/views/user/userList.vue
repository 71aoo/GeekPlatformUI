<template>
  <div class="userList_container">
      <P class="container_title">All Users</P>
      <UserList></UserList>
  </div>
</template>

<script>
import UserList from "../../components/user/allUserList";
export default {
  name: "userList",
  components: {
    UserList,
  },
};
</script>

<style scoped>
.userList_container {
  width: 80%;
  margin: auto;
  text-align: center;
  text-align: center;
}
</style>