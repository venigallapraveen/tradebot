/* eslint-disable prettier/prettier */
import stocks from "../../data/stocks";

const state = {
  stocks: []
};

const mutations = {
  "SET_STATES" (state, stocks) {
    state.stocks = stocks;
  },
  "RND_STOCKS" (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1+ Math.random() - 0.4));
    })
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
  initStocks: ({ commit }) => {
    commit("SET_STATES", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
