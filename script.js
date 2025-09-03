
const sum = (sumArray) => {
    let totalValue = 0;
    
    for(let i in sumArray) {
        totalValue += sumArray[i];
    }
    
    return totalValue;

};

console.log(sum([1, 2, 3]));
console.log(sum([10, 20, 30, 40]));


let a = [1, 2, 3];
let max = a[0];

a.forEach(num => {
    if (num > max) {
        max = num;

    }
});

console.log(max);

const countVowels = (s) => {
    const vowels = 'aeiouæøåÅ';
    let count = 0;

    for (const letters of s){
        if (vowels.includes(letters)){
            count++;

        }
    }

    return count;
};

const s = 'Åge bøjede syv fine rør ud.';
console.log(countVowels(s));