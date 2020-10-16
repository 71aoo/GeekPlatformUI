<template>
  <div class="an_container">
    <p class="title">Announcements</p>
    
    <el-timeline>
      <el-timeline-item
        v-for="(a, i) in announcements"
        :key="i"
        :timestamp="a.createdTime"
        placement="top"
      >
        <el-card>
          <h2>{{ a.content }}</h2>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  
  </div>
</template>

<script>
import { getAnnouncement } from "../../api/others";
export default {
  data() {
    return {
      announcements: [],
    };
  },
  mounted() {

    this.getAnnouncementList();
    
  },
  methods: {
    getAnnouncementList() {
      getAnnouncement().then((res) => {
        if (res.status == 200) {
          this.announcements = res.data;
        }
      });
    },
  },
  watch: {
    $route(to, from) {
      console.log("rout")
      console.log(to)
      console.log(from)
      // this.$router.go(0);
    },
  },
};
</script>

<style scoped>
.an_container {
  margin: auto;
  width: 50%;
  /* text-align: center */
}

.title {
  color: #fff;
  text-align: center;
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 700;
}

.el-card {
  background-color: #1e1c34;
  border: 1px solid #1e1c34;
  color: #bebae0;
}
</style>