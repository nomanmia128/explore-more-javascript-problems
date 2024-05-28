// const names = ['abul', 'babul', 'dabul', 'abul', 'chabul', 'rabul', 'babul', 'mabul', 'babul', 'abul', 'chabul', 'nabul'];

// function removeDuplicate(names){
//     const unique = [];
//     for(let i = 0; i < names.length; i++){
//         const name = names[i];
//         if(unique.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);
// console.log(names);

const names = ['abul', 'babul', 'dabul', 'abul', 'chabul', 'rabul', 'babul', 'mabul', 'babul', 'abul', 'chabul', 'nabul'];


function removeDuplicate(names){
         const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
