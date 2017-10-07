const { Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      // console.log('the req in index is')
      // console.log(req)
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      // console.log('the req in index is')
      // console.log(req)
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs'
      })
    }
  },
  async post (req, res) {
    try {
      console.log('Inside post call songs, requst is: ');
      console.log(req);
      // console.log('the response is: ')
      // console.log(res);
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the song'
      })
    }
  }
}
