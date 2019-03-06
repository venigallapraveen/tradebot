<template>
  <div>
    <app-header></app-header>
    <div class="pad screen">
    <router-view></router-view>
    </div>

  </div>

</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header


  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
body {
  padding: 30px;
}

.pad {
  padding: 30px;
}


</style>
