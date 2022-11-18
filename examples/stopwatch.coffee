App(
  width: 300
  height: 300
  align: center

  Button(
    text: "Start"
    bold: yes
    color: white
    size: 16
    backgroundColor: green
    do: () ->
      timer.start()
  )

  Button(
    text: "Stop"
    bold: yes
    color: white
    size: 16
    backgroundColor: red
    do: () ->
      timer.stop()
  )

  Button(
    text: "Reset"
    bold: yes
    size: 16
    do: () ->
      text.text = "00:00.000";
      timer.reset()
  )

  timer = Timer(
    freq: 10
    do: (_, ms, s, m) ->
      if ms.toString().length == 1
        millis = "00" + ms
      else if ms.toString().length == 2
        millis = "0" + ms
      else
        millis = ms
      seconds = if s.toString().length == 1 then "0" + s else s;
      minutes = if m.toString().length == 1 then "0" + m else m;
      text.text = minutes + ":" + seconds + "." + millis;
  )

  Paragraph(
    width: 300
    top: 130
    align: "center"
    
    text = Text(
      text: "00:00.000"
      size: 32
      font: sansSerif
    )
  )
)
