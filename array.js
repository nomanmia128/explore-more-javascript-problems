const country = 'bangladesh';
const age = 32;
const isIndpendent = true;
const student = {id: 222, class: 11, name: 'Agun'};
const friends = [12, 13, 23, 24, 43, 54];
function add(num1, num2){
    return num1 +num2;
} 

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndpendent);
console.log(typeof student);
// check array using array.isarray
console.log(Array.isArray(friends));
console.log(typeof add);

// ----------------
console.log(friends.includes(24));
console.log(friends.includes(25));

if(friends.indexOf(342) !== -1){

}

// Concat :
const newFriendAge = [12, 23, 45, 65];
const allFriends = newFriendAge.concat(friends);
console.log(allFriends);
