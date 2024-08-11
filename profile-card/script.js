const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  title.innerHTML = 'Hi, Myself khush Soni...'
  excerpt.innerHTML =
    'I am a learning Web Developer, working on myself to get a succefull career...!'
  profile_img.innerHTML =
    '<img src="https://www.google.com/imgres?q=Profile%20picture%20boy%20cartoon&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Fea%2Fc9%2Fa2%2Feac9a2ecbd6f37928da2073121bb32ec.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F961166745445509869%2F&docid=xEvbNCSxw_v5NM&tbnid=JrunKbH7jNu9sM&vet=12ahUKEwjV7LX6q-eHAxXES2cHHZYcBRAQM3oECGUQAA..i&w=736&h=1012&hcb=2&ved=2ahUKEwjV7LX6q-eHAxXES2cHHZYcBRAQM3oECGUQAA" alt="" />'
  name.innerHTML = 'Khush Soni'
  date.innerHTML = 'JUN 07, 2004'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}