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
                        <router-link :to="{name: 'latest-purchases', params: {id: customer.id}}">
                            {{customer.firstName}}
                            {{customer.lastName}}
                        </router-link>
                    </td>
                
                    <td>{{customer.email}}</td>

                    <td>
                        <button class="btn btn-danger" @click="removeCustomer(customer)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <router-link :to="{name: 'add-customer'}">
            <button class="btn btn-primary">Add Customer</button>
        </router-link>


        <!-- <LatestPurchases :customer="routeCustomer" /> -->
        
    </div>
</template>


<script>

import customerService from '../service/CustomerService.js'; //importujemo CustomerService
import LatestPurchases from './LatestPurchases.vue';

export default {

    components: {
        LatestPurchases
    },

    data() {
        return {
            customers: customerService.list()
        }
    },

    methods: {
        //ova metoda se pokrece kad se pokerene metoda uz CustomerService.js (remove(customer))
        removeCustomer(customer) {
            customerService.remove(customer);
        }
    },


}
</script>
