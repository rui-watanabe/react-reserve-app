export interface AccountHeaderProps {
  role: string
  email: string
  name: string
  createdAt: Date
}

export type AccountOrdersProps = {
  orders: {
    _id: string
    createdAt: Date
    total: number
    email: string
    products: [
      {
        product: {
          _id: string
          name: string
          price: number
          description: string
          sku: string
          mediaUrl: string
        }
        quantity: number
      }
    ]
  }[]
}

export interface AccountPermissionsProps {
  id: string
}

export interface UserPermissionProps {
  users: [
    {
      user: {
        _id: string
        role: string
        name: string
        email: string
        createdAt: Date
        updatedAt: Date
      }
    }
  ]
}
