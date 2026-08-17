function executarCodigo() {
  const saidaDiv = document.getElementById('saida');
  saidaDiv.innerHTML = ''; // Limpa a tela anterior

  // Redireciona o console.log para a tela de saída
  const logAntigo = console.log;
  console.log = function(...args) {
    saidaDiv.innerHTML += args.join(' ') + '\n';
    logAntigo.apply(console, args);
  };

  try {
    const codigo = document.getElementById('codigo').value;
    // Encapsula o código em um bloco isolado com modo estrito
    new Function(`"use strict"; {\n${codigo}\n}`)();
  } catch (erro) {
    saidaDiv.innerHTML += `<span style="color: #f87171;">❌ Erro de Execução: ${erro.message}</span>`;
  } finally {
    console.log = logAntigo; // Restaura o console.log original
  }
}