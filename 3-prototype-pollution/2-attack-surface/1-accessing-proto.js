const alice = { user: "alice", phone: { mobile: 98765432, home: 23456789 } }
const bob = { user: "bob", phone: { mobile: 98769786, home: 23452345 }, isAdmin: 1 }
function isAdmin(user) { return Boolean(user.isAdmin) }
function updateDetails(user, field, subfield, value) {
    if (field != "isAdmin") user[field][subfield] = value; }
console.log(isAdmin(alice), isAdmin(bob))  // false true
updateDetails(alice, "phone", "mobile", 22334455)  // normal user input
updateDetails(alice, "__proto__", "isAdmin", 22334455)  // malicious user input 
console.log(isAdmin(alice), isAdmin(bob))  // true true
const cathy = { user: "cathy", phone: { mobile: 98766666, home: 23455555 } }
console.log(isAdmin(cathy))  // true

