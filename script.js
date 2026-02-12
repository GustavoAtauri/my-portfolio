const formulario = document.getElementById('contato-form');
const status = document.getElementById('form-status');
const botao = document.getElementById('btn-submit');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o redirecionamento da página
    
    const dados = new FormData(formulario);
    botao.innerText = "Enviando...";
    botao.disabled = true;

    try {
        const resposta = await fetch(formulario.action, {
            method: 'POST',
            body: dados,
            headers: { 'Accept': 'application/json' }
        });

        if (resposta.ok) {
            status.innerHTML = "Sua mensagem foi enviada com sucesso! 🚀";
            status.style.color = "#25d366"; // Verde do WhatsApp para sucesso
            formulario.reset(); // Limpa os campos
        } else {
            throw new Error();
        }
    } catch (erro) {
        status.innerHTML = "Ops! Ocorreu um erro ao enviar. Tente novamente.";
        status.style.color = "#ff4d4d"; // Vermelho para erro
    } finally {
        botao.innerText = "Enviar Mensagem";
        botao.disabled = false;
    }
});