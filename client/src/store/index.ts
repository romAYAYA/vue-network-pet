import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

import { IUser } from '../models/IUser'
import AuthService from '../services/AuthService'
import { AuthResponse } from '../models/response/AuthResponse'
import { API_URL } from '../http'

export const useAuthStore = defineStore('auth', () => {
  const user = ref({} as IUser)
  const isAuth = ref(false)
  const isLoading = ref(false)

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

  const checkAuth = async () => {
    setLoading(true)
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      })
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      setUser(response.data.user)
      setIsAuth(true)
    } catch (err: any) {
      console.log(err.response?.data?.message)
    } finally {
      setLoading(false)
    }
  }

  const setUser = (newUser: IUser) => {
    user.value = newUser
  }

  const setIsAuth = (newValue: boolean) => {
    isAuth.value = newValue
  }

  const setLoading = (bool: boolean) => {
    isLoading.value = bool
  }

  return { user, isAuth, isLoading, login, registration, logout, checkAuth }
})
