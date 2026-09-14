# Testes Cypress

Este arquivo documenta os testes automatizados de interface do projeto, localizados em `cypress/e2e/test.cy.js`.

## Estrutura da suíte

### Suite: `Test Suite`

#### Contexto: `Filters`

1. `should search for CPU Intel successfully`
   - Realiza a busca pelo valor `13700F`.
   - Valida que o resultado exibido é `Intel Core i7-13700F`.
   - Objetivo: verificar a busca de processadores Intel.

2. `should search for CPU AMD successfully`
   - Realiza a busca pelo valor `5600X`.
   - Valida que o resultado exibido é `AMD Ryzen 5 5600X`.
   - Objetivo: verificar a busca de processadores AMD.

3. `should search for CPU APPLE successfully`
   - Realiza a busca pelo valor `M2 Pro`.
   - Valida que o resultado exibido é `Apple M2 Pro`.
   - Objetivo: verificar a busca de processadores Apple.

#### Contexto: `Email sending`

4. `should validate email successfully`
   - Abre os detalhes do primeiro produto exibido.
   - Tenta validar o e-mail sem informar um valor válido.
   - Verifica a mensagem de erro: `Digite um endereço de e-mail válido.`
   - Objetivo: validar o comportamento de rejeição de e-mail inválido.

5. `should send email successfully`
   - Abre os detalhes do primeiro produto exibido.
   - Insere um e-mail válido: `test@example.com`.
   - Valida o campo de e-mail.
   - Confirma a mensagem de sucesso: `E-mail válido!Agora você pode enviar sua inscrição.`
   - Envia a inscrição.
   - Verifica a mensagem final de confirmação com o e-mail informado.
   - Objetivo: validar o fluxo completo de inscrição por e-mail.

## Arquivos relacionados

- Teste principal: `cypress/e2e/test.cy.js`
- Helpers/Page Objects: `cypress/pageObjects/generalObjects.js`

## Como executar

```bash
npx cypress open
```

Ou em modo headless:

```bash
npx cypress run
```
