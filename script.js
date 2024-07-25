//funcionamento radio button
const radiobox = document.querySelectorAll(".radio");
function radiocheck(option) {
  radiobox.forEach((circle, index) => {
    if (index + 1 === option) {
      circle.classList.add("selecionado");
    } else if (index + 1 !== option) {
      circle.classList.remove("selecionado");
    }
  });
};

//funcionamento select
let customSelect = document.querySelector('.custom-select');
let itemSelecionado = customSelect.querySelector('.selected-option');
let opcoes = customSelect.querySelector('.opcoes');
let itemMenu = customSelect.querySelectorAll('.opcao');
let arrow = customSelect.querySelector(".arrow");

itemSelecionado.addEventListener('click', function() {
  opcoes.style.display = opcoes.style.display === 'block' ? 'none' : 'block';
  arrow.classList.toggle("arrow-rotate");
});

itemMenu.forEach(function(option) {
  option.addEventListener('click', function() {
    itemSelecionado.textContent = option.textContent;
    console.log(itemSelecionado);
    itemSelecionado.classList.add("select");
    opcoes.style.display = 'none';
    arrow.classList.toggle("arrow-rotate");
  });
});


//funcionamento checkbox
var checkboxAll = document.getElementById("todosCheckbox");
let checkboxes = document.querySelectorAll(".checkbox");

function toggleTodasCheck() {
  if (checkboxAll.classList.contains("checked")) {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].classList.remove("checked");
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].classList.add("checked");
    }
  }
};

function toggleCheck(index) {
var checkbox = checkboxes[index];
checkbox.classList.toggle("checked");
var checkbox1 = checkboxes[1];
var checkbox2 = checkboxes[2];
  
  if (checkbox1.classList.contains("checked") && checkbox2.classList.contains("checked")) {
    checkboxAll.classList.add("checked");
    checkboxAll.classList.remove("indeterminate");
  } else if (checkbox1.classList.contains("checked") || checkbox2.classList.contains("checked")) {
    checkboxAll.classList.add("indeterminate");
    checkboxAll.classList.remove("checked");
  } else if (!checkbox1.classList.contains("checked") && !checkbox2.classList.contains("checked")) {
    checkboxAll.classList.remove("checked");
    checkboxAll.classList.remove("indeterminate");
  }
};


//Validação formulário
function validar() {
  let nome = document.getElementById("nome");
  if (nome.value === "" || nome.value === " " || !nome.value.match(/^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/)) {
    alert("Favor escrever um nome válido. Use nome e sobrenome.");
    return false;
  }

  let email = document.getElementById("email");
  if (!email.value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g) || email.value === "" || email.value === " ") {
    alert("Favor digitar um email válido.");
    return false;
  }

  let telefone = document.querySelector("#telefone");
  let telefoneEditado = telefone.value.replace(/[() -]/gm, "");
  if (telefoneEditado.length !== 11) {
    alert("Favor escrever um número de telefone válido.");
    return false;
  }

  if (!radiobox[0].classList.contains("selecionado") && !radiobox[1].classList.contains("selecionado") && !radiobox[2].classList.contains("selecionado")) {
    alert("Favor escolher a sua preferência");
    return false;
  }

  if (!itemSelecionado.classList.contains("select")) {
    alert("Favor selecionar seu tipo de carne favorito");
    return false;
  }


  let msg = document.getElementById("mensagem").value;
  if (msg.length < 5) {
    alert("Favor escrever uma mensagem completa");
    return false;
  }

  else {
    let formulario = document.getElementById("meuForm");
    alert("Seu formulário foi enviado!");
    formulario.submit();
  }
};