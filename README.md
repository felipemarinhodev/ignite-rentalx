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

### ESLint e Prettier
Inicialmente instale o ESLint como uma dependência de desenvolvimento dentro do projeto:
yarn add eslint -D
```
Após a instalação inicialize o ESLint para inserir as configurações dentro do projeto, com o comando:
yarn eslint --init
```


Primeira instale os 3 pacotes no projeto que vão fazer a formatação do coódigo e também intergar o __Prettier__ com o __ESLint__ com o comando:
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779#eaf6e8bdcabc4d809cdae302e29750da


### ts-node-dev
Essa biblioteca auxilia a fazer a conversão do `typescript` para o `javascript` sem a necessidade de ter que fazer isso manualmente. Instale a biblioteca com o comando:
```bash
yarn add ts-node-dev -D
```
 Para ela fazer isso de forma automatica adicione um `script` no arquivo `package.json`
```json
"scripts": {
	"dev": "ts-node-dev src/server.ts"
},
```

### multer
Lib para auxiliar no upload de arquivos, para mais informações basta consulta a [documentação](https://www.npmjs.com/package/multer). Para adiciona-lá basta executar o comando:
```
yarn add multer
yarn add @types/multer -D
```

### Debug
Para configurar o _debug_ da aplicação vá até a parte __Run and Debug__ e clica em `create a launch.json file` e selecione a opção `Node.js` nessa momento vai abrir um arquivo `.json` para edição com o seguinte código já definido.
```json
{
	// Use IntelliSense to learn about possible attributes.
	// Hover to view descriptions of existing attributes.
	// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
	"version": "0.2.0",
	"configurations": [
		{
			"type": "pwa-node",
			"request": "launch",
			"name": "Launch Program",
			"skipFiles": [
				"<node_internals>/**"
			],
			"program": "${file}"
		}
	]
}
```
* altera o `type` para `node`, o `request`para `attach`, remova o atributo `program` e acrescente `"outFiles": [ "${workspaceFolder}/**/*.js" ]`

```json
{
	// Use IntelliSense to learn about possible attributes.
	// Hover to view descriptions of existing attributes.
	// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
	"version": "0.2.0",
	"configurations": [
		{
			"type": "node",
			"request": "attach",
			"name": "Launch Program",
			"skipFiles": [
				"<node_internals>/**"
			],
			"outFiles": [
				"${workspaceFolder}/**/*.js"
			]
		}
	]
}
```
Altera o script que inicia a aplicação para que ele posso permitir o debug adicionando a flag `--inspect`:
```bash
"dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"
```
 Com isso feito quando o servidor for iniciado irá aparecer uma mensagem falando que o _Debugger_ esta ativo:
 ```
 [INFO] 05:43:26 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.2.4)
Debugger listening on ws://127.0.0.1:9229/b32c0a39-86ce-436a-910d-48523ca8676e
For help, see: https://nodejs.org/en/docs/inspector
Server is running
Debugger attached.
 ```
 Quando quiser realizar o `debug` em alguma parte do código basta adicionar o `breakpoint` no local desejado e acionar o __start debugging__ que esta na parte  __Run and Debug__. Com isso na parte inferior do VSCode vai parecer uma linha vermelha e uma caixa de ações.


 ### Repositorios
 É uma camada/classe que vai ficar responsável por realizar toda a manipulação de dados da nossa aplicação. Serão responsáveis por fazer o acesso/manipulação ao banco de dados(insert, update, delete, select).

 # S.O.L.I.D
 ## S - SRP - Single Responsability Principle (Princípio da Responsabilidade Única)


 ## O - OCP - Open Closed Principle (Princípio aberto/fechado)

 ## L - LSP - Liskov Substituion Principle (Princício de Substituição de Liskov)

 ## I - ISP - Interface Segregation Principle (Princício de Segregação de Interface)

 ## D - DIP - Dependency Inversion Principle (Princício da Inversão de Dependência)




 # Docker

 ## comandos

 ### docker ps
 Lista os containers que estão em uso no momento

 ```bash
 ❯ docker ps                  
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                    NAMES
2e2425463f93   rentalx_app   "docker-entrypoint.s…"   31 minutes ago   Up 31 minutes   0.0.0.0:3333->3333/tcp   rentx
 ```

 ### docker ps -a
 Lista todos os containers que temos na máquina, independente se estão em uso ou não.
 ```bash
 ❯ docker ps  -a
 CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS                       PORTS                      NAMES
2e2425463f93   rentalx_app    "docker-entrypoint.s…"   31 minutes ago   Up 31 minutes                0.0.0.0:3333->3333/tcp     rentx
072f89b8d896   mongo          "docker-entrypoint.s…"   9 months ago     Exited (0) 9 months ago                                 gostack_mongodb
8ac86e887651   postgres       "docker-entrypoint.s…"   13 months ago    Exited (255) 8 months ago    0.0.0.0:5432->5432/tcp     gostack_postgres
 ```

 ### docker rm CONTAINER_ID || NAME
 É possível remover um container usando o `id` ou `nome` do _container_. Uma observação para conseguir realizar a remoção é necessário estar com o container parado.
 ```bash
docker rm 67f28e0e6f6e
 ```

 ### docker start CONTAINER_ID || NAME
 Inicia a execução do container tanto pelo `id`quanto pelo `nome` do _container_.
 ```bash
 docker start 67f28e0e6f6e
 ```

 ### docker stop CONTAINER_ID || NAME
 Parar a execução do container tanto pelo `id`quanto pelo `nome` do _container_.
 ```bash
 docker stop 67f28e0e6f6e
 ```
 Se quiser parar todos os _container_ que estão em execução de uma vez execute o comando abaixo, ele vai listar os container em execução e passar para o comando de parar.
 ```bash
docker stop $(docker ps -q)
 ```

 ### docker exec -it CONTAINER_ID || NAME /bin/bash
 Obtem acesso a máquina que esta em execução.
 ```bash
 ❯ docker exec -it 2e2425463f93 /bin/bash                                                              
root@2e2425463f93:/usr/app# ls
Dockerfile  README.md  docker-compose.yml  node_modules  package.json  src  tmp  tsconfig.json  yarn.lock
root@2e2425463f93:/usr/app# 
 ```
Para sair do terminal do _container_ pressione as teclas `ctrl+D`

### docker logs CONTAINER_ID || NAME
Esse comando vai exibir os últimos _logs_ do _container_ em questão. Deixando o terminal liberado para um próximo comando.
### docker logs CONTAINER_ID || NAME -f
Esse comando vai exibir os _logs_ do _container_ em questão, em tempo real.
Deixando o terminal bloqueado.
Para liberar o terminal do _container_ pressione as teclas `ctrl+C`
 ## docker-compose

 ### docker-compose up -d
 Ele vai subir o container em _background_ deixando assim o terminal livre para uso.

 ### docker-compose down
É usado para remover o _docker-compose_ com seus services informados no arquivo `docker-compose.yml`. Então isso vai para a execução, caso esteja acontecendo e REMOVER os serviços com seus volumes.

### docker-compose start
Inicia os serviços do _docker-compose_ em questão.
 ### docker-compose stop
 Usado para parar a execução do _docker-compose_.

