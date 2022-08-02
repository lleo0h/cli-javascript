# CLI JavaScript
![Badge](https://img.shields.io/github/license/lleo0h/cli-javascript) ![Badge](https://img.shields.io/github/languages/top/lleo0h/cli-javascript) 
> CLI JavaScript construído sem bibliotecas externas (NPM etc). Com o objetivo de servir de modelo/estrutura para montar sua própia linha de comando.

![Gif](https://user-images.githubusercontent.com/71670099/182070293-b96816a2-8dc0-4694-85f2-878dc40bd735.gif)

## Dependências
Antes que comece a codificar, será necessário instalar o Node.js + NPM.
- [Node](https://nodejs.org/pt-br/download/)
- [Pkg](https://www.npmjs.com/package/pkg) (Opcional)

## Instalação
A instalação em modo de 'desenvolvimento' necessitará que use:
```bash
git clone https://github.com/lleo0h/cli-javascript.git
cd cli-javascript/
npm link
```
Dessa maneira, você não vai precisar criar um 'build' da sua aplicação enquanto a desenvolve. Caso queira disponibilizar sua ferramenta CLI sem a necessidade do Node.js & NPM instalado na máquina, utilize:
```
npm install -g pkg
```
Após isso, gere um build seguindo a documentação do Pkg: https://www.npmjs.com/package/pkg.  
Por fim, adicione o build (executável que foi gerado) ao path do sistema.

## Conclusão
Fique à vontade para modificar do seu jeito e criar sua própia CLI, este é apenas um modelo pré-pronto escalável para se utilizar como base.
