const accountId = 144553
let accountEmail = "anubhav@google.com"
var accountPassword = "12345"
accountCity = "Varanasi"
let accountState;

// accountId = 123 // It will show error, not allowed, const cannot be changed
console.log(accountId);

accountEmail = "anuv@gmail.com"
console.log(accountEmail);

/*
    Prefer not to use var becoz of issue in block scope and functional scope
*/
accountPassword = "0000"
console.log(accountPassword);

accountCity = "Ballia"
console.log(accountCity);

// Tabular Form
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])