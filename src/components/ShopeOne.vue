<template>
<div id="one">
    <h1>Shop one</h1>
    <ul>
        <li v-for="product in saleProducts" :key="product.name">
            {{product.name}}
            {{product.price}}
        </li>
    </ul>
    <button @click="reducePrice">reduce</button>
</div>
</template>

<script>
export default {
    name: 'shopOne',
    computed: {
        products() {
            return this.$store.state.products
        },
        saleProducts() {
            return this.$store.getters.saleProducts
        },

    },
    methods: {
        reducePrice: function () {
           // this.$store.commit('reducePrice');
           this.$store.dispatch('reducePrice')
        }
    }
}
</script>

<style>
#one {
    height: 35vh;
    width: 30%;
    background: red;
    color: white;
}

#one li {
    list-style: none;
}

#two {
    height: 35vh;
    width: 30%;
    background: blue;
    color: white;
}
</style>
