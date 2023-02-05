function solve(input){
    let chicken = Number(input[0])*10.35;
    let fish = Number(input[1])*12.4;
    let vegan = Number(input[2])*8.15;
    let desert = (chicken+fish+vegan)*0.2;
    let result = chicken+fish+vegan+desert+2.5;
    console.log(result);

}

solve(["2","4","3"]);