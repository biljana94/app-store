<template>
    <div class="row justify-content-md-center">

        <!--FORMA ZA UNOS CUSTOMERA NOVOG-->
        <form @submit.prevent="addNewCustomer()">
            <p class="text-muted">Customer Form</p>
            <div class="form-group row">
                <label>First Name</label>
                <input v-model="newCustomer.firstName" class="form-control" type="text" placeholder="Enter first name">
            </div>

            <div class="form-group row">
                <label>Last Name</label>
                <input v-model="newCustomer.lastName" class="form-control" type="text" placeholder="Enter last name">
            </div>

            <div class="form-group row">
                <label>Email</label>
                <input v-model="newCustomer.email" class="form-control" type="text" placeholder="Enter email">
            </div>

            <button type="submit" class="btn btn-primary">Add contact</button>
        </form>

    </div>
</template>


<script>

import customerService from '../service/CustomerService.js'; //importujemo CustomerService

export default {
    data() {
        return {
            newCustomer: {},
        }
    },

    methods: {
        //fnc koja poziva fnc iz CustomerService.js (add(customer))
        addNewCustomer() {
            customerService.add(this.newCustomer);
            this.newCustomer = {};

        }
    }
}
</script>
