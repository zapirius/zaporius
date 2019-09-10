let width, height
const $ = (selector) => document.querySelector(selector)



const ctx = (() => {

  const 
    cnv = document.createElement('canvas'),
    ctx = cnv.getContext('2d'),
    resize = () => {
      width = cnv.width = window.innerWidth
      height = cnv.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    $('.canvas').appendChild(cnv)

    return ctx;

})()

const __render = (() => {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame
})()

let __game = () => console.log('Error')

const setGame = game => {
  if (typeof game === 'function') __game = game;
}

const gameLoop = game => {
  setGame(game);
  __game();
  __render(gameLoop);
}

