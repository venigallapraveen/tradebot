<template>




  <b-col class="mr-auto p-3" lg="4">
    <b-input-group>
      <b-alert
              :show="dismissCountDown"
              dismissible
              variant="light"
              @dismissed="dismissCountDown=0"
              @dismiss-count-down="countDownChanged"
      >
        Name : <span class="blue">{{ stock.name }}</span> | Stocks Bought : <span class="blue">{{quant}}</span> | Total Amount Spent : <span class="blue">${{sale}}</span>
      </b-alert>
      <b-input-group-prepend is-text>{{ stock.name }}</b-input-group-prepend>
      <b-input-group-prepend is-text>Price: ${{ stock.price }}</b-input-group-prepend>

      <b-form-input type="number" placeholder="Quantity" v-model="quantity" />
      <b-input-group-append>
        <b-button
          variant="outline-primary"
          @click="buyStock"
          :disabled="insufficientFunds || quantity <= 0"
          >{{insufficientFunds ? 'Less Funds' : 'Buy'}}</b-button
        >
      </b-input-group-append>
    </b-input-group>
  </b-col>

</template>

<script>
export default {
  name: "Stock",
  props: ["stock"],
  data() {
    return {
      quantity: 0,
      show_quantity: 0,
      dismissSecs: 1,
      dismissCountDown: 0,

    };
  },computed : {

    funds(){

      return this.$store.getters.funds;
    },
    quant(){

      return this.show_quantity;
    },

    sale(){
      return (Number(this.show_quantity) * Number(this.stock.price));
    },

    insufficientFunds(){

      return this.quantity * this.stock.price > this.funds;
    }

  },

  methods: {

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    buyStock() {
      this.dismissCountDown = this.dismissSecs;
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);

      this.$store.dispatch('buyStock', order);
      this.show_quantity = this.quantity;
      this.quantity = 0;
    }
  }
};
</script>




<style scoped>

  .blue{

    color: dodgerblue;


  }
</style>
