function netSalary(){
    let basicSalary = prompt('input basic salary'); // prompt's user to input monthly basic salary //
    let benefits = prompt ('input salary benefits'); // prompt's user to input monthly benefits //
    basicSalary = Number(basicSalary); // created number objects using number constructor //
    benefits = Number(benefits); // created number objects using number constructor //
    let grossSalary // declared grossSalary variable using let //
    let netSalary // declared netSalasry variable using let //
    const shif = 2.75; // declared shif variable using const //
    const housingLevy = 1.5; // declared housingLevy variable using const //
    const nssf = 6; // declared nssf variable using const //
    grossSalary = (basicSalary + benefits); // calculates user's monthly gross salary //
    if (grossSalary < 24000) { // used if ... else .. if control structure to calculate net salry //
        netSalary = ((grossSalary) - ((grossSalary * nssf/100 ) + (grossSalary * housingLevy/100) + (grossSalary * shif/100) + (grossSalary * 0.1)));
    } else if (grossSalary >= 24001 && grossSalary <= 32,333) {
        netSalary = ((grossSalary) - ((grossSalary * nssf/100 ) + (grossSalary * housingLevy/100) + (grossSalary * shif/100) + (grossSalary * 0.25)));
    } else if(grossSalary >= 32334 && grossSalary <= 500000) {
        netSalary = ((grossSalary) - ((grossSalary * nssf/100 ) + (grossSalary * housingLevy/100) + (grossSalary * shif/100) + (grossSalary * 0.30)));
    } else if(grossSalary >= 500001 && grossSalary <=800000){
        netSalary = ((grossSalary) - ((grossSalary * nssf/100 ) + (grossSalary * housingLevy/100) + (grossSalary * shif/100) + (grossSalary * 0.325)));
    } else if(grossSalary >= 800001) {
        netSalary = ((grossSalary) - ((grossSalary * nssf/100 ) + (grossSalary * housingLevy/100) + (grossSalary * shif/100) + (grossSalary * 0.35)));
    }
    return netSalary //returned net salary as my output //

}
alert (netSalary()) // used alert to display a display box //
