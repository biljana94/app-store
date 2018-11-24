<template>
    <div class="container">
        <h5>Customer Details</h5>

        <ul class="list-group list-group-flush">
            <li class="list-group-item list-group-item-info"><b>First Name:</b> {{customer.firstName}}</li>
            <li class="list-group-item list-group-item-info"><b>Last Name:</b> {{customer.lastName}}</li>
            <li class="list-group-item list-group-item-info"><b>Email:</b> {{customer.email}}</li>
            <li class="list-group-item list-group-item-info"><b>Products list:</b> {{customer.products}}</li>
        </ul>
        <br>

        
        <!--router-link koji vodi na 'customers' rutu, rutu smo imenovali u main.js-->
        <router-link :to="{name: 'customers'}">
            <button type="button" class="btn btn-primary">All Customers</button>
        </router-link>

    </div>
</template>


<script>

import customerService from '../service/CustomerService.js'; //importujemo CustomerService

export default {

    //computed fnc je kao i properti
    computed: {
        //trazimo customera preko njegovog id, koristimo fnc find() iz CustomerService.js
        customer() {
            return customerService.find(this.$route.params.id);
        }
    }
}
</script>
