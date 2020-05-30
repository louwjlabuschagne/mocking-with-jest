import { ProductClient } from './product-client';
import { ProductManager } from './product-manager';

jest.mock('./product-client');

it('should return the product', async() => {
    const expectedProduct = {
        id: 1,
        name: 'football',
    };
    const productManager = new ProductManager();
    const mockGetById = jest.fn();
    ProductClient.prototype.getById = mockGetById;
    mockGetById.mockReturnValue(Promise.resolve(expectedProduct));

    const result = await productManager.getProductToManage(1);

    expect(result.name).toBe('football'); // It passes!
});