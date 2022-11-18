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
    
    text = LineOfText(
      font: "monospace"
      size: 20
    )
  )
  
  Section(
    top: 80
    left: 20
    
    Button(
      text: "7"
      size: 40
      width: 55
      height: 55
      do: () ->
        values.push(7)
        updateText()
    )
    
    Button(
      text: "8"
      size: 40
      width: 55
      height: 55
      left: 65
      do: () ->
        values.push(8)
        updateText()
    )
    
    Button(
      text: "9"
      size: 40
      width: 55
      height: 55
      left: 130
      do: () ->
        values.push(9)
        updateText()
    )
    
    Button(
      text: "C"
      size: 40
      width: 55
      height: 55
      left: 195
      do: () ->
        values = []
        updateText()
    )
  )
  
  Section(
    top: 145
    left: 20
    
    Button(
      text: "4"
      size: 40
      width: 55
      height: 55
      do: () ->
        values.push(4)
        updateText()
    )
    
    Button(
      text: "5"
      size: 40
      width: 55
      height: 55
      left: 65
      do: () ->
        values.push(5)
        updateText()
    )
    
    Button(
      text: "6"
      size: 40
      width: 55
      height: 55
      left: 130
      do: () ->
        values.push(6)
        updateText()
    )
    
    Button(
      text: "+"
      size: 40
      width: 55
      height: 55
      left: 195
      do: () ->
        values.push("+")
        updateText()
    )
  )
  
  Section(
    top: 210
    left: 20
    
    Button(
      text: "1"
      size: 40
      width: 55
      height: 55
      do: () ->
        values.push(1)
        updateText()
    )
    
    Button(
      text: "2"
      size: 40
      width: 55
      height: 55
      left: 65
      do: () ->
        values.push(2)
        updateText()
    )
    
    Button(
      text: "3"
      size: 40
      width: 55
      height: 55
      left: 130
      do: () ->
        values.push(3)
        updateText()
    )
    
    Button(
      text: "-"
      size: 40
      width: 55
      height: 55
      left: 195
      do: () ->
        values.push("-")
        updateText()
    )
  )
  
  Section(
    top: 275
    left: 20
    
    Button(
      text: "0"
      size: 40
      width: 55
      height: 55
      do: () ->
        values.push(0)
        updateText()
    )
    
    Button(
      text: "."
      size: 40
      width: 55
      height: 55
      left: 65
      do: () ->
        values.push(".")
        updateText()
    )
    
    Button(
      text: "="
      size: 40
      width: 55
      height: 55
      left: 130
      do: () ->
        compute()
        updateText()
    )
    
    Button(
      text: "/"
      size: 40
      width: 55
      height: 55
      left: 195
      do: () ->
        values.push("/")
        updateText()
    )
  )
)
