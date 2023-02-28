function solve(input){
    let figure = input[0];
    let sideA = Number(input[1]);
    let result;

    if (figure==="square") {
        result = Math.pow(sideA, 2);
    } else if (figure==="circle") {
        result = Math.PI * Math.pow(sideA, 2);
    } else {
        let sideB = Number(input[2]);
        if (figure==="rectangle") {
            result = sideA * sideB;
        } else{
            result = sideA * sideB / 2;
        }
    }

    console.log(result.toFixed(3));
}