import Api from './Api'

export default {
  register (credentials) {
    console.log(credentials)
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
