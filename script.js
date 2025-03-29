
/* Select the buttons to add the click event */
const openModalButton = document.querySelectorAll('.open_modal_button');
const closeModalButton = document.querySelectorAll('.close_modal_button');
const modal = document.querySelectorAll('.warning_modal_container');

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
