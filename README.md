# Rentalx



## Criação do projeto
Após criar o diretório com o nome do projeto e fazer usa devida vinculação com o repositório execute o comando:
```
yarn init -y
```
Com isso será criado um arquivo `package.json` que é o arquivo de controle do projeto.
### express
O express é a _biblioteca_ que faz com que o projeto possa ser executado utilizando a web. Para instala-lo utilize o comando:
```
yarn add express
yarn add @types/express -D
```
É aconselhavel adicionar a sua biblioteca de tipos para que seja fácil fazer o _intelicense_/autocomplete. Pois no projeto será utilizado o `typescript`.

### typescript
Para iniciar o typescript adicione a lib do `typescript` como dependencia de desenvolvimento
```
yarn add typescript -D
```

e na sequência execute o comando 
```
yarn tsc --init
```
Isso vai gerar um arquivo na raiz do projeto com o nome de `tsconfig.json` será com base nele que o código `typescript` será convertido em `javascript`. É necessário fazer uma pequena alteração nesse arquivo, para indicar em qual diretorio que será adicionado o arquivo convertido, se não for informado ele vai ser adicionado junto com o arquivo `.ts`.
```json
// "outDir": "./",  /* Redirect output structure to the directory. */
```
mude para:
```json
"outDir": "./dist",  /* Redirect output structure to the directory. */
```

