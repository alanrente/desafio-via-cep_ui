# Pré configuração
Faça todas as etapas de instalação e configuração do backend antes de começar a realizar a configuração do front. Veja [Aqui](https://github.com/alanrente/desafio-via-cep_api#pr%C3%A9-configura%C3%A7%C3%A3o)
Antes de começar certifique-se que o backend está em execução:
- Backend da aplicação http://localhost:3001
- Caso estaja rodando em alguma porta diferente, altere o arquivo **.env**

## Instalação:
 - ### Com docker:
```bash
$ git clone https://github.com/alanrente/desafio-via-cep_ui.git
$ cd desafio-via-cep_ui
$ docker-compose build
```

- ### Com yarn:
```bash
$ git clone https://github.com/alanrente/desafio-via-cep_ui.git
$ cd desafio-via-cep_ui
$ yarn
```
## Execução:
- ### Com docker:
```bash
$ docker-compose up
```

 - ### Com Yarn:
 ```bash
 $ yarn start
 ```