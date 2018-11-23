const customers = [
    {id: 1, firstName: 'Milica', lastName: 'Mihajlovic', email: 'milica@yahoo.com', products: []},
    {id: 2, firstName: 'Ivana', lastName: 'Zonic', email: 'ivana@yahoo.com', products: []},
    {id: 3, firstName: 'Biljana', lastName: 'Jelaca', email: 'bilja@yahoo.com', products: []}
];

let nextId = 4;

//izlistavanje customera
class CustomerService {
    list() {
        return customers;
    }

    find(id) {
        return customers.find(customer => customer.id == id);
    }

    add(customer) {
        customer.id = nextId;
        customers.push(customer);
        nextId++;
    }

    remove(customer) {
        customers.splice(customers.indexOf(customer), 1);
    }

    addProductToCustomer() {
        customer.products.push(product);
    }
}


const customerService = new CustomerService();
export default customerService;
