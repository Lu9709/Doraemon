import string from './css.js'
// 导入 模块化
const player = {
  id: undefined,
  time: 10,
  n: 1,
  ui: {
    demo1: document.querySelector('#demo1'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause':'pause',
    '#btnPlay':'play',
    '#btnNormal':'Normal',
    '#btnSlow':'Slow',
    '#btnQuick':'Quick'
  },
  //初始化内容
  init: () => {
    player.ui.demo1.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.play()
    player.bindEvents()
  },
  // 遍历事件
  bindEvents:()=>{
    for(let key in player.events){
      if(player.events.hasOwnProperty(key)){
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.n += 1
    if (string.length < player.n) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo1.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  Normal: () => {
    player.pause()
    player.time = 10
    player.play()
  },
  Slow: () => {
    player.pause()
    player.time = 20
    player.play()
  },
  Quick: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()

