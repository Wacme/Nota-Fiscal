import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Router from 'next/router'


export default function Home() {

  const [notas,setNotas] = useState([])

  const Pesquisar = () =>{

    let search = (e) =>{
      if(e.keyCode == 13){
        let pesquisa = document.getElementById('pesquisar').value
        let form =  {
          "termo":pesquisa
        }
        fetch('/api/pesquisa',{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(form)
        }).then(valor=>valor.json())
        .then(valor=>{
          console.log(valor)
          if(valor['status'] == 'ok'){
            setNotas(valor['result'])
          }
        })
    }

    }

    return(
      <div id="div_pesquisar">
        <input type='text' class="form-control"  onKeyUp={search} placeholder='Procurar Notas' id="pesquisar"/>
      </div>
    )

  }

  const Item = ({item}) =>{

      let click =  () =>{
        Router.push(`/nota/${item['_id']}`)
      }

      return(
        <div id="notas" onClick={click}>
          <label>
            {item['Numero Nota']}
          </label>

          <label style={{marginLeft:"7%"}}>
            {item['Data emissao']}
          </label>

          <label style={{marginLeft:"9%"}}>
            {item['Contato']}
          </label>

          <label style={{marginLeft:"5%"}}> 
            {item['UF']}
          </label>

          <label style={{marginLeft:"1%"}}>
            R${item['Valor Nota']}
          </label>
        </div>
      )
  }



  return (
    <div>
      <Head>
        <title>Página Inicial</title>
      </Head>

      <Pesquisar />

      <div id="resultados">
        <div id="labels">

          <label>
            Número
          </label>

          <label>
            Data Emissão
          </label>

          <label>
            Cliente
          </label>

          <label>
            UF
          </label>

          <label>
            Valor
          </label>
          

        </div>

      </div>

      {notas.map((nota)=>(
        <>
          <Item item={nota} />
        </>
      ))}
      
   
    </div>
  )
}
