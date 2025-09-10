function carSpeed(){
    let speed = prompt ('input speed') //User input's car's speed //
    speed = Number(speed) // created number objects using number constructor //
    const speedLimit = 70; //declared variable speed limit using const //
    let points // declared points variable using let //
    if (speed < speedLimit){     // used if ... else .. if control structure to calculate points system //
        return 'ok';
    } else if (speed > speedLimit){
        points = ((speed - speedLimit) / (5))
    }
    if (points > 12){
        return "license Suspended"
    }
    return points 
}    
alert(carSpeed()) // used alert to display an alert display box //

