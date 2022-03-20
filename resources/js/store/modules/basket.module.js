export default {
    namespaced: true,
    state() {
        return {
            basket: [],
        }
    },
    getters: {
        basket: state => {
            return state.basket
        },
        totalBasketValue: (state, getters, rootState) => {
            let totalValue = 0
            for (let index in state.basket) {
                totalValue += state.basket[index].quantity * state.basket[index].price * rootState.usd
            }
            return totalValue
        },
        numberItemsInCart: state => {
            return state.basket.length
        },
        countItemInBasket: (state, getters) => id => {
            if (getters.basket.length > 0) {
                const searchInBasket = getters.basket.filter(product => product.id == id).shift()
                if (searchInBasket) {
                    return searchInBasket.quantity
                } else {
                    return 0
                }
            }
            return 0
        }
        

    },
    mutations: {
        actionsBasket: (state, {action, id, products}) => {
            const searchInBasket = (id) => {
                if (state.basket.filter(product => product.id == id) == false) {
                    return false
                } else {
                    return true
                }
            }
            const addToBasket = (id) => {
                const product = products.filter(product => product.id == id).shift()
                state.basket.push({
                    quantity: 1,
                    id: product.id,
                    title: product.title,
                    price: product.price
                })
            }
            const removeFromBasket = (id) => {
                const index = state.basket.findIndex(product => product.id == id)
                state.basket.splice(index, 1)
            }

            if (action == 'increase') {
                for (let index in state.basket) {
                    if (state.basket[index].id == id) {
                        state.basket[index].quantity += 1
                    }
                }
            } else if (action == 'decrease') {
                for (let index in state.basket) {
                    if (state.basket[index].id == id) {
                        if (state.basket[index].quantity > 1) {
                            state.basket[index].quantity -= 1
                        } else {
                            removeFromBasket(id)
                        }
                        
                    }
                }
            } else if (action == 'add') {
                if (state.basket.length == 0) {
                    addToBasket(id)
                } else if (searchInBasket(id)) {
                    for (let index in state.basket) {
                        if (state.basket[index].id == id) {
                            state.basket[index].quantity += 1
                        } 
                    }
                } else if (!searchInBasket(id)) {
                    addToBasket(id)
                }
            }
        },
    },
    actions: {
        async actionsBasket({commit, rootState}, {action, id}) {
            await commit('actionsBasket', {action, id, products: rootState.products})
        },
    }
}