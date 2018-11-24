const products = [
    {id: '1', title: 'Jakna', quantity: '15'},
    {id: '2', title: 'Cipele', quantity: '20'},
    {id: '3', title: 'Kapa', quantity: '30'},
    {id: '4', title: 'Rukavice', quantity: '30'},
    {id: '5', title: 'Sal', quantity: '20'},
    {id: '6', title: 'Trenerka', quantity: '15'},
    {id: '7', title: 'Majica dugi rukav', quantity: '25'},
    {id: '8', title: 'Majica kratki rukav', quantity: '25'},
    {id: '9', title: 'Patike', quantity: '20'},
];


let nextId = 10;


class ProductService {
    //izlistavanje proizvoda
    list() {
        return products;
    }

    //filtriranje proizvoda po nazivu
    // find(title) {
    //     return products.filter(product => product.title == title);
    // }
}


const productService = new ProductService(); //instanca klase ProductService
export default productService; //exportujemo konstantu, i onda mozemo da je importujemo gde nam treba nesto vezano za proizvod
