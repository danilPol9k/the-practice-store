class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render()
    }
    handlerOpenFavouritesPage() {
        favouritesPage.render()
    }

    render(count) {
        const html = `
                <a href="favourites.html"><img src="/image/heart (1) 1.png" onclick="headerPage.handlerOpenFavouritesPage()"></a>
                <a href="cart.html"><img src="/image/shopping-bag (1) 1.png" onclick="headerPage.handlerOpenShoppingPage()"><span class="cart_counter"">${count}</span></a>
        `

        root_header.innerHTML = html
    }
}

const headerPage = new Header()

const productsStore = localStorageUtil.getProducts()
const productsFStore = localStorageUtilF.getProductsF()
headerPage.render(productsStore.length)