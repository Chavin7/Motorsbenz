// Script para animação do scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    //modelos disponíveis
    const modelosDisponiveis = ["Aéreo", "Caminhão","Carro"];

    const modeloSelect = document.getElementById("modelo");

    // Atualiza as opções do select de acordo com os modelos disponíveis
    modelosDisponiveis.forEach(modelo => {
      const option = document.createElement("option");
      option.value = modelo;
      option.text = modelo;
      modeloSelect.appendChild(option);
    });


// SCRIPT PARA ABERTURA DE IMAGEM GALERIA
function openModal(imageUrl) {
    document.getElementById('modalImage').src = imageUrl;
    document.querySelector('.modal').style.display = 'block';
}

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}


// BOTAO PRA ABRIR PARA VER MAIS E MUDAR PRA VER MENOS

const showButton = document.getElementById('showButton');
const secondSection = document.querySelector('.second-section');

showButton.addEventListener('click', () => {
  secondSection.classList.toggle('hidden');

  if (showButton.textContent === 'Ver Mais') {
    showButton.textContent = 'Ver Menos';
  } else {
    showButton.textContent = 'Ver Mais';
  }
});


// Function para subir a pagina para o topo

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

document.getElementById("back-to-top").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

