function insert(num) {
  var number = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML = number + num
}

function clean() {
  document.getElementById('display').innerHTML = ''
}

function backspace() {
  var display = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML = display.substring(
    0,
    display.length - 1
  )
}

function equals() {
  var result = document.getElementById('display').innerHTML
  if (result) {
    document.getElementById('display').innerHTML = eval(result)
  } else {
    document.getElementById('display').innerHTML = 0
  }
}
