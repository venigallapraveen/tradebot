const state = {
  funds: 100000,
  stocks: [],
    total_Stocks : 0,
    names : [],
    prices : [],
    ids : []

};

const mutations = {
  'BUY_STOCK' (state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
        let quant = Number(record.quantity);
        quant += Number(quantity);
        record.quantity = Number(quant);


    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });

    }
      state.total_Stocks += Number(quantity);
    state.funds -= stockPrice * Number(quantity);


  },

  'SELL_STOCK' (state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
        state.total_Stocks -= Number(quantity);
    } else {
        state.total_Stocks -= 1;
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }

    state.funds += stockPrice * Number(quantity);

  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
           const record = getters.stocks.find(element => element.id == stock.id);

            state.ids = stock.id;
            state.names = record.names;
            state.prices = record.prices;

           return {
               id : stock.id,
               quantity : stock.quantity,
               name : record.name,
               price: record.price
           }
        });
    },
    stockIds (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            let id = stock.id;





            return {
            id

            }
        });
    },
    stockNames (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            let id = record.name;



            return {
                id

            }
        });
    },
    stockPrices (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            let id = record.price;


            return {
                id

            }
        });
    },

    getIds(state, getters){

        let id = getters.stockIds;
        let ids = [];

        for (let person of id) {
            if (person.id) {

             ids.push(person.id);
            }
        }
        return ids;
    },
    getNames(state, getters){

        let id = getters.stockNames;
        let ids = [];

        for (let person of id) {
            if (person.id) {

                ids.push(person.id);
            }
        }
        return ids;
    },
    getPrices(state, getters){

        let id = getters.stockPrices;
        let ids = [];

        for (let person of id) {
            if (person.id) {

                ids.push(person.id);
            }
        }
        return ids;
    },
    funds(state){
        return state.funds;
    },
    total_Stocks(state){
        return state.total_Stocks;
    }
};



export default {
    state,
    mutations,
    actions,
    getters

}