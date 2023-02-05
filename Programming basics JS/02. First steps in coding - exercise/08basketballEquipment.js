function solve(input){
    let tax = Number(input[0]);
    let shoes = tax - tax*0.4;
    let clothes = shoes-shoes*0.2;
    let ball = clothes*0.25;
    let other = ball*0.2;
    let result = tax+shoes+clothes+other+ball;
    console.log(result);
}

solve(["365"]);