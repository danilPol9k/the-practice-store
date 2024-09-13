class Favourites {
    
    render() {
        const productsFStore = localStorageUtilF.getProductsF()
        let htmlCatalog = ''

        catalog.forEach(({ id, img, name, price }) => {
            if (productsFStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <div class="favourites__product">
                <img src="${img}">
                <p>${name}</p>
                <p class="favourites__price">${price}₽</p>
                </div>           
                `
            }
        })

        const html = `
        <div class="favourites-container"
        <div class="favourites__wrapper">
        ${htmlCatalog}
        </div>
        </div>
        `
        root_favourites.innerHTML = html
    }
}

const favouritesPage = new Favourites()
favouritesPage.render()