export interface User {
  id: string
  name: string
  email: string
  emailVerified: Date | null
  password: string
  image: string
  address: string
  phone: string
  createdAt: Date
  updatedAt: Date
}
