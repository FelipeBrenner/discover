const buttonOpenModal = document.querySelector('#openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function () {
  modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modalWrapper.classList.contains('invisible')) {
    modalWrapper.classList.add('invisible')
  }
})