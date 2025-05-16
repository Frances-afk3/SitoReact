// dev-ngrok.js
import ngrok from 'ngrok';
import { spawn } from 'child_process';

const PORT = 5173;

(async () => {
  const url = await ngrok.connect(PORT);
  const hostname = new URL(url).hostname;

  console.log(`🌍 Sito pubblico: ${url}`);
  console.log(`✅ Host autorizzato: ${hostname}`);

  // Avvia vite con variabile d'ambiente impostata
  const vite = spawn('npm', ['run', 'dev'], {
    env: {
      ...process.env,
      NGROK_HOST: hostname
    },
    stdio: 'inherit',
    shell: true
  });
})();
