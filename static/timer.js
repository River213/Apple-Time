var start = new Date;
var intervalID;
var sprintTime = 2;
var breakTime = 1;
var sprintAmount = 3;
var sprintCounter = 0;
var nextMode = 0; // 0-not started 1-sprint 2-break 3-rate

function pretty_time_string(num) {
    return ( num < 10 ? "0" : "" ) + num;
}

function startTimer(maxTime){
    $('#timer').text("00:00 / " + pretty_time_string(maxTime) + ":00");
    start = new Date;
    intervalID = setInterval(function() {
        var total_seconds = (new Date - start) / 1000;
        var minutes = Math.floor(total_seconds / 60);
        total_seconds = total_seconds % 60;
        var seconds = Math.floor(total_seconds);

        minutes = pretty_time_string(minutes);
        seconds = pretty_time_string(seconds);

        var currentTimeString = minutes + ":" + seconds + " / " + pretty_time_string(maxTime) + ":00";
        $('#timer').text(currentTimeString);
    }, 1000);
}

function changeMode(){
    //start
    if(nextMode == 0){
        nextMode = 2
        $('#operatingTimerButton').text("Break");
        clearInterval(intervalID)
        sprintCounter = sprintCounter + 1;
        $('#timerDiv').show();
        $('#timerTitle').text("Sprint!");
        $('#sprintCounter').text("Sprint number - " + sprintCounter);
        startTimer(sprintTime);
    }
    // sprint
    else if(nextMode == 1){
        nextMode = 2
        $('#operatingTimerButton').text("Break");
        clearInterval(intervalID)
        sprintCounter = sprintCounter + 1;
        $('#timerTitle').text("Sprint!");
        $('#sprintCounter').text("Sprint number - " + sprintCounter);
        startTimer(sprintTime);
    }
    // rate
    else if(nextMode == 2){
        nextMode = 3
        $('#operatingTimerButton').text("Rate");
        clearInterval(intervalID)
        $('#ratingDiv').show();
        $('#timerTitle').text("Rate");
        if(sprintCounter >= sprintAmount){
            nextMode = 4;
        }
    }
    // break
    else if(nextMode == 3){
        nextMode = 1
        $('#operatingTimerButton').text("Sprint");
        clearInterval(intervalID)
        $('#ratingDiv').hide();
        $('#timerTitle').text("Break");
        startTimer(breakTime);
    }
    // finish
    else if(nextMode == 4){
        clearInterval(intervalID)
        $('#timerDiv').hide();
        $('#ratingDiv').hide();
        $('#timerTitle').text("Finito!");
        $('#operatingTimerButton').hide();
    }
}

$("#operatingTimerButton").click(changeMode);