# calculator

# Configuração Inicial
<strong>[ATENÇÃO]</strong> Verificar se as urls dos serviços do RabbitMQ e MongoDB estão apontando para os hosts corretos em cada um dos projetos.
Se estiver ok, usar os seguintes comandos para  configuração e inicialização dos programas:

<p>Projeto API e Front-end:<br> 
Rodar os seguintes comandos:<br>
<strong>npm i</strong><br>
<strong>npm start</strong>

host padrão para os projetos em execução:<br>
API: [local](https://localhost:3000)
Front-end: [local](https://localhost:4200)

<p>Projeto Worker (.Net Core):<br>
Na raíz do projeto, abrir o arquivo "Jitterbit Service Worker.sln" para executar a partir do Visual Studio.<br>
Se preferir o prompt de comando, entrar ma pasta com os arquivos de projeto e configuração (cd "/Jitterbit Service Worker") e executar os seguintes comandos.<br>
<strong>dotnet build</strong><br>
<strong>dotnet run</strong><br>
  
Enquanto a aplicação estiver em execução será exibido no prompt de comando as mensagens que estão sendo consumidas da fila do RabbitMQ.
