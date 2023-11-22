// import { IUser } from '../models/IUser'
// import AuthService from '../services/AuthService'

// const store = {
//   state: {
//     user: {} as IUser,
//     isAuth: false,
//   },
//   mutations: {
//     setAuth(state, bool: boolean) {
//       state.isAuth = bool
//     },
//     setUser(state, user: IUser) {
//       state.user = user
//     },
//   },
//   actions: {
//     async login({ commit }, email: string, password: string) {
//       try {
//         const response = await AuthService.login(email, password)
//         localStorage.setItem('token', response.data.accessToken)
//         commit('setAuth', true)
//         commit('setUser', response.data.user)
//       } catch (err) {
//         console.log(err.response?.data?.message)
//       }
//     },
//     async registration({ commit }, email: string, password: string) {
//       try {
//         const response = await AuthService.registration(email, password)
//         localStorage.setItem('token', response.data.accessToken)
//         commit('setAuth', true)
//         commit('setUser', response.data.user)
//       } catch (err) {
//         console.log(err.response?.data?.message)
//       }
//     },
//     async logout({ commit }) {
//       try {
//         const response = await AuthService.logout()
//         localStorage.removeItem('token')
//         commit('setAuth', false)
//         commit('setUser', {} as IUser)
//       } catch (err) {
//         console.log(err.response?.data?.message)
//       }
//     },
//   },
// }

// export default store
