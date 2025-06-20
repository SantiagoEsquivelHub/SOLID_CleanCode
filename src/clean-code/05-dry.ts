type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady(): boolean {

        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((this[key] as string).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((this[key] as number) <= 0) throw Error(`${key} is empty`);
                    break;
                default:
                    throw Error(`${key} is not valid`);
            }
        }
        return true;
    }

    toString() {

        // No Dry
        // if (this.name.length <= 0) throw Error('name is empty');
        // if (this.price <= 0) throw Error('price is empty');
        // if (this.size.length <= 0) throw Error('size is empty');

        if (!this.isProductReady) return;

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(
    () => {
        const bluePants = new Product('Blue Large Pants', 1000, 'S');
        console.log(bluePants.toString())
    }
)()