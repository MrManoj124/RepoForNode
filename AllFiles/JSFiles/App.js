const populateProducts = async () => {
    const products = document.querySelector('#products')
    products.innerHTML = ''
    const data = [
        {id : 'A1', name: 'Vaccum Cleaner', rrp:'99.99', 
            info:'The worst vaccum in the world.'},
        {id : 'A2', name:'Leaf Blower', rrp: '303.33',
            info:'This product blow your socks off.'},
        {id : 'A3', name:'Chocolate Bar', rrp:'22.40', 
            info:'Delicious overpriced chocolate.'}
    ]
    for(const product of data){
        const item = document.createElement('product-item')
        for (const key of ['name', 'rrp', 'info']){
            const span = document.createElement('span')
            span.slot = key
            span.textContent = product[key]
            item.appenChild(span)
        }
        products.appendChild(item)
    }
}

document.querySelector('#fetch').addEventListener('click',
    async() => {
        await populateProducts()
    })

customElements.define('product-item', class Item extends
HTMLElement{
    constructor(){
        super()
        const itemTmpl = document.querySelector('#item').textContent
        this.attachShadow({mode: 'open'}).appendChild(itemTempl.cloneNode(true))
    }
})