module.exports = app => {

  app.post('/api/newItem', async(req, res) => {
    const item = await new Item(req.body);
    item.save()
    .then(item => {
      res.json('item added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  });
};
