# Busca Endereço por CEP


## Parâmetros
+ zipCode (number)


## Todo

1. [ ] Receber uma requisição do tipo **GET** na rota **/api/address/{zipCode}**;
2. [ ] Validar os parâmetros enviados;
3. [ ] **Consultar** no banco de dados, se existe o CEP enviado pelo client;
4. [ ] Preparar o resultado a ser retornado;
5. [ ] Retornar status code **200** e o endereço formatado;

## Exceções

1. [ ] Retorna error **404** se não existir a API;
2. [ ] Retorna error **400** se não for enviado o parâmetro **cep**;
3. [ ]  Retorna error **400** se o cep enviado for inválido;
4. [ ]  Retorna error **404** se não existir o **cep** no banco de dados;
5. [ ]  Retorna error **500** se não for possível acessar o banco de dados   
