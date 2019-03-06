<template>
  <b-col class="mr-auto p-3" lg="4">
    <b-input-group>
      <b-input-group-prepend is-text>{{ stock.name }}</b-input-group-prepend>
      <b-input-group-prepend is-text>Price: ${{ stock.price }}</b-input-group-prepend>
      <b-input-group-prepend is-text>Quantity :{{ stock.quantity }}</b-input-group-prepend>

      <b-form-input type="number" placeholder="Quantity" v-model="quantity" />
      <b-input-group-append>
        <b-button
                variant="outline-primary"
                @click="sellStock"
                :disabled="insufficientStocks || quantity <= 0"
        >{{insufficientStocks ? 'Less Stocks' : 'Sell'}}</b-button
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
        quantity: 0
      };
    },computed : {


      insufficientStocks(){

        return this.quantity  > this.stock.quantity;
      }

    },
    methods: {

      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('sellStock', order);
        this.quantity = 0;
      }

    }
  };
</script>

<style scoped></style>

