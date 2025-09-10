function getGrades(){
    let grade = prompt ('input marks') // prompt's user to input user grades //
    grade = Number(grade);  // created number objects using number constructor //
    if (grade >= 79 && grade <= 100) { // use of ... else if to get grades //
        return 'A';
    } else if (grade >= 60 && grade <= 78) {
        return 'B';
    } else if (grade >= 49 && grade <= 59) {
        return 'C';
    } else if (grade >= 40 && grade < 49) {
        return 'D';
}    else if (grade  < 40 && grade > 0){
        return 'E';
}
}
alert (getGrades()) // displays an alert box to display final students grades // 
