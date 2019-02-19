module.exports = (app) => {

  app.get(
    '/', (req, res) => {
      res.send({ express: "test" });
    }
  );

};
