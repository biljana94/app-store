<template>
   <div class="container">

       <h3>Sell Product</h3>

        <!--ako ima proizvoda na lageru (v-if="product.quantity") - uradi sve sto je u ovom template-u-->
        <template v-if="product.quantity">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item list-group-item-info"><b>Title:</b> {{product.title}}</li>
                    <li class="list-group-item list-group-item-info"><b>Quantity:</b> {{product.quantity}}</li>
                </ul>
                <br>


                <form>
                    <div class="form-row">

                        <div class="form-group col-md-8">
                            <label>Select customer</label>
                            <!--'id' za select tag nam sluzi da dovucemo ceo select box u fnc preko 'id'-->
                            <select class="form-control" v-model="selectCustomer">
                                <!--ovaj <option> ima value="" jer necemo da nam se on selektuje-->
                                <option value="" selected>Choose...</option>
                                <!--ako nije selektovan <option> sa value="customer" onda iskace alert prozor -->
                                <option v-for="(customer, index) in customers" :key="index" :value="customer">
                                    {{customer.firstName}} {{customer.lastName}}
                                </option>
                            </select>
                        </div>

                        <div class="form-group col-md-2">
                            <p>Confirm Sell</p>
                            <button @click="checkIfCustomerSelected()" type="button" class="btn btn-success">Confirm</button>
                        </div>

                        <div class="form-group col-md-2">
                            <p>Product List</p>
                            <router-link :to="{name: 'products'}">
                                <button type="button" class="btn btn-secondary">Cancel</button>
                            </router-link>
                            
                        </div>

                    </div>
                </form>
        </template>

        <!--ako nema proizvoda na lageru - prikazi ovaj template-->
        <template v-else>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Product Quantity Info</h1>
                    <p class="lead">Currently we do not have this product in stock!</p>

                    <router-link :to="{name: 'products'}">
                        <button type="button" class="btn btn-danger">Go Back to Products</button>
                    </router-link>
                </div>
            </div>
        </template>

    </div> 
</template>


<script>

import productService from '../service/ProductService.js';
import customerService from '../service/CustomerService.js';

export default {

    data() {
        return {
            customers: customerService.list(), //lista customera koji se nalazi u select boxu- mi biramo koji customer je kupio koji proizvod preko select boxa
            selectCustomer: '', //selektujemo customera - ovo stavljamo u v-model u select tag i po tome trazimo customera(NE SA getElementById)
        }
    },

    //computed fnc je kao i properti
    computed: {
        //trazimo product preko njegovog id, koristimo fnc find() iz CustomerService.js
        product() {
            return productService.find(this.$route.params.id);
        }
    },

    //fnc
    methods: {
        //ovu fnc smo pozvali u 'Confirm' dugmetu <button @click="checkIfCustomerSelected()">
        checkIfCustomerSelected() {

            //ako nije selektovan customer - proverava se pomocu ":value="customer" - MORAMO BINDOVATI VALUE! inace nece prepoznati customera
            if(!this.selectCustomer) {
                return alert('You must select the customer!'); //vrati alert
            }
            // console.log(selectCustomer);

        
            customerService.addProductToCustomer(this.selectCustomer, this.product); //dodaj tom customeru(this.selectCustomer) taj proizvod(this.product)
            productService.decrement(this.product); //dekrementiraj quantity na lageru za taj proizvod(this.product)
        },
    },
}
</script>
