const express = require('express');
const bodyParser = require('body-parser');
const fs = require('./helpers');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  try {
    const talkers = await fs.read();
    if (talkers.length === 0) {
      return res.status(200).json([]);
    }
    return res.status(200).json(talkers);
  } catch (error) {
  console.log('🚀 ~ error', error);
  }
});

app.get('/talker/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const talkers = await fs.read();

    const foundTalker = talkers.find((talker) => talker.id === +(id));
    if (!foundTalker) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(foundTalker);
  } catch (error) {
  console.log('🚀 ~ error', error);
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
