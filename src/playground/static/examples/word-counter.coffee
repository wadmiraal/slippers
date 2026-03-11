maxWords = 10

countWords = (text) ->
  return 0 if text.trim() is ''
  text.trim().split(/\s+/).length

App(
  width: 400
  height: 220
  align: center

  Text(
    text: "Word counter"
    size: 20
    bold: yes
  )

  input = TextField(
    placeholder: "Type something here..."
    large: yes
    width: 360
    height: 100
    do: (value) ->
      count = countWords(value)
      remaining = maxWords - count
      if remaining < 0
        counter.text = "#{-remaining} word(s) over the limit!"
        counter.color = red
      else
        counter.text = "#{remaining} word(s) remaining"
        counter.color = if remaining <= 2 then maroon else black
  )

  counter = Text(
    text: "#{maxWords} word(s) remaining"
    size: 14
  )
)
