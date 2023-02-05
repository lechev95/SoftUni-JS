function project(input){
    let name = input[0];
    let calc = input[1]*3;
    console.log(`The architect ${name} will need ${calc} hours to complete ${input[1]} project/s.`);
}

project(["George", 7]);