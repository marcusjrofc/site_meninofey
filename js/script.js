const produtos = [
  {
    id: 1,
    nome: "Gelatina Definidora 550g",
    descricao: "Fixação perfeita, efeito memória e brilho radiante naverdathi.",
    preco: "R$ 34,90",
    imagem: "./imgs_videos/img1.png",
    video: "./imgs_videos/video1.mp4"
  },
  {
    id: 2,
    nome: "Creme para Pentear 1kg",
    descricao: "Hidratação profunda, desembaraço e definição com movimento.",
    preco: "R$ 49,90",
    imagem: "./imgs_videos/img2.png",
    video: "./imgs_videos/video2.mp4"
  },
  {
    id: 3,
    nome: "Óleo Sérum Multy 200ml",
    descricao: "Nutrição intensa, controle de frizz e selamento das pontas.",
    preco: "R$ 29,90",
    imagem: "./imgs_videos/img3.png",
    video: "./imgs_videos/video3.mp4"
  }
];

function renderizarProdutos() {
  const containerProdutos = document.getElementById("container-produtos");
  const containerVideos = document.getElementById("container-videos");

  if (!containerProdutos || !containerVideos) return;

  containerProdutos.innerHTML = "";
  containerVideos.innerHTML = "";

  produtos.forEach((produto) => {
    const cardHTML = `
      <div class="card">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="card-texto">
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}</p>
          <span>${produto.preco}</span>
        </div>
      </div>
    `;

    const videoHTML = `
      <div class="card_video">
        <video autoplay loop muted playsinline poster="${produto.imagem}">
          <source src="${produto.video}" type="video/mp4">
          Seu navegador não suporta a exibição deste vídeo.
        </video>
      </div>
    `;

    containerProdutos.innerHTML += cardHTML;
    containerVideos.innerHTML += videoHTML;
  });
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof renderizarProdutos === 'function') {
        renderizarProdutos();
    }

    const modal = document.getElementById("modal-imagem");
    const btnContato = document.getElementById("btn-contato");
    const closeBtn = document.querySelector(".close-btn");

    if (btnContato && modal && closeBtn) {
        btnContato.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});