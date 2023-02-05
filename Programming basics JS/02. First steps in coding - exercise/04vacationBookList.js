function solve(input){
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let result = pagesCount/pagesPerHour/daysToRead;
    console.log(result);
}

solve(["212","20","2"]);