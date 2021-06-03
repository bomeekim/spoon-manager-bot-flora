<template>
  <div class="py-16">
    <div class="py-16 text-center">
      <h1>Be Alive. Be Yourself!</h1>
      <h2 class="pt-2">
        로그인을 해주세요.
      </h2>
    </div>
    <v-img
      class="mx-auto"
      src="../assets/login.svg"
      height="calc(100vh - 600px)"
      min-height="350"
      width="400"
      contain
    />
  </div>
</template>

<script>
export default {
  name: 'LoginGuide',
};
</script>

<style scoped>
h1, h2 {
  /*background: linear-gradient(*/
  /*  to right top,*/
  /*  #cf4af3,*/
  /*  #e73bd7,*/
  /*  #f631bc,*/
  /*  #fd31a2,*/
  /*  #ff3a8b,*/
  /*  #ff4b78,*/
  /*  #ff5e68,*/
  /*  #ff705c,*/
  /*  #ff8c51,*/
  /*  #ffaa49,*/
  /*  #ffc848,*/
  /*  #ffe652*/
  /*);*/
  /*-webkit-background-clip: text;*/
  /*-webkit-text-fill-color: transparent;*/
  color: black;
}
</style>
