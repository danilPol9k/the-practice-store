class Products {
    constructor() {
        this.classNameActive = 'offers__btn_active'
        this.labelAdd = 'Добавить в корзину'
        this.labelRemove = 'Удалить из корзины'
        this.classNameActiveF = 'offers__btn_activef'
        this.labelAddF = 'Добавить в избранное'
        this.labelRemoveF = 'Удалить из избранного'
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id)

        if (pushProduct) {
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemove 
        } else {
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelAdd 
        }

        headerPage.render(products.length)
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''

        catalog.forEach(({ id, img, name, price, oldprice }) => {
            let activeClass = ''
            let activeText = ''
            let activeClassF = ''
            let activeTextF = ''

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd 
            } else {
                activeClass = ' ' + this.classNameActive 
                activeText = this.labelRemove 
            }

            htmlCatalog += `
            <div class="offers__element2">
            <a href="product-card.html"><img src="${img}"></a>
            <a href="product-card.html" class="offers__name2">${name}</a>
            <p class="offers__price2">${price} руб.<span class="offers__price__old2">${oldprice} руб.</span></p>
            <button class="offers__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
            </div>
            `
        })
        // <button class="offers__btnf${activeClassF}" onclick="productsFPage.handleSetLocationStorageF(this, '${id}')">${activeTextF}</button>


        const html = `
        <div class="offers__wrapper2">
        ${htmlCatalog}
        </div>
        `

        root_products.innerHTML = html
    }
}

const productsPage = new Products()
productsPage.render()