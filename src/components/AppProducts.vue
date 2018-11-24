<template>
    <div class="container">
        <h1>Products</h1>

        <!--IZLISTAVANJE PROIZVODA-->
        <table class="table table-dark">

            <thead>
                <th scope="col">Title</th>
                <th scope="col">Quantity</th>
            </thead>

            <tbody>
                <tr v-for="(product, index) in products" :key="index">
                    <td>{{product.title}}</td>
                    <td>{{product.quantity}}</td>
                </tr>
            </tbody>

        </table>

    </div>
</template>


<script>

import productService from '../service/ProductService.js'; //importovali smo ProductService.js u kojoj su nam funkcije za proizvode i sami proizvodi


export default {
    //fnc koja vraca objekat
    data() {
        return {
            //pozivamo fnc list() nad konstantom productService - izlistavamo proizvode iz niza
            products: productService.list()
        }
    },
}
</script>
