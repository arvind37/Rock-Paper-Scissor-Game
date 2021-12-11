
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice
    humanChoice = yourChoice.id
    console.log(humanChoice);

    botChoice = numberTorps(rpsInt());
    console.log('Computer Choice: ' + botChoice);

   results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    frontEnd(humanChoice, botChoice, message);
}

function rpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberTorps(numbers) {
    return ['rock', 'paper', 'scissors'][numbers];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabases = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    };

    var yourScore = rpsDatabases[yourChoice][computerChoice];
    var computerScore = rpsDatabases[computerChoice][yourChoice];

    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'Tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You Won!', 'color': 'blue'};
    }
}

function frontEnd(humanChoiceImage, botChoiceImage, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanChoiceImage] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
    messageDiv.innerHTML = "<h1 style='color: " +finalMessage['color'] + "; font-size: 60px'> " + finalMessage['message'] + " </h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botChoiceImage] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

    document.getElementById('rock1').remove();
    document.getElementById('paper1').remove();
    document.getElementById('scissors1').remove();

    var humanDiv1 = document.createElement('h1');
    var messageDiv1 = document.createElement('h1');
    var botDiv1 = document.createElement('h1');

    humanDiv1.innerHTML = 'Human Choice';
    messageDiv1.innerHTML = ' ';
    botDiv1.innerHTML = 'Computer Choice';

    document.getElementById('whoclicked').appendChild(humanDiv1);
    document.getElementById('whoclicked').appendChild(messageDiv1);
    document.getElementById('whoclicked').appendChild(botDiv1);

}
