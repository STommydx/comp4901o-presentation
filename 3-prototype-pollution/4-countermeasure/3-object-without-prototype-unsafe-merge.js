function merge(target, source) {
    for (var attr in source) {
        if (typeof(target[attr]) === "object" &&
            typeof(source[attr]) === "object") {
            merge(target[attr], source[attr]);
        } else {
            target[attr] = source[attr];
        }
    }
    return target;
};

const user_input = '{ "course": "COMP4901O", "__proto__": { "isAdmin": true } }'
const alice_info = { user: "alice", phone: { mobile: 98765432, home: 23456789 } }
const alice_academics = Object.create(null)
merge(alice_academics, { gpa: 3.2 })
merge(alice_academics, JSON.parse(user_input))
console.log(alice_info.isAdmin)  // undefined

