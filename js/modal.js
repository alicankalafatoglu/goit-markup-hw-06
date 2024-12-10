(() => {
  const refs = {
    // data-modal-open 
    openModalBtn: document.querySelector('[data-modal-open]'),
    // data-modal-close button
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Дen son da yer alana datalar ıcıcn kayıtı dataların kullanımı
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open bu, buttonlara tıkladığınızda arka uca eklenecek / çıkarılacak sınıftır
    refs.modal.classList.toggle('is-open');
  }
})();
