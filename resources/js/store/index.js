import { createStore } from "vuex";
import basketModule from "./modules/basket.module";
import requestModule from "./modules/request.module";
import filterModule from "./modules/filter.module";
import stack from "./modules/stack";

export default createStore({
    state() {
        return {
            products: [],
            product: {},
            usd: 80,
            limitDownload: 5,
        };
    },
    getters: {
        products: (state) => {
            return state.products;
        },
        product: (state) => {
            return state.product;
        },
        downloadLimit: (state) => {
            return state.limitDownload;
        },
    },
    mutations: {
        setProductsToState: (state, products) => {
            state.products = products;
        },
        setProductToState: (state, product) => {
            state.product = product;
        },
        changeLimitDownload: (state, count) => {
            state.limitDownload += count;
        },
        setUSD: (state, quotes) => {
            state.usd = quotes;
        },
    },
    actions: {
        changeLimitDownload: ({ _, commit }, count) => {
            commit("changeLimitDownload", count);
        },
    },
    modules: {
        basketModule,
        requestModule,
        filterModule,
        stack,
    },
});
