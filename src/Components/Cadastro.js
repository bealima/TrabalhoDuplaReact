import React from 'react';
import { useFormik } from 'formik';
import ListaUsuarios from './ListaUsuarios';
import { useState } from 'react';

import styles from '../Components/Cadastro.module.css';





// function useFormik({
//   initialValues
// }){
//   console.log(initialValues);
//   return{
//     values: initialValues
//   }
// }

function Cadastro() {
  const formik = useFormik({
    initialValues: {
      id: 0,
      tipoUsuario: '',
      nome: '',
      dataNasc: '',
      email: '',
      senha: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  });
  // function Cadastrar(e){
  //   e.preventDefault()
  //   let usuario= {id, tipoUsuario, nome, dataNasc, email, senha}
  //   setUsuariosCadastrados([...usuariosCadastrados, usuario])
  //   setId(id+1)

  //}
  // const[tipoUsuario, setTipoUsuario] = useState([]);
  // const[nome, setNome] = useState('');
  // const[dataNasc, setDataNasc] = useState('');
  // const[email, setEmail] = useState('');
  // const[senha, setSenha] = useState('');
  // const[id, setId] = useState(0);


  const [usuariosCadastrados, setUsuariosCadastrados] = useState([])
  const [id, setId] = useState([])



  return (
    <div>
      <h1 className={styles.h1Title}>Cadastro de Usuario</h1>
      <form onSubmit={formik.handleSubmit} className={styles.formElements}>

        <div>
          <label htmlFor="tipoUsuario">Tipo de usuário</label>
          <input type="text" id="tipoUsuario" name="tipoUsuario" onChange={formik.handleChange} value={formik.values.tipoUsuario} />
        </div>

        <div>
          <label htmlFor="nome">Nome completo*</label>
          <input type="text" id="nome" name="nome" onChange={formik.handleChange} value={formik.values.nome} />
        </div>

        <div>
          <label htmlFor="dataNascimento">Data de Nascimento*:</label>
          <input type="date" id="dataNasc" name="dataNasc" onChange={formik.handleChange} value={formik.values.dataNasc} />
        </div>
        <div>
          <label htmlFor="email">E-mail*:</label>
          <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
        </div>

        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" onChange={formik.handleChange} value={formik.values.telefone} />
        </div>

        <div>
          <label htmlFor="senha">Senha*:</label>
          <input type="password" id="senha" name="senha" onChange={formik.handleChange} value={formik.values.senha} />
        </div>

        <div>
          <input type="checkbox" />
          <label htmlFor="primeiroEmprego">Primeiro Emprego?</label>
        </div>

        <div>
          <button type="submit">Cadastrar</button>
        </div>

      </form>
      <ListaUsuarios usuarios={usuariosCadastrados} setUsuarios={setUsuariosCadastrados} />
    </div>
  );
}

export default Cadastro;