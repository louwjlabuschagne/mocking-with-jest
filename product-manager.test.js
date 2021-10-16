const product_manager = require("./product-manager")
test("Dummy Test", () => {
    expect(3).toBe(3)
})

test("Another Dummy Test", () => {
    expect(4).toBe(4)
})

// @ponicode
describe("getProductToManage", () => {
    let inst

    beforeEach(() => {
        inst = new product_manager.ProductManager()
    })

    test("0", async () => {
        await inst.getProductToManage("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
    })

    test("1", async () => {
        await inst.getProductToManage("7289708e-b17a-477c-8a77-9ab575c4b4d8")
    })

    test("2", async () => {
        await inst.getProductToManage("a85a8e6b-348b-4011-a1ec-1e78e9620782")
    })

    test("3", async () => {
        await inst.getProductToManage(undefined)
    })
})
