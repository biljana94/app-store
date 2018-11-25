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
                <th scope="col">Sell</th>
            </thead>

            <tbody>
                <!--"v-if="product.title.toLowerCase().includes(search.toLowerCase())" ===>
                    ako title proizvoda sa malim slovima ukljucuje(includes) unos u search polje sa malim slovima -
                    vrati taj proizvod koji je unet u polje search-->
                <tr v-for="(product, index) in products" :key="index" v-if="product.title.toLowerCase().includes(search.toLowerCase())">
                    <td>{{product.title}}</td>

                    <td>
                        {{product.quantity}}
                        
                        <div class="btn-group" role="group">
                            <!--na klik se izvrsava fnc koja je pozvana i koja prima (product)-->
                            <button @click="incrementProductQuantity(product)" type="button" class="btn btn-light">
                                <strong> + </strong>
                            </button>
                            <button @click="decrementProductQuantity(product)" type="button" class="btn btn-light">
                                <strong> - </strong>
                            </button>
                        </div>
                    </td>

                    <td>
                        <!--moramo u router-link tagu da prosledimo parametar 'id' preko kojeg lociramo tacno koji proizvod zelimo da prodamo-->
                        <router-link :to="{name: 'sell-product', params: {id: product.id}}">
                            <button type="button" class="btn btn-primary">Sell Product</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>


<script>

import productService from '../service/ProductService.js'; //importovali smo ProductService.js u kojoj su nam funkcije za proizvode i sami proizvodi
import SellProduct from './SellProduct.vue';

export default {

    components: {
        SellProduct,
    },

    //fnc koja vraca objekat
    data() {
        return {
            //pozivamo fnc list() nad konstantom productService - izlistavamo proizvode iz niza
            products: productService.list(),

            search: '', //trazimo proizvod - ovo stavljamo u v-model="search" u input polje u formi za trazenje proizvoda

        }
    },

    methods: {
        //fnc koja poziva fnc iz ProductService.js - mora da primi parametar product
        incrementProductQuantity(product) {
            productService.increment(product);
        },

        //fnc koja poziva fnc iz ProductService.js
        decrementProductQuantity(product) {
            //ako je kolicina nekog proizvoda(product.quantity) > 0
            // if(product.quantity > 0) {
            //     //onda mozemo da pozovemo fnc iz ProductService.js koja smanjuje stanje na lageru
            // }
            productService.decrement(product);
        }
    },
}
</script>
