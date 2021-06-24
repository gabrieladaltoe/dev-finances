const modalContent = document.querySelector('.modal-overlay')

const Modal = {
    open(){
        modalContent.classList.add('active')
    },
    close(){
        modalContent.classList.remove('active')
    } 
}