import { defineStore } from 'pinia'

import { ref } from 'vue'

import { IUser } from '../models/IUser'
import AuthService from '../services/AuthService'

export const useAuthStore = defineStore('auth', () => {
  const user = ref({} as IUser)
  const isAuth = ref(false)

  const login = async (email: string, password: string) => {
    try {
      const response = await AuthService.login(email, password)
      localStorage.setItem('token', response.data.accessToken)
      setUser(response.data.user)
      setIsAuth(true)
    } catch (err: any) {
      // TODO need fix error type
      console.error(err.response?.data?.message)
    }
  }

  const registration = async (email: string, password: string) => {
    try {
      const response = await AuthService.registration(email, password)
      localStorage.setItem('token', response.data.accessToken)
      setUser(response.data.user)
      setIsAuth(true)
    } catch (err: any) {
      // TODO need fix error type
      console.log(err.response?.data?.message)
    }
  }

  const logout = async () => {
    try {
      const response = await AuthService.logout()
      localStorage.removeItem('token')
      setUser({} as IUser)
      setIsAuth(false)
    } catch (err: any) {
      // TODO need fix error type
      console.log(err.response?.data?.message)
    }
  }

  const setUser = (newUser: IUser) => {
    user.value = newUser
  }

  const setIsAuth = (newValue: boolean) => {
    isAuth.value = newValue
  }

  return { user, isAuth, login, registration, logout }
})
