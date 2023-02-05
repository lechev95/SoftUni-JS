function solve(input){
    let number = Number(input[0]);
    let discount = number*7.61*0.18;
    let result = number*7.61 - discount;

    console.log(`The final price is: ${result} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

solve(["550"]);