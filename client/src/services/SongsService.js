import Api from './Api'

export default {
  index () {
    console.log(Api().get('songs'))
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}
