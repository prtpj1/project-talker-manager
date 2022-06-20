const fs = require('fs/promises');

const read = async () => {
  try {
    const data = await fs.readFile('talker.json', { encoding: 'utf-8' });
    // console.log('🚀 ~ data', data);
    return JSON.parse(data);
  } catch (error) {
  console.log('🚀 ~ error', error);
  }
};

module.exports = read;