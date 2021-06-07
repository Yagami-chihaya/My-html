import _ from 'lodash'
import './style.css'
import wallpaper from './wallpaper.png'

function component() {
    const element = document.createElement('div');
  
    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    const wall = new Image()
    wall.src = wallpaper
    element.append(wall)
  
    return element;
  }
  
  document.body.appendChild(component());