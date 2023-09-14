const axios = require('axios');

const obterCEP = async (cep) => {
    cep = cep.toString();
    try {
      const response = await axios.get("https://viacep.com.br/ws/"+cep+"/json/");
      return response.data;
    } catch (error) {
        console.log(cep);
      return { error: 'CEP não encontrado' };
    }
  };

  module.exports = obterCEP;