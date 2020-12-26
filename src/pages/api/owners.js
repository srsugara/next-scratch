// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const owners = [
    { 
        name: 'Syauqi',
        vehicle: 'car',
        detail: 'Sebuah mobil tipe sport'
    },
    { 
        name: 'Syauqi',
        vehicle: 'bike',
        detail: 'United miami 4.0'
    },
    { 
        name: 'Salis',
        vehicle: 'motorcycle',
        detail: 'Honda genio black authentic'
    }
]

export default (req, res) => {
    const { query } = req
    res.statusCode = 200;
    if (Object.keys(query).length > 0) {
        const filterOwner = owners.filter(val => val.name === query.name && val.vehicle === query.vehicle);
        res.json(filterOwner);
    }
    res.json(owners)
  };
  