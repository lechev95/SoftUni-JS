function solve(input){
    let bag = (Number(input[0])+2)*1.5;
    let paint = (Number(input[1])*1.1)*14.5;
    let water = Number(input[2])*5;
    let work = Number(input[3]);

    let result = bag+paint+water+0.4;
    result += (result*0.3)*work;
    console.log(result);
}

solve(["10","11","4","8"]);