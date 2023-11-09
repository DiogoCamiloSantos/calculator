# Calculator

# Configuração Inicial
<strong>[ATENÇÃO]</strong> Verificar se as urls dos serviços do RabbitMQ e MongoDB estão apontando para os hosts corretos em cada um dos projetos.
Após a observação, executar os seguintes comandos para configuração e inicialização dos programas:

<p>Projeto API e Front-end:<br> 
Rodar os seguintes comandos:<br>
<strong>npm i</strong><br>
<strong>npm start</strong>

host padrão para os projetos em execução:<br>
API: [local](http://localhost:3000)
Front-end: [local](http://localhost:4200)

<p>Projeto Worker (.Net Core):<br>
Na raíz do projeto, abrir o arquivo "Jitterbit Service Worker.sln" para executar a partir do Visual Studio.<br>
Se preferir o prompt de comando, entrar ma pasta com os arquivos de projeto e configuração (cd "/Jitterbit Service Worker") e executar os seguintes comandos.<br>
<strong>dotnet build</strong><br>
<strong>dotnet run</strong><br>
  
Enquanto a aplicação estiver em execução será exibido no prompt de comando as mensagens que estão sendo consumidas da fila do RabbitMQ.

# Docker
Para a execução deste projeto foram usadas as seguintes imagens do MongoDB e do RabbitMQ respectivamente:<br>
<strong>mongo:latest</strong><br>
<strong>rabbitmq:3.13.0-rc.2-management</strong><br>

Por padrão, os hosts configurados para cada container em execução são os seguintes:<br>
Mongodb: <strong>mongodb://localhost:27017</strong><br>
RabbitMQ: <strong>amqp://localhost:15672</strong><br>

Por questões técnicas no ambiente de desenvolvimento, problemas ocorridos na execução do Docker não possibilitaram a geração das imagens de cada aplicação, mas as configurações para criar das imagens podem ser encontradas no arquivo <strong>Dockerfile</strong> de cada projeto.


# Backlog
Propostas de futuras implementações e melhorias nos projetos:

Worker:<br>
- Implementar modelo de Inversão de Controle; recomendada a utilização do [Autofac](https://autofac.org/) para aplicações .Net Core. 
- Melhorar tratamento para exceções em caso de falha nos serviços.
- Tornar enumerable de status de cálculo dinâmico com dados obtidos no próprio banco.

API:<br>
- Implementar arquivos de environments para para estado de ambiente para definir as urls dos serviços consumidos pela aplicação.

Front-end:<br>
- Melhorar a abstração dos componentes para tornar possível a reusabilidade em outros contextos.
- Melhorar a responsividade da página ao utilizar em diferentes resoluções



