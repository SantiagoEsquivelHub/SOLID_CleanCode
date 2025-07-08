(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        getProduct( id: number ): void {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }


        saveProduct( product: Product ): void {
            console.log('Guardando en base de datos', product );
        }

    }

    class EmailService {

        sendEmail(): void {
            console.log('Enviando correo a los clientes');
        }

    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private emailService: EmailService;

        constructor(productService: ProductService, emailService: EmailService) {
            this.productService = productService;
            this.emailService = emailService;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
            this.emailService.sendEmail();
        }
    
    }
    
    class CartBloc {
    
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }

    // Inyección de dependencias
    const productService = new ProductService();
    const emailService = new EmailService();

    const productBloc = new ProductBloc(productService, emailService);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();