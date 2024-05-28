const friends = [23, 44, 43, 55, 66, 77, 88, 42, 12];
// const partial = friends.splice(2, 4);
const partial = friends.splice(2, 4, 100, 200, 300);
console.log(partial);
console.log(friends);