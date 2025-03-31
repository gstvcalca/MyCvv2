
/* Select the buttons to add the click event */
const openModalButton = document.querySelectorAll('.open_modal_button');
const closeModalButton = document.querySelectorAll('.close_modal_button');
const modal = document.querySelectorAll('.warning_modal_container');
const toggleTheme = document.querySelector('#toggle_theme');
const rootElement = document.documentElement;
const defaultTheme = getComputedStyle(rootElement).getPropertyValue('--bg-primary');
const lightTheme = "#ffffff";


/* Add the onClick event on each button to open the modal */ 
openModalButton.forEach(btn => {
  /* get the modal container next to the button */
  let modal = btn.nextElementSibling;
  btn.addEventListener('click', () => {
    modal.classList.add('show');
  })
})

/* Add the onClick event on each button to close the modal */
closeModalButton.forEach(btn => {
  /* Select the warning_modal closest to the button */
  let modal = btn.closest('.warning_modal_container');
  btn.addEventListener('click', () => {
    modal.classList.remove('show');
  })
})

/* Loop to go through every modal */
modal.forEach(md => {
  /* Add event to close the modal if the user clicks on the background */
  md.addEventListener('click', (e) => {
    if(e.currentTarget === e.target){
      md.classList.remove('show');
    }
  })
  /* Add keydown event to close the modal if Escape is pressed */
  document.addEventListener('keydown', (e) => {
    if(e.key === "Escape"){
      md.classList.remove('show')
    }
  })
})

toggleTheme.addEventListener('click', () => {
  if(getComputedStyle(rootElement).getPropertyValue('--bg-primary') === defaultTheme){
    rootElement.style.setProperty('--text-primary', 'rgb(50, 50, 50)');
    rootElement.style.setProperty('--text-secondary', 'rgb(100, 100, 100)');
    rootElement.style.setProperty('--bg-primary', 'rgb(250, 250, 250)');
    rootElement.style.setProperty('--bg-secondary', 'rgb(240, 240, 240)');
    rootElement.style.setProperty('--border-color', 'rgb(50, 50, 50)');
    rootElement.style.setProperty('--bg-gradient-start', '#464cf6');
    rootElement.style.setProperty('--bg-gradient-ent', '#77ccf4');
    rootElement.style.setProperty('--bg-modal', 'rgba(0, 0, 0, 0.2)');
  }
  else {
    rootElement.style.setProperty('--text-primary', 'white');
    rootElement.style.setProperty('--text-secondary', '#b3b3b3');
    rootElement.style.setProperty('--bg-primary', '#2c2c2c');
    rootElement.style.setProperty('--bg-secondary', 'rgb(60, 60, 60)');
    rootElement.style.setProperty('--border-color', 'white');
    rootElement.style.setProperty('--bg-gradient-start', '#464cf6');
    rootElement.style.setProperty('--bg-gradient-ent', '#77ccf4');
    rootElement.style.setProperty('--bg-modal', 'rgba(0, 0, 0, 0.8)');
  }
})


