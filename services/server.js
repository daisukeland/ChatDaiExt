const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

// let options = {};

// const serverPathRoot = path.resolve(__dirname, 'conf', 'server');
// if (fs.existsSync(serverPathRoot + '.crt') && fs.existsSync(serverPathRoot + '.key')) {
//     options = {
//         cert: fs.readFileSync(serverPathRoot + '.crt'),
//         key: fs.readFileSync(serverPathRoot + '.key')
//     };
// }

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
        <html>
  <head>
    <title>Autenticación con Twitch</title>
  </head>
  <body>
    <a href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=fe9ojds4e8xur3rgqqf08qi6uri786&redirect_uri=http://localhost:8080&scope=chat%3Aread+chat%3Aedit">Iniciar sesión con Twitch</a>
    <script>
      const urlParams = new URLSearchParams(window.location.hash.substr(1));
      const accessToken = urlParams.get('access_token');
      fetch('https://api.twitch.tv/helix/users', {
        headers: {
          'Client-ID': 'fe9ojds4e8xur3rgqqf08qi6uri786', // Reemplaza CLIENT_ID con tu Cliente ID de Twitch
          'Authorization': \`Bearer \${ accessToken }\` // Usa el token de acceso obtenido
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    </script>
  </body>
</html>`);
});

server.listen(8080, "localhost", function () {
    console.log(arguments)
})