function solve(input){
    let dogFood = Number(input[0]);
    let otherFood = Number(input[1]);
    let result = dogFood*2.5 + otherFood*4;
    console.log(result);
}

solve(["5","4"]);