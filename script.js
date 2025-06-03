let usuarios = [
    { id: 1, login: "brunotd3", senha: "34567" },
    { id: 2, login: "gabis22", senha: "14107" },
    { id: 3, login: "fontes762", senha: "28050" },
    { id: 4, login: "gui556", senha: "gui123" },
    { id: 5, login: "jhe300", senha: "23455" }
  ];
  
  let idAtual = 6;
  let selecionadoId = null;
  
  function atualizarTabela() {
    const corpo = document.getElementById("tabela-corpo");
    corpo.innerHTML = "";
  
    usuarios.forEach(usuario => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.login}</td>
        <td>${usuario.senha}</td>
      `;
      tr.onclick = () => preencherFormulario(usuario);
      corpo.appendChild(tr);
    });
  }
  
  function preencherFormulario(usuario) {
    document.getElementById("id").value = usuario.id;
    document.getElementById("login").value = usuario.login;
    document.getElementById("senha").value = usuario.senha;
    selecionadoId = usuario.id;
  }
  
  function cadastrarUsuario() {
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();
    if (!login || !senha) return alert("Preencha todos os campos!");
  
    const novoUsuario = { id: idAtual++, login, senha };
    usuarios.push(novoUsuario);
    limparFormulario();
    atualizarTabela();
  }
  
  function atualizarUsuario() {
    if (selecionadoId === null) return alert("Selecione um usuário para atualizar.");
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();
    if (!login || !senha) return alert("Preencha todos os campos!");
  
    const usuario = usuarios.find(u => u.id === selecionadoId);
    if (usuario) {
      usuario.login = login;
      usuario.senha = senha;
      atualizarTabela();
      limparFormulario();
    }
  }
  
  function apagarUsuario() {
    if (selecionadoId === null) return alert("Selecione um usuário para apagar.");
    usuarios = usuarios.filter(u => u.id !== selecionadoId);
    atualizarTabela();
    limparFormulario();
  }
  
  function buscarUsuario() {
    const termo = document.getElementById("busca").value.trim().toLowerCase();
    const corpo = document.getElementById("tabela-corpo");
    corpo.innerHTML = "";
  
    usuarios
      .filter(u => u.login.toLowerCase().includes(termo))
      .forEach(usuario => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${usuario.id}</td>
          <td>${usuario.login}</td>
          <td>${usuario.senha}</td>
        `;
        tr.onclick = () => preencherFormulario(usuario);
        corpo.appendChild(tr);
      });
  }
  
  function limparFormulario() {
    document.getElementById("id").value = "";
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
    selecionadoId = null;
  }
  
  window.onload = () => {
    atualizarTabela();
  };
  