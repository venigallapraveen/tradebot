<template>
  <div class="screen pad">
    <div class="screen-1">
      <b-jumbotron header="Portfolio">


        <p>Available Funds : <span class="blue">{{funds}}$</span></p>
        <p>Total Stocks Bought :  <span class="blue">{{stocks_bought}}$</span></p>
        <p v-if="set=true">Total Amount Invested :  <span class="blue">{{amounted_invested}}$</span></p>
        <p><span :class="juice"> {{margin}}$</span> </p>
        <!--<p> stocks purchased : {{getStocks}}</p>-->
        <!--<p> stocks Ids : {{getStock_ids}}</p>-->
        <!--<p> stocks Names : {{getStock_names}}</p>-->
        <!--<p> stocks Prices : {{getStock_prices}}</p>-->
      </b-jumbotron>
    </div>


    <div class="screen-2">
      <rchart></rchart>
    </div>
  </div>
</template>

<script>


  import ReactiveChart from './ReactiveChart';
export default {
  components: {


    rchart : ReactiveChart

  },



  data() {
    return {
      juice : 'green',
      invested_amount: 0,
      profit : 0,
      loss : 0,
      funds_i : 0,
      set : true

    }
  },
  computed : {
    funds(){
      this.funds_i = this.$store.getters.funds;
      return this.funds_i;
    }, stocks_bought(){
      return this.$store.getters.total_Stocks;
    },
    amounted_invested(){
      if(this.profit > 0){
        this.set = false;
      } else {
        this.invested_amount = 100000 - Number(this.$store.getters.funds);
        this.set = true;
        return this.invested_amount;
      }

    },
    margin(){

      if((this.funds_i )> 100000){

        this.profit = ((this.funds_i )-100000);
        this.juice = 'green';
        return this.profit;

      } else {

        this.loss = (100000- (this.funds_i));
        this.juice = 'red';
        return this.loss;

      }

    },
    getStocks(){
// let ido = Object.entries(id).forEach(([key, value]) => value);
      let id = this.$store.getters.stockIds;
      let ids = [];

      for (let person of id) {
        if (person.id) {

          ids.push(person.id);

        }
      }

      return ids;
    },
    getStock_ids(){

      return this.$store.getters.getIds;
    },
    getStock_names(){

      return this.$store.getters.getNames;
    },
    getStock_prices(){

      return this.$store.getters.getPrices;
    }



  }
};
</script>

<style scoped>

  .pad {
    padding: 30px;
  }

.screen{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

  .screen-1{
    flex: 0 0 25%;
  }
  .screen-2{

    max-width: 600px;
    max-height: 600px;
    flex: 0 0 70%;

  }

  .blue{
    color: dodgerblue;
    font-weight: normal;
  }

  .green{
    color: limegreen;
    font-weight: lighter;
  }

  .green::before {
    content: 'Net Margin: +';
    font-weight: normal;
    color: black;
  }

  .red{
    color: tomato;
    font-weight: lighter;
  }

  .red::before {
    content: 'Net Margin: -';
    font-weight: normal;
    color : black;
  }

</style>
