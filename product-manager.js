import { ProductClient } from './product-client';

export class ProductManager {
    async getProductToManage(id) {
        const productClient = new ProductClient();
        const productToManage = await productClient.getById(id)
            .catch(err => alert(err));
        return productToManage;
    }
}