import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();

const mongoURL = 'mongodb+srv://********:*******@cluster0.0hrxu0l.mongodb.net/';
const port = 3005;
const client = new MongoClient(mongoURL);

app.use(cors());
app.use(express.json());

// Login semplice senza JWT (per ora)
app.post('/user/login', async (req, res) => {
  try {
    await client.connect();
    const { email, password } = req.body;
    const user = await client
      .db('Dati')
      .collection('_Utenti')
      .findOne({ email, password });

    if (!user) {
      return res.status(401).json({ error: 'Credenziali errate' });
    }

    res.json({
      user: {
        _id: user._id,
        nome: user.nome,
        email: user.email,
      },
      token: 'tokenfinto123',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
});

// Registrazione utente (POST /user)
app.post('/user', async (req, res) => {
  try {
    await client.connect();
    const { nome, email, password } = req.body;
    if (!nome || !email || !password) {
      return res.status(400).json({ error: 'Campi obbligatori mancanti' });
    }
    const existing = await client.db('Dati').collection('_Utenti').findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'Email già usata' });
    }
    const result = await client.db('Dati').collection('_Utenti').insertOne({ nome, email, password });
    res.json({ success: true, userId: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Backend Express in ascolto su http://localhost:${port}`);
});
