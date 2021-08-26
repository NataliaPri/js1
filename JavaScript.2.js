function countStroke() {
    var result = prompt(stateOfGame.position, 0);
    var gameIsRunning = true;

    var stroke = [];
    stroke.push(result);
    while (gameIsRunning) {
        if (answer[0]) {
            var history = prompt("Congratulate! You won.Enter the number of the move to find out its result (0 find out all hisory)");
            if (history > 0) {
                history -= 1;
                alert("The result of the move: " + stroke[history]);
            }
            else {
                a = [];
                b = 0;
                for (i = 1; i < stroke.length; i++) {
                    b++;
                    c = "Strock " + i + "Result: " + stroke[b] + '\r\n';
                    a.push(c);
                }
                alert(a.join(''));
            }
            gameIsRunning = false;
        };
    }
}