var ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var suits = ["c", "d", "h", "s"];
var target = 24;
var ops = [" + ", " - ", " * ", " / "];

function deal() {
  // Clear solutions textarea
  document.getElementById("solutionsText").value = "";

  // Create deck
  var deck = [];
  var x = 0;
  for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      var temp = ranks[i] + suits[j];
      deck[x++] = temp;
    }
  }

  // Draw 4 cards from deck
  var uniqueCard = [];
  for (var k = 1; k <= 4; k++) {
    var card;
    do {
      card = deck[Math.floor(Math.random() * deck.length)];
    } while (uniqueCard.indexOf(card) != -1);
    if (uniqueCard.indexOf(card) == -1) {
      uniqueCard.push(card);
      document.getElementById("n" + k).value = card;
    } else {
      document.getElementById("n" + k).value = "ERROR: Can't get a unique card";
    }
  }
};

function solve() {
  // Clear solutions textarea
  document.getElementById("solutionsText").value = "";

  var nums = getValues();
  var solutions = [];
  var found = 0;

  // i,j,k,l are indices that show the the integers are being used
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (j == i) {
        continue;
      }
      for (var k = 0; k < 4; k++) {
        if (k == i || k == j) {
          continue;
        }
        var l = 1 + 2 + 3 - i - j - k;
        // p,q,r are operators
        for (var p = 0; p < ops.length; p++) {
          for (var q = 0; q < ops.length; q++) {
            for (var r = 0; r < ops.length; r++) {
              if (found >= 10) {
                break;
              }
              var answerstr = nums[i] + ops[p] + nums[j] + ops[q] + nums[k] + ops[r] + nums[l];
              var answerint = eval(answerstr);
              if (answerint > 23.99999 && answerint < 24.00001) {
                found += 1;
                solutions.push(answerstr);
              }
            } // endfor r
          } // endfor q
        } // endfor p
      } // endfor k
    } // endfor j
  } // endfor i
  displaySolutions(solutions);
};

function displaySolutions(solutions) {
  var n = solutions.length;
  var str = "";
  if (n == 0) {
    str = "Unable to find any solutions. Sorry! :(";
  } else if (n >= 10) {
    str = "First 10 solutions found:";
  } else {
    str = "Found " + n + " solutions:";
  }
  for (var i = 0; i < n; i++) {
    str += "\n" + solutions[i];
  }
  document.getElementById("solutionsText").value += str;
};

function getValues() {
  var nums = [];
  for (var i = 1; i <= 4; i++) {
    var temp = document.getElementById("n" + i);
    if (temp != null) {
      var numb = temp.value.match(/\d/g);
      nums[i-1] = numb.join("");
    }
  }
  return nums;
}
