export default {
    namespaced: true,
    state() {
        return {
            diameter: '', // диаметр колеса
            shore: '', // жесткость по шору
        }
    },
    getters: {
        // Фильтр каталога
        filterProducts: (state, getters, rootState, rootGetters)  => {
            if (state.diameter && !state.shore) {
                return rootGetters.products.filter(product => product.meta.tyre_diameter === state.diameter)
            } else if (state.diameter && state.shore) {
                return rootGetters.products
                    .filter(product => product.meta.tyre_diameter === state.diameter)
                    .filter(product => product.meta.hardness_compound === state.shore)
            } else if (state.shore) {
                return rootGetters.products.filter(product => product.meta.hardness_compound === state.shore)
            } else {
                return rootGetters.products
            }
        },

        // Количество результатов поиска при активации фильтра в каталоге
        numberOfSearchResults: (state, getters) => (name, value) => {
            const number = getters.filterProducts
                .filter(product => product.meta[name] == value).length
            return number
        },

        // Генерация уникальный значений имен параметров
        generateNameParameters: (state, getters, rootState, rootGetters) => {
            const uniqueNameParameters = []

            for (let index in rootGetters.products) {
                const tyreMeta = rootGetters.products[index].meta

                for (let index in tyreMeta) {
                    uniqueNameParameters.push(index)
                }

                break;
            }
            return uniqueNameParameters
        },

        // Генерация уникальный значений параметров для фильтра
        generateUniqueValueParameters: (state, getters, rootState, rootGetters) => {
            const result = {}

            // получить список всех уникальных параметров товара
            const parameters = getters.generateNameParameters
            for (let name in parameters) {
                // получаем список все значений итерируемого параметра товара
                const listValuesAll = []
                for (let product in rootState.products) {
                    let value = rootState.products[product].meta[parameters[name]]
                    listValuesAll.push(value)
                }

                // удаляем дубликаты итерируемого параметра
                const listValuesUnique = listValuesAll.filter((value, index) => {
                    return listValuesAll.indexOf(value) === index;
                }) 

                // на выходе должен быть объект в виде {'параметр': [уникальные значения]}
                result[[parameters[name]]] = listValuesUnique.sort()
            }

            return result
        },
       
    },
    mutations: {
        changeFilter(state, payload) {
            state.diameter = payload.diameter
            state.shore = payload.shore
        },        
    }
}