<template>
  <div class="index-container">
    <a class="to-login" href="/login">Continue</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style >
.index-container {
  width: 100%;
  height: 100%;
}

iframe {
  width: 100%;
  height: 100%;
}
.to-login {
  position: absolute;
  left: 45%;
  top: 70%;
  font-size: 3em;
  text-decoration: none;
  color: black;
}
.to-login:hover {
  color: aliceblue;
}
</style>