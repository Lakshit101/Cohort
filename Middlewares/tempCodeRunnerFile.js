 app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
    });