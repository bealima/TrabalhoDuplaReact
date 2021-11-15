import React from 'react';
import { useFormik } from 'formik';
import ListaUsuarios from './ListaUsuarios';
import { useState } from 'react';
import styles from '../Components/Cadastro.module.css';


function Cadastro() {

  const [idUsuario, setIdUsuario] = useState(0)
  const [listUsuarios, setListUsuarios] = useState([])
  const [isEdicao, setIsEdicao] = useState(false)

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = "Campo Obrigatório";
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Informe um e-mail válido";
    }

    if (!values.primeiroNome) {
      errors.primeiroNome = "Campo Obrigatório";
    }
    else if (!/[a-zA-Z\u00C0-\u00FF ]+/i.test(values.primeiroNome)) {
      errors.primeiroNome = "Apenas Letras"
    }

    if (!values.ultimoNome) {
      errors.ultimoNome = "Campo Obrigatorio";
    }
    else if (!/[a-zA-Z\u00C0-\u00FF ]+/i.test(values.ultimoNome)) {
      errors.ultimoNome = "Apenas Letras";
    }

    if (!values.telefone) {
      errors.telefone = "Campo Obrigatório";
    }
    else if (!/^\([1-9]{2}\) 9[7-9]{1}[0-9]{3}\-[0-9]{4}$/.test(values.telefone)) {
      errors.telefone = "Apenas numeros"
    }

    return errors;

  }

  const formik = useFormik({
    initialValues: {
      id: 0,
      primeiroNome: '',
      ultimoNome: '',
      email: '',
      endereco: '',
      telefone: ''
    },
    validate,
    enableReinitialize: true,
    onSubmit: (values) => {

      if (!isEdicao) {

        values.id = idUsuario
        setIdUsuario(idUsuario + 1)

        if (listUsuarios.length === 0) {
          setListUsuarios([values])

        } else {
          setListUsuarios([...listUsuarios, values])
        }

        formik.resetForm();

      } else { /*Se isEdicao*/


        let userEditado = listUsuarios.find(e => e.id === values.id)
        console.log(userEditado)
        // console.log(values)

        if (userEditado !== -1) {


          userEditado.primeiroNome = values.primeiroNome
          userEditado.ultimoNome = values.ultimoNome
          userEditado.email = values.email
          userEditado.endereco = values.endereco
          userEditado.telefone = values.telefone

          setListUsuarios([...listUsuarios])

        }
        console.log(listUsuarios)
      }

    }
  });

  const handleDelete = (id) => {

    const list = listUsuarios.filter(user => user.id !== id)
    setListUsuarios(list)
  }

  const handleUpdate = (id) => {

    setIsEdicao(true)

    const usuario = listUsuarios.find(user => user.id === id)
    formik.setValues(usuario)


  }

  return (
    <div>

      <h1 className={styles.h1Title}>Cadastro de Usuário</h1>

      <form className={styles.formElements} onSubmit={formik.handleSubmit}>

        <div>
          <label htmlFor="primeiroNome">Primeiro Nome:</label>
          <input type="text" id="primeiroNome" name="primeiroNome" placeholder="Cristiano" onChange={formik.handleChange} value={formik.values.primeiroNome} />
          {formik.errors.primeiroNome && (
            <p>{formik.errors.primeiroNome}</p>
          )}
        </div>
        <div>
          <label htmlFor="ultimoNome">Sobrenome:</label>
          <input type="text" id="ultimoNome" name="ultimoNome" placeholder="Ronaldo" onChange={formik.handleChange} value={formik.values.ultimoNome} />
          {formik.errors.ultimoNome && (
            <p>{formik.errors.ultimoNome}</p>
          )}

        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="crisronaldo@gmail.com" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="endereco">Endereco:</label>
          <input type="text" id="endereco" name="endereco" placeholder="Rua Manchester, 45, United Kingdom" onChange={formik.handleChange} value={formik.values.endereco} />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="text" id="telefone" name="telefone" placeholder="(99)99999-9999" onChange={formik.handleChange} value={formik.values.telefone} />
        </div>


        <div>
          <button type="submit" id="btnSubmit">Salvar</button>
        </div>

      </form>
      <ListaUsuarios listaUsuarios={listUsuarios} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default Cadastro;