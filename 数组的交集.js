
let arr = [
    [1, 2, 3, 4],
    [3, 4, 6],
    [4, 5],
    [4, 5, 8, 9],
    [4, 5, 2, 7],
    [4, 5, 3],
    [4, 5, 0],
];
let n = arr.reduce((a,b)=> a.filter(c => b.includes(c)))
console.log(n)