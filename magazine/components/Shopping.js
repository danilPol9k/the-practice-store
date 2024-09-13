class Shoping {

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''

        catalog.forEach(({ id, img, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <div class="shop__product">
                <img src="${img}">
                <p>${name}</p>
                <p class="shop__price">${price}₽</p>
                </div>           
                `
            }
        })

        const html = `
        <div class="shop-container"
        <div class="shop__wrapper">
        ${htmlCatalog}
        </div>
        </div>
        `
        root_shopping.innerHTML = html
    }
}

const shoppingPage = new Shoping()
shoppingPage.render()