document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target)
    let input = document.querySelector("#new-task-description")
    buildToDo(input.value)
    form.reset()
    // console.log(input.value)
  })
});

function buildToDo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  p.textContent = `${todo} `
  btn.textContent = ' x'
  p.appendChild(btn)
  // console.log(p)
  document.querySelector('#tasks').appendChild(p)

  // Priority Selector
  const prioritySelect = document.querySelector("#priority")
  switch (prioritySelect.value) {
    case 'high':
      p.style.color = 'red';
      break
    case 'medium':
      p.style.color = 'gold'
      break
    case 'low':
      p.style.color = 'green'
      break
  }

}

function handleDelete(e) {
  e.target.parentNode.remove()
}

// function setPrioityColor() {
//   const prioritySelect = document.querySelector("#priority")
//   console.log(prioritySelect.value)
//   switch 
// }



// create a dropdown in HTML with createElement
// appendChild <select>
// 