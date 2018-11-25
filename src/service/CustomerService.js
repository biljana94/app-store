const customers = [
    {id: 1, firstName: 'Boris', lastName: 'Balac', email: 'boris@yahoo.com', products: []},
    {id: 2, firstName: 'Ivana', lastName: 'Zonic', email: 'ivana@yahoo.com', products: []},
    {id: 3, firstName: 'Milica', lastName: 'Mihajlovic', email: 'milica@yahoo.com', products: []},
    {id: 4, firstName: 'Biljana', lastName: 'Jelaca', email: 'bilja@yahoo.com', products: []},
    
];

let nextId = 4;

//klasa CustomerService koja sadrzi fnc koje cemo koristiti u komponentama u kojima nam treba, a koje su vezane za customera
class CustomerService {
    //izlistavanje customera
    list() {
        return customers;
    }

    //nadji customera po 'id'
    find(id) {
        return customers.find(customer => customer.id == id);
    }

    //dodaj novog customera
    add(customer) {
        customer.id = nextId;
        customers.push(customer);
        nextId++;
    }

    //izbrisi customera
    remove(customer) {
        customers.splice(customers.indexOf(customer), 1);
    }

    //dodaj proizvod u niz proizvoda Customera
    addProductToCustomer(customer, product) {
        customer.products.push(product.title);
    }
}


const customerService = new CustomerService();
export default customerService;
