const data = JSON.stringify([
    {id : 'A1', name: 'Vaccum Cleaner', rrp:'99.99', 
        info:'The worst vaccum in the world.'},
    {id : 'A2', name:'Leaf Blower', rrp: '303.33',
        info:'This product blow your socks off.'},
    {id : 'A3', name:'Chocolate Bar', rrp:'22.40', 
        info:'Delicious overpriced chocolate.'}
])

const server = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-type', 'application/json')
    res.end(data)
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
})