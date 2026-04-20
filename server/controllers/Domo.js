const makerPage = (req, res) => {
  if (!req.session.account) {
    return res.redirect('/');
  }
  return res.render('app');
};

module.exports = { makerPage };
