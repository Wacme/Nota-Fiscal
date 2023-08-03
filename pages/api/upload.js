// pages/api/upload.js
import multer from 'multer';

// Configuração do armazenamento usando a biblioteca multer
const upload = multer({ dest: 'uploads/' });

export default async function handler(req, res) {
  if (req.method == 'POST') {
    // Utilizando o middleware 'multer' para processar o arquivo enviado no corpo da requisição
    upload.single('file')(req, res, (err) => {
      if (err) {
        console.log(err)
      }

      // Obter o arquivo enviado no corpo da requisição
      const file = req.file;
      console.log(file)
      
      // Faça o que for necessário com o arquivo (por exemplo, salvar no disco, converter, etc.)
      
      // Responder com sucesso
      
    });
  } else {
    res.json({'status':'ok'});
  }
}
