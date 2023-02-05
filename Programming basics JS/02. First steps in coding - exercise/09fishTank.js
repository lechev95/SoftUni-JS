function solve(input)
{
    let volume = Number(input[0])*Number(input[1])*Number(input[2]);
    let litres = volume/1000;
    let percentage = Number(input[3])/100;
    let result = litres * (1 - percentage);
    console.log(result);
}

solve(["85 ",
"75 ",
"47 ",
"17 "]
);