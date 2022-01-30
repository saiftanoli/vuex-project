
import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products:[
            {name:'apple', price:'120'},
            {name:'banana', price:'100'},
            {name:'orangr', price:'80'},
            {name:'mangoes', price:'150'},
        ]
    },
    getters:{
        saleProducts: state => {
                var saleProducts= state.products.map(product => {
                    return{
                        name:'**' + product.name + '**',
                        price: product.price / 2
                    }
                })
                return saleProducts;
        } 
    },
    mutations:{
        reducePrice:state =>{
            state.products.forEach(product => {
                product.price -=1;
            })
        }
    },
    actions:{
        reducePrice:context => {
            setTimeout(function ()  {
                context.commit('reducePrice')
            },2000)
        }
    }
})