import {useState} from 'react';

function Cadastro(){
  function Cadastrar(){
    const[tipoUsuario, setTipoUsuario] = useState();
    const[nome, setNome] = useState();
  }
  return(
    <div>
      <form>
        <div>
          <label htmlFor="tipoUsuario">Tipo de usuário</label>
          <input type="text"/>
        </div>
        <div>
          <label htmlFor="nome">Nome completo*</label>
          <input type="text"/>
        </div>
        <div>
          <label htmlFor="dataNascimento">Data de Nascimento*:</label>
          <input type="date"/>
        </div>
        <div>
          <label htmlFor="email">E-mail*:</label>
          <input type="email" placeholder="E-mail" />
        </div>
        <div>
          <label htmlFor="senha">Senha*:</label>
          <input type="password"/>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="primeiroEmprego">Primeiro Emprego?</label>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;