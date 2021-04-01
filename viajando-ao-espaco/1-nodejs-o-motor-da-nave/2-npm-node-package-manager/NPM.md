Node Package Manager

__Glossary: Dependencies, Packages, Modules__

- [x] Verificar se temos o npm instalado `npm -v`
- [x] Criar nosso próprio pacote `npm init -y`
- [x] O que é o arquivo package.json
  > informações do projeto, dependências npm
- [x] Utilizar módulos de terceiros
  > `npm install module_name` `npm i inquirer opn -D` se alterar a mão o arquivo package.json, rodar no terminal depois `npm update`
- [x] O que é o diretório node_modules
  > é possível não enviar a node_modules pro git com .gitignore pois todos os arquivos dela podem ser pegos a partir do que tem na package.json rodando `npm install` após o git clone do projeto
- [x] O que é o arquivo package-lock.json
  > mapeamento das dependecias do projeto, realiza manutenções conforme o node_modules
- [x] Criar scripts para rodar com o npm
  > `npm run` + o nome da propriedade que está em "scripts" no package.json
- [x] Dependencias globais `npm root -g`
  - [x] Instalar pacote de maneira global `npm i opn -g`
  - [x] Desinstalar pacotes `npm uninstall opn -g`
- [x] Mudar versão de pacotes
  > major.minor.patch `"^2.29.1" ^ atualizará minor.patch, ~ atualizará patch, * atualizará tudo e sem nada manterá sempre esta versão`
  > `npm outdated` `npm upgrade` `npm i moment@latest` moment é o nome do pacote
- [x] Desinstalar pacotes `npm uninstall moment`