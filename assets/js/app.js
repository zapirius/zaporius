const input = new Keys();

let x = 10
const game = () => {

  ctx.clearRect(0, 0, width, height)

  ctx.fillRect(x, 300, 150, 150);
  ctx.fillStyle = 'red';

  if(input.press('d') || input.press('в')) {
    x++
  }
}

gameLoop(game);