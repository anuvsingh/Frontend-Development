let jsonRes =
    '{ "fact": "A female cat will be pregnant for approximately 9 weeks or between 62 and 65 days from conception to delivery.", "length": 110 }'

// Accessing data
let validRes = JSON.parse(jsonRes)
console.log(validRes)
console.log(validRes.fact)