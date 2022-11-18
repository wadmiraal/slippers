values = [];

updateText = () ->
  text.text = values.join('');
  
compute = () ->
  result = eval(values.join(''));
  values = [result]

App(
  width: 300
  height: 400
  align: center

  Section(
    borderWidth: 2
    borderColor: black
    width: 260
    height: 40
    left: 20
    top: 20
    align: right
    
    text = Text(
      font: monospace
      size: 20
    )
  )
  
  Section(
    top: 80
    left: 20
    
    ...["7", "8", "9", "C"].map (value, i) ->
      Button(
        text: value
        size: 40
        width: 55
        height: 55
        left: 68 * i
        do: () ->
          if value is "C"
            values = []
          else
            values.push(value)
          updateText()
      )
  )
  
  Section(
    top: 145
    left: 20

    ...["4", "5", "6", "+"].map (value, i) ->
      Button(
        text: value
        size: 40
        width: 55
        height: 55
        left: 68 * i
        do: () ->
          values.push(value)
          updateText()
      )
  )
  
  Section(
    top: 210
    left: 20
    
    ...["1", "2", "3", "-"].map (value, i) ->
      Button(
        text: value
        size: 40
        width: 55
        height: 55
        left: 68 * i
        do: () ->
          values.push(value)
          updateText()
      )
  )
  
  Section(
    top: 275
    left: 20

    ...["0", ".", "=", "/"].map (value, i) ->
      Button(
        text: value
        size: 40
        width: 55
        height: 55
        left: 68 * i
        do: () ->
          if value is "="
            compute()
          else
            values.push(value)
          updateText()
      )
  )
)
