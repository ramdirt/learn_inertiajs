import axios from 'axios'

export default {
    namespaced: true,
    state() {
        return {
            firebase: 'https://tyres-pmt-default-rtdb.europe-west1.firebasedatabase.app/tyres.json',
            bank: 'https://www.cbr-xml-daily.ru/daily_json.js'
        }
    },
    actions: {
        async getProductsFromAPI({commit, state}, id) {
            return await axios.get(state.firebase)
                .then((products) => {
                    if (id) {
                        const product = products.data.filter(product => product.id == id).shift()
                        commit('setProductToState', product, { root: true})
                        return product;
                    } else {
                        commit('setProductsToState', products.data, { root: true})
                        return products.data;
                    }

                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
        // Получения курса рубля для преобразования цен
        async getUSDtoRUB ({commit, state}) {
            return await axios.get(state.bank)
                .then((quotes) => {
                    if (quotes) {
                        const USD = quotes.data.Valute.USD.Value
                        commit('setUSD', Math.ceil(USD), { root: true})
                        return USD
                    }
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        }
    }
}