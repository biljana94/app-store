<template>
    <div class="container">
        <h1>Customers</h1>

        <!--IZLISTAVANJE CUSTOMERA-->
        <table class="table table-dark">
            <thead>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Remove Customer</th>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customers" :key="index">
                    <td>
                        {{customer.firstName}}
                        {{customer.lastName}}
                    </td>
                
                    <td>{{customer.email}}</td>

                    <td>
                        <button class="btn btn-danger" @click="removeCustomer(customer)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>

import customerService from '../service/CustomerService.js'; //importujemo CustomerService

export default {
    data() {
        return {
            customers: customerService.list()
        }
    },

    methods: {
        removeCustomer(customer) {
            customerService.remove(customer);
        }
    }
}
</script>
