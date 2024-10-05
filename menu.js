let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

  // Função para exibir o popup
function showPopup(message) {
    document.getElementById('popup-message').innerText = message;
    document.getElementById('popup').style.display = 'block';
}

// Função para fechar o popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Verifica o status passado pela URL e exibe o popup correspondente
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    if (status === 'sucesso') {
        showPopup('Email enviado com sucesso!');
    } else if (status === 'erro') {
        showPopup('Erro ao enviar o email. Tente novamente mais tarde.');
    }
}
