const odsInfo = {
    1: "Acabar com a pobreza em todas as suas formas, em todos os lugares.",
    2: "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável.",
    3: "Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.",
    4: "Assegurar a educação inclusiva e equitativa de qualidade e promover oportunidades de aprendizagem ao longo da vida para todos.",
    5: "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.",
    6: "Garantir disponibilidade e manejo sustentável da água e saneamento para todos.",
    7: "Garantir acesso a energia acessível, confiável, sustentável e moderna para todos.",
    8: "Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos.",
    9: "Construir infraestrutura resiliente, promover a industrialização inclusiva e sustentável e fomentar a inovação.",
    10: "Reduzir a desigualdade dentro dos países e entre eles.",
    11: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
    12: "Assegurar padrões de produção e de consumo sustentáveis.",
    13: "Tomar medidas urgentes para combater a mudança climática e seus impactos.",
    14: "Conservar e usar de forma sustentável os oceanos, mares e recursos marinhos."
};

const modal = document.getElementById("odsModal");
const modalTitle = document.getElementById("odsTitle");
const modalDescription = document.getElementById("odsDescription");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".ods").forEach((el, index) => {
    el.addEventListener("click", () => {
        const odsNumber = index + 1;
        modalTitle.textContent = `ODS ${odsNumber}`;
        modalDescription.textContent = odsInfo[odsNumber];
        modal.style.display = "block";
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
