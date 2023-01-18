class ProductManager {


    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock, 
        }
        
					

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    }


    getProductById = (idProduct) => {
        const productIndex = this.products.findIndex(e=>e.id === idProduct);

        if (productIndex === -1) {
            console.log('Not found');
            return;
        }

       
    }
}

const manejadorProducts = new ProductManager();
manejadorProducts.addProduct('Uno ','Descripcion de prueba', 50, 'No hay imagen', 'A365', 10);
manejadorProducts.getProductById(1, 2)
manejadorProducts.addProduct('Dos ','Descripcion de prueba', 100, 'No hay imagen' , 'A465', 10);
console.log(manejadorProducts.getProducts());