// dev-ngrok.js
import { createServer } from 'vite';
import ngrok from 'ngrok';

const PORT = 5173;

(async () => {
  // Avvia Vite
  const server = await createServer({
    server: {
      host: true,
      port: PORT
    }
  });
  await server.listen();

  // Avvia ngrok
  const url = await ngrok.connect(PORT);
  console.log(`✅ Sito pubblico: ${url}`);
})();
