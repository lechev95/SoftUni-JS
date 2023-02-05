function solve(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litres = Number(input[2]);
    let discount = Number(input[3]/100);

    let result = pens*5.8+markers*7.2+litres*1.2;
    result -= result*discount;
    console.log(result);
}

solve(["2","3","4","25"]);