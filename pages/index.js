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

        <tr onClick={click} id="item_tabela">
        <td> {item['Numero Nota']}</td>
        <td> {item['Data emissao']}</td>
        <td>{item['Contato']}</td>
        <td>{item['UF']}</td>
        <td>R${item['Valor Nota']}</td>
        </tr>

      )
  }



  return (
    <div>
      <Head>
        <title>Página Inicial</title>
      </Head>

      <Pesquisar />
      

  <table class="table">
  <thead>
    <tr>
      <th scope="col">Número</th>
      <th scope="col">Data Emissão</th>
      <th scope="col">Cliente</th>
      <th scope="col">UF</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
  {notas.map((nota)=>(
        <>
          <Item item={nota} />
        </>
    ))}
  </tbody>
</table>
   
    </div>
  )
}
