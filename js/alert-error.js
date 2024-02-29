export const AlertError = {
  element: document.querySelector('.alert-error'),
   open() {
    AlertError.element.classList.add('oper')

  },
  close(){
    AlertError.element.classList.remove('open')
  }
}
