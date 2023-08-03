import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function GetNota(){

    const router = useRouter()
    const {id} = router.query
    const [nota,setNota] = useState({})
    const [produtos,setProdutos] = useState([])

    useEffect(()=>{
        if(id != null){
            fetch(`/api/get?id=${id}`).then(valor=>valor.json())
            .then(valor=>{
                console.log(valor)
                if(valor['status'] == 'ok'){
                    setNota(valor['result'])
                    setProdutos(valor['result']['produtos'])
                }
            })
        }

    },[router.isReady])

    const Item = ({item}) =>{

       
  
        return(

            <tr>
            <td> {item['Item Descricao']}</td>
            <td> {item['Item Codigo']}</td>
            <td>{item['Item Quantidade']}</td>
            <td>R${item['Item Valor']}</td>
            <td>R${item['Item Total']}</td>
            <td>{item['Item NCM']}</td>
            </tr>

        )
    }

    return(
        <div id="nota_dados">
            <h3>Nota Fiscal</h3>

            <div id="superior">
                <div id="parte1">
                    <p><strong>Série</strong> : {nota['Serie']}</p>
                    <p><strong>Numero Nota</strong> : {nota['Numero Nota']}</p>
                    <p><strong>Data emissao</strong> : {nota['Data emissao']}</p>
                    <p><strong>Natureza</strong> : {nota['Natureza']}</p>
                </div>


                <div id="parte2">              
                    <p><strong>Data saída</strong> : {nota['Data saída']}</p>
                    <p><strong>Regime Tributario</strong> : {nota['Regime Tributario']}</p>
                    <p><strong>Chave de acesso</strong> : {nota['Chave de acesso']}</p>

                </div>
                
                
                

            </div>

            <div id="superior" style={{height:"300px"}} >
                <h4 style={{marginLeft:"2.5%"}}>Destinatário</h4>
                <div id="parte1">
                    <p><strong>Contato</strong> : {nota['Contato']}</p>
                    <p><strong>CPF / CNPJ</strong> : {nota['CPF / CNPJ']}</p>
                    <p><strong>Fone</strong> : {nota['Fone']}</p>
                    <p><strong>E-mail</strong> : {nota['E-mail']}</p>
                </div>

                <div id="parte2">              
                    <p><strong>Endereco</strong> : {nota['Endereco']}</p>
                    <p><strong>Bairro</strong> : {nota['Bairro']}</p>
                    <p><strong>Municipio</strong> : {nota['Municipio']}</p>
                </div>

                <div id="parte3">
                    <p><strong>Número</strong> : {nota['Nro']}</p>
                    <p><strong>UF</strong> : {nota['UF']}</p>
                    <p><strong>Complemento</strong> : {nota['Complemento']}</p>
                </div>

            </div>

            <div style={{marginTop:"2%"}}>
                <h4>Produtos</h4>



            <table class="table">
            <thead>
                <tr>
                <th scope="col">Nome</th>
                <th scope="col">SKU</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Preço Un</th>
                <th scope="col">Total</th>
                <th scope="col">NCM</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((produto)=>(
                    <>
                    <Item item={produto} />
                    </>
                ))}
            </tbody>
            </table>

            </div>


            <div id="superior">
            <h3>Valores</h3>
                <div id="parte1">
                    <p><strong>Valor Produtos</strong> : R${nota['Valor Produtos']}</p>
                    <p><strong>Valor Nota</strong> : R${nota['Valor Nota']}</p>
                </div>
            </div>

        </div>
    )


}