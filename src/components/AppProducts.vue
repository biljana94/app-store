<template>
    <div class="container">
        <h1>Products</h1>


        <!--SEARCH PRODUCT LIST-->
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Search Product</a>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
            </form>
        </nav>
        <br>

        <!--IZLISTAVANJE PROIZVODA-->
        <table class="table table-dark">

            <thead>
                <th scope="col">Title</th>
                <th scope="col">Quantity</th>
            </thead>

            <tbody>
                <!--"v-if="product.title.toLowerCase().includes(search.toLowerCase())" 
                    ako title proizvoda sa malim slovima ukljucuje(includes) search polje sa malim slovima upisano
                    vrati taj proizvod-->
                <tr v-for="(product, index) in products" :key="index" v-if="product.title.toLowerCase().includes(search.toLowerCase())">
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
            products: productService.list(),

            search: '', //trazimo proizvod - ovo stavljamo u v-model="search" u input polje u formi za trazenje proizvoda
        }
    },
}
</script>
