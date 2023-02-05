function solve(input){
    let depSum = Number(input[0]);
    let period = Number(input[1]);
    let yearPercent = Number(input[2]);

    let result = depSum+period*((depSum*yearPercent/100)/12);
    console.log(result);
}

solve(["200","3","5.7"]);