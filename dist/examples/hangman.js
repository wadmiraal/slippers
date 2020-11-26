// Generated by CoffeeScript 2.5.1
var app, canvas, guessed, headDrawn, i, j, leftArmDrawn, leftLegDrawn, len, letter, letters, mistake, rightArmDrawn, rightLegDrawn, torsoDrawn, word,
  indexOf = [].indexOf;

app = App({
  width: 800,
  height: 400
}, LineOfText({
  text: "Letters to guess",
  size: 20,
  bold: true,
  font: "sans-serif"
}), Keyboard({
  up: function(key) {
    var j, len, ref, results, section;
    if (/^[a-z]$/i.test(key)) {
      if (indexOf.call(word, key) < 0) {
        return mistake();
      } else {
        if (guessed[key] === false) {
          guessed[key] = true;
          ref = letters[key];
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            section = ref[j];
            results.push((function(section) {
              return section.append(LineOfText({
                text: key.toUpperCase(),
                bold: true,
                font: "sans-serif"
              }));
            })(section));
          }
          return results;
        }
      }
    }
  }
}), canvas = Canvas({
  left: 390,
  top: 10,
  width: 400,
  height: 380,
  lineWidth: 4,
  color: black
}, moveTo(390, 370), drawLine(10, 370), moveTo(30, 370), drawLine(30, 10), moveTo(10, 10), drawLine(250, 10), moveTo(30, 100), drawLine(100, 10), moveTo(220, 10), drawLine(220, 50)));

letters = {};

guessed = {};

word = "slippers".split("");

for (i = j = 0, len = word.length; j < len; i = ++j) {
  letter = word[i];
  (function(letter, i) {
    var section;
    guessed[letter] = false;
    section = Section({
      borderWidth: 2,
      borderColor: black,
      height: 20,
      width: 20,
      top: 50,
      align: "center",
      left: 5 + (i * 30)
    });
    app.append(section);
    if (letters[letter]) {
      return letters[letter].push(section);
    } else {
      return letters[letter] = [section];
    }
  })(letter, i);
}

headDrawn = false;

torsoDrawn = false;

leftArmDrawn = false;

rightArmDrawn = false;

leftLegDrawn = false;

rightLegDrawn = false;

mistake = function() {
  if (headDrawn === false) {
    headDrawn = true;
    return canvas.add(drawCircle(220, 80, 30));
  } else if (torsoDrawn === false) {
    torsoDrawn = true;
    return canvas.add(moveTo(220, 110), drawLine(220, 220));
  } else if (leftArmDrawn === false) {
    leftArmDrawn = true;
    return canvas.add(moveTo(220, 120), drawLine(180, 200));
  } else if (rightArmDrawn === false) {
    rightArmDrawn = true;
    return canvas.add(moveTo(220, 120), drawLine(260, 200));
  } else if (leftLegDrawn === false) {
    leftLegDrawn = true;
    return canvas.add(moveTo(220, 220), drawLine(180, 280));
  } else if (rightLegDrawn === false) {
    rightLegDrawn = true;
    canvas.add(moveTo(220, 220), drawLine(260, 280));
    return setTimeout(function() {
      return alert("You lost!");
    }, 0);
  }
};
