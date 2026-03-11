CELL = 20
COLS = 20
ROWS = 20
W = CELL * COLS
H = CELL * ROWS

snake = []
direction = dx: 1, dy: 0
nextDirection = dx: 1, dy: 0
foodPos = x: 0, y: 0
score = 0
playing = false

placeFood = ->
  loop
    fx = Math.floor(Math.random() * COLS)
    fy = Math.floor(Math.random() * ROWS)
    occupied = snake.some (s) -> s.x is fx and s.y is fy
    if not occupied
      foodPos = x: fx, y: fy
      break

drawGame = ->
  canvas.add(clear())

  canvas.color = red
  canvas.add(fillCircle(
    foodPos.x * CELL + CELL / 2
    foodPos.y * CELL + CELL / 2
    CELL / 2 - 1
  ))

  for seg, i in snake
    canvas.color = if i is 0 then lime else green
    canvas.add(fillRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2))

tick = ->
  return if not playing

  direction = nextDirection
  head = snake[0]
  nx = head.x + direction.dx
  ny = head.y + direction.dy

  if nx < 0 or nx >= COLS or ny < 0 or ny >= ROWS
    playing = false
    timer.stop()
    statusText.text = "Game over! Score: " + score + ". Press R to restart."
    return

  if snake.some((s) -> s.x is nx and s.y is ny)
    playing = false
    timer.stop()
    statusText.text = "Game over! Score: " + score + ". Press R to restart."
    return

  snake.unshift(x: nx, y: ny)

  if nx is foodPos.x and ny is foodPos.y
    score += 1
    scoreText.text = "Score: " + score
    placeFood()
  else
    snake.pop()

  drawGame()

init = ->
  snake = [
    {x: 12, y: 10}
    {x: 11, y: 10}
    {x: 10, y: 10}
  ]
  direction = dx: 1, dy: 0
  nextDirection = dx: 1, dy: 0
  score = 0
  playing = true
  scoreText.text = "Score: 0"
  statusText.text = "Arrow keys to move"
  placeFood()
  drawGame()

app = App(
  width: W
  height: H + 50
  backgroundColor: black

  scoreText = Text(
    text: "Score: 0"
    color: white
    size: 18
    bold: yes
    font: monospace
    top: 8
    left: 10
  )

  statusText = Text(
    text: "Arrow keys to move"
    color: lightGray
    size: 13
    font: monospace
    top: 30
    left: 10
  )

  canvas = Canvas(
    width: W
    height: H
    top: 50
    left: 0
    backgroundColor: black
  )

  Keyboard(
    up: (key) ->
      if key is "ArrowUp" and direction.dy isnt 1
        nextDirection = dx: 0, dy: -1
      else if key is "ArrowDown" and direction.dy isnt -1
        nextDirection = dx: 0, dy: 1
      else if key is "ArrowLeft" and direction.dx isnt 1
        nextDirection = dx: -1, dy: 0
      else if key is "ArrowRight" and direction.dx isnt -1
        nextDirection = dx: 1, dy: 0
      else if key is "r" or key is "R"
        if not playing
          init()
          timer.restart()
  )

  timer = Timer(
    freq: 150
    do: -> tick()
  )
)

init()
timer.start()
