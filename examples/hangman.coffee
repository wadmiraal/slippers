word = "slippers".split("");

app = App(
  width: 800
  height: 400

  LineOfText(
    text: "Letters to guess"
    size: 20
    bold: yes
    font: sansSerif
  )

  Keyboard(
    up: (key) ->
      if /^[a-z]$/i.test(key)
        if key not in word
          mistake()
        else
          if guessed[key] is no
            guessed[key] = yes;
            for section in letters[key]
              do (section) ->
                section.append(LineOfText(
                  text: key.toUpperCase()
                  bold: yes
                  font: sansSerif
                ));
  )

  canvas = Canvas(
    left: 390
    top: 10
    width: 400
    height: 380
    lineWidth: 4
    color: black

    moveTo(390, 370)
    drawLine(10, 370)
    moveTo(30, 370)
    drawLine(30, 10)
    moveTo(10, 10)
    drawLine(250, 10)
    moveTo(30, 100)
    drawLine(100, 10)
    moveTo(220, 10)
    drawLine(220, 50)
  )
)


letters = {}
guessed = {}

for letter, i in word
  do(letter, i) ->
    guessed[letter] = no
    section = Section(
      borderWidth: 2
      borderColor: black
      height: 20
      width: 20
      top: 50
      align: center
      left: 5 + (i * 30)
    )
    app.append(section);
    if letters[letter]
      letters[letter].push(section)
    else 
      letters[letter] = [section]

headDrawn = no
torsoDrawn = no
leftArmDrawn = no
rightArmDrawn = no
leftLegDrawn = no
rightLegDrawn = no
mistake = () ->
  if headDrawn is no
    headDrawn = yes
    canvas.add(
      drawCircle(220, 80, 30)
    )
  else if torsoDrawn is no
    torsoDrawn = yes
    canvas.add(
      moveTo(220, 110)
      drawLine(220, 220)
    )
  else if leftArmDrawn is no
    leftArmDrawn = yes
    canvas.add(
      moveTo(220, 120)
      drawLine(180, 200)
    )
  else if rightArmDrawn is no
    rightArmDrawn = yes
    canvas.add(
      moveTo(220, 120)
      drawLine(260, 200)
    )
  else if leftLegDrawn is no
    leftLegDrawn = yes
    canvas.add(
      moveTo(220, 220)
      drawLine(180, 280)
    )
  else if rightLegDrawn is no
    rightLegDrawn = yes
    canvas.add(
      moveTo(220, 220)
      drawLine(260, 280)
    )
    setTimeout(
      () -> alert("You lost!")
      0
    )
