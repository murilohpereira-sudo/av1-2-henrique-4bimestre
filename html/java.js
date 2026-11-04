
// ======================================
// FILTRO DE CATEGORIAS
// ======================================

const botoesFiltro = document.querySelectorAll(".filtro");

const itens = document.querySelectorAll(".item");

const mensagemVazia = document.getElementById("mensagem-vazia");

botoesFiltro.forEach(botao => {

    botao.addEventListener("click", function() {

        // Remove o destaque dos outros botões
        botoesFiltro.forEach(btn => {
            btn.classList.remove("ativo");
        });

        // Destaca o botão selecionado
        this.classList.add("ativo");

        // Descobre a categoria escolhida
        const categoria = this.getAttribute("data-categoria");

        let encontrados = 0;

        // Percorre os títulos
        itens.forEach(item => {

            const categoriaItem = item.getAttribute("data-categoria");

            if (categoria === "todos" || categoria === categoriaItem) {

                item.style.display = "";

                encontrados++;

            } else {

                item.style.display = "none";

            }

        });

        // Exibe mensagem se não houver resultados
        mensagemVazia.hidden = encontrados > 0;

    });

});




const botoesDetalhes = document.querySelectorAll(".btn-detalhes");

const modalElemento = document.getElementById("modalDetalhes");

const modal = new bootstrap.Modal(modalElemento);

const modalNome = document.getElementById("modalNome");

const modalDescricao = document.getElementById("modalDescricao");

botoesDetalhes.forEach(botao => {

    botao.addEventListener("click", function() {

        const titulo = this.getAttribute("data-titulo");

        const descricao = this.getAttribute("data-descricao");

        modalNome.textContent = titulo;

        modalDescricao.textContent = descricao;

        modal.show();

    });

});


window.addEventListener("load", function() {

    console.log("CineVerse carregado com sucesso!");

});

