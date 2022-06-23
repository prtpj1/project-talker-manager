const tokenGenerator = () => {
  // toString(36)convert it to base 36 (0-9a-z)
  const random = Math.random().toString(36).substring(2, 10) 
  + Math.random().toString(36).substring(2, 10);
  return random;
};

module.exports = tokenGenerator;