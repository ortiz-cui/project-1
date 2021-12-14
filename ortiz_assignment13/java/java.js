var boxes = document.querySelectorAll('.box');

var announcment = document.getElementById('announcment');

announcment.innterHTML = "Player One's Turn";

const restart = document.getElementById("restart");

var gameComplete = false;

var letter = 'X';

var turnCounter = 0;

function turnCountert() {
  turnCounter++;
}

function check() {
  if (turnCounter > 4) {
    win(boxes[0].innerHTML, boxes[1].innerHTML, boxes[2].innerHTML, boxes[0].id, boxes[1].id, boxes[2].id);

    win(boxes[3].innerHTML, boxes[4].innerHTML, boxes[5].innerHTML, boxes[3].id, boxes[4].id, boxes[5].id);

    win(boxes[6].innerHTML, boxes[7].innerHTML, boxes[8].innerHTML, boxes[6].id, boxes[7].id, boxes[8].id);

    win(boxes[0].innerHTML, boxes[3].innerHTML, boxes[6].innerHTML, boxes[0].id, boxes[3].id, boxes[6].id);

    win(boxes[1].innerHTML, boxes[4].innerHTML, boxes[7].innerHTML, boxes[1].id, boxes[4].id, boxes[7].id);

    win(boxes[2].innerHTML, boxes[5].innerHTML, boxes[8].innerHTML, boxes[2].id, boxes[5].id, boxes[8].id);

    win(boxes[0].innerHTML, boxes[4].innerHTML, boxes[8].innerHTML, boxes[0].id, boxes[4].id, boxes[8].id);

    win(boxes[2].innerHTML, boxes[4].innerHTML, boxes[6].innerHTML, boxes[2].id, boxes[4].id, boxes[6].id);
  }
}

function win (a, b, c, d, e, f) {
  if ((a.length == 1) && (a == b) && (b == c)) {
  gameComplete = true;

  document.getElementById(d).style.color = '#345EBC';
  document.getElementById(e).style.color = '#345EBC';
  document.getElementById(f).style.color = '#345EBC';

  announcment.innerHTML = a + "'s are the Winner!";
  announcment.style.color = '#345EBC';

  }
}

function play() {
  for (let i = 0; i < boxes.length; i++) {
    boxes [i].addEventListener('click', function() {
      
      if (gameComplete == false) {
        turnCountert();

        if (turnCounter % 2 == 0) {
          letter = '0';
          this.innerHTML = letter;
          announcment.innerHTML = "Player One's Turn";

        }

        else {
          letter = 'X'
          this.innerHTML = letter;
          announcment.innerHTML = "Player Two's Turn";

        }
        
        check(); 

        if ((turnCounter == 9) && (gameComplete == false)) {
          gameComplete = true;
          announcment.innerHTML = "Draw Game!";
          announcment.style.color = '#779ECB';
        }
      }
    }, {once: true});
  }
}

play();

const restartGame = () => {
  (player = "O"), (game_over = false);
  board = [...Array(9)].fill("x");
  boxes.forEach((ele) => {
    ele.innerHTML = "";
  });
  info_box.innerHTML = "Turn:X";
};
restart.addEventListener("click", restartGame);

