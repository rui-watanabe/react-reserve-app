export interface AccountHeaderProps {
  role: string
  email: string
  name: string
  createdAt: Date
}

export type mapOrdersToPanelsProps = {
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
}

export interface AccountOrdersProps {
  orders: mapOrdersToPanelsProps[]
}

export interface AccountPermissionsProps {
  id: string
}

export type UserPermissionProps = {
  data: [
    {
      _id: string
      role: string
      name: string
      email: string
      createdAt: Date
      updatedAt: Date
    }
  ]
}
