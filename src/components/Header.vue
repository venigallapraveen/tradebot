<template>
  <div>

    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-brand href="#"><span class="blink">TradeBot</span></b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/" @click="activate(1)" :class="{ active : active_el == 1 }">Home</b-nav-item>
          <b-nav-item to="/portfolio" @click="activate(2)" :class="{ active : active_el == 2 }">My Stocks</b-nav-item>
          <b-nav-item to="/stocks" @click="activate(3)" :class="{ active : active_el == 3 }"><span >Stock Market</span></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">









          <b-nav-item to="/" >
            <span class="hover_blue">${{funds}}</span>
          </b-nav-item>

          <b-nav-item href="#" @click="stopTrading" class="stop_trading">
            <span class="hover_red">End Day</span>
          </b-nav-item>

          <b-nav-item-dropdown text="Settings" right>
            <b-dropdown-item href="#">Load</b-dropdown-item>
            <b-dropdown-item href="#">Save</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      active_el:0,
      counter: this.$store.getters.funds,
      max: 100000
    }

  },
  methods : {
    activate:function(el){
      this.active_el = el;
    },
    stopTrading(){
      this.$store.dispatch('randomizeStocks');
    }




  },
  computed : {
    funds() {
      return this.$store.getters.funds;
    }

  }
};
</script>

<style scoped>
.hover_red:hover {
  color: tomato;
}

.hover_blue:hover {
  color: dodgerblue;
}
  .blink {


    animation: blink 1s  infinite;
  }
@keyframes blink{
  0%{color: tomato;}

  100%{color: dodgerblue;}
}
</style>
