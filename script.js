AOS.init();
let assistirTrailer = document.querySelector('.assistir')
let dialog = document.getElementById('dial')
let closedDialog = document.querySelector('.btnClosed')

assistirTrailer.addEventListener('click', function() {
    dialog.showModal()
})
closedDialog.addEventListener('click', function() {
    dialog.close()
})