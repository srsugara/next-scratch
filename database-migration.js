const sqlite = require('sqlite')

async function setup() {
    const db = await sqlite.open('./mydb.sqlite')
    await db.migrate({force: 'last'})

    const people = await db.all('SELECT * FROM Person')
    console.log('All Person', JSON.stringify(people, null, 2))

    const vehicles = await db.all('SELECT * FROM Vehicle')
    console.log('All Vehicle', JSON.stringify(vehicles, null, 2))
}

setup()