<template>
<div id="two">
    <h1>Shop two</h1>
    <ul>
        <li v-for="product in saleProducts" :key="product.name">
            {{product.name}}
            {{product.price}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'shopTwo',
    computed: {
        products() {
            return this.$store.state.products
        },
        saleProducts() {
            return this.$store.getters.saleProducts
        }
    }
}
</script>

<style  scoped>

</style>
