const express = require('express');
const bodyParser = require('body-parser');
const fs = require('./helpers');
const tokenGenerator = require('./helpers/tokenGenerator');
const loginValidation = require('./middlewares/loginValidation');
const talkerValidation = require('./middlewares/talkerValidation');
const tokenValidation = require('./middlewares/tokenValidation');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
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
  console.log('🚀 ~ get talker/:id error:', error);
  }
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

app.post('/login', loginValidation, async (_req, res) => {
  try {
    const token = tokenGenerator();
    return res.status(200).json({ token });
  } catch (error) {
  console.log('🚀 ~ error', error);
  }
});

app.post('/talker', tokenValidation, talkerValidation, async (req, res) => {
  const { name, age, talk } = req.body;
  try {
    const currTalkers = await fs.read();
    const newTalker = { id: currTalkers.length + 1, name, age, talk };
    const updTalkers = [...currTalkers, newTalker];
    await fs.write(updTalkers);
    return res.status(201).json(newTalker);
  } catch (error) {
  console.log('🚀 ~ POSTTalker error', error);
  }
});

app.put('/talker/:id', tokenValidation, talkerValidation, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, talk } = req.body;

    const currTalkers = await fs.read();
    const updTalker = { name, age, talk };

    const foundTalker = currTalkers.find((talker) => talker.id === +(id));
    if (!foundTalker) return res.status(400).json({ message: '' });
    
    Object.assign(foundTalker, updTalker);
    await fs.write(currTalkers);
    
    return res.status(200).json(foundTalker);
  } catch (error) {
  console.log('🚀 ~ PUT Talker error', error);
  }
});

app.delete('/talker/:id', tokenValidation, async (req, res) => {
  try {
    const { id } = req.params;
    const currTalkers = await fs.read();

    const newTalkers = currTalkers.filter((talker) => talker.id !== +(id));
    console.log('🚀 ~ newTalkers', newTalkers);
    await fs.write(newTalkers);

    return res.status(204).end();
  } catch (error) {
  console.log('🚀 ~ DELETE Talker error', error);
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
