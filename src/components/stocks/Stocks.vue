<template>
  <div>
    <b-card-group deck>
      <stock-data v-for="stock in stocks" :stock="stock"></stock-data>
    </b-card-group>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  name: "Stocks",


  components: {
    stockData: Stock
  },
  computed: {
    stocks() {
      console.log(this.$store.getters.stocks);
      return this.$store.getters.stocks;

    }
  }
};
</script>

<style scoped></style>
