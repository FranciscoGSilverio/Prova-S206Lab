
# Prova LAB - S206

O projeto tem como objetivo desenvolver casos de testes de integração e testes end-to-end para 2 sistemas diferentes

### Os recursos testados foram:
#### Testes de integração com postman: [The Cat API](https://api.thecatapi.com)
#### Testes E2E com cypress: [Demo Blaze](https://www.demoblaze.com)



## Uso

Para executar e gerar o relatório de testes para os testes do Postman (The Cat API), primeiramente é necessário a instalação do pacote newman

```bash
npm install -g newman
```

Caso já tenha instalado, simplesmente execute

```bash
newman run postman/TheCatAPI-Prova.postman_collection.json -r html
```

O arquivo html do relatório de testes ficará disponível na pasta `newman`

---

Para executar e gerar o relatório do cypress, (Demo Blaze) é necessário a instalação das dependências listadas no arquivo package.json

```bash
npm install
```

Após instalação, use o commando

```bash
npx cypress run
```
O Cypress irá executar os testes e gerar o relatório que ficará disponível em `cypress/reports/html`






