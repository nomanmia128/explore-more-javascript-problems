/*
fixt: per item wood requirements
1. chair ---> 3 cft
2. table ---> 10 cft
3. bad ----> 50 cft 

very: quantity 
*/
// function woodCalculator(chairQuntity, tableQuntity, badQuntity){
//     const perChairWood = 3; 
//     const perTableWood = 10; 
//     const perBedWood = 50;

//      const chairWood = chairQuntity * perChairWood;
//      const tableWood = tableQuntity * perTableWood;
//      const badWood = badQuntity * perBedWood;

//      const totalWood = chairWood + tableWood + badWood;
//      return totalWood;
     
//     //  console.log(chairQuntity, tableQuntity, badQuntity);

// }

// const totalWood = woodCalculator(1, 1, 1);
// console.log('total wood required:', totalWood);

function woodCalculator(chairQuntity, tableQuntity, badQuntity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuntity * perChairWood;
    const tableWood = tableQuntity * perTableWood;
    const badWood = badQuntity * perBedWood;
    
    const totalWood = chairWood + tableWood + badWood;
    return totalWood;
}

const totalWood = woodCalculator(2, 4, 2);
console.log('total wood requaret:', totalWood);