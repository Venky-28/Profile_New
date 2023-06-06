//Hamburger

function Menu(e){
  let list = document.querySelector('ul');
  e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
}

// contact

const scriptURL = 'https://script.google.com/macros/s/AKfycbwAalJyl3dwdUrwCXEmuq5cRz-gaxhTMuxC-FiNmUXV0TRrS1rIEZ9yRn02f9j1fL7EhA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent Successfully!!!"
      setTimeout(function(){
          msg.innerHTML = ""

      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
