import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function GetNota(){

    const router = useRouter()
    const {id} = router.query
    const [nota,setNota] = useState({})

    useEffect(()=>{
        if(id != null){
            fetch(`/api/get?id=${id}`).then(valor=>valor.json())
            .then(valor=>{
                console.log(valor)
                if(valor['status'] == 'ok'){
                    setNota(valor['result'])

                }
            })
        }

    },[router.isReady])

    return(
        <div>
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

            <div id="superior" >
                <h4>Destinatário</h4>

                <p><strong>Contato</strong> : {nota['Contato']}</p>
                <p><strong>CPF / CNPJ</strong> : {nota['CPF / CNPJ']}</p>
                

            </div>

        </div>
    )


}