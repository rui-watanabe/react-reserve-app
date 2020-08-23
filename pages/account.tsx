import AccountHeader from '../components/Account/AccountHeader'
import AccountOrders from '../components/Account/AccountOrders'
import AccountPermissions from '../components/Account/AccountPermissions'
import { parseCookies } from 'nookies'
import baseUrl from '../utils/baseUrl'
import axios from 'axios'
import { AccountProps } from '../pagesType/AccountType'
import { NextPageContext } from 'next'

function Account({ user, orders }: AccountProps) {
  return (
    <>
      <AccountHeader {...user} />
      <AccountOrders orders={orders} />
      {/* {user.role === 'root' && <AccountPermissions id={user._id} />} */}
      {user.role === 'root' && <AccountPermissions/>}
    </>
  )
}

Account.getInitialProps = async (ctx: NextPageContext) => {
  const { token } = parseCookies(ctx)
  if (!token) {
    return { orders: [] }
  }
  const payload = { headers: { Authorization: token } }
  const url = `${baseUrl}/api/orders`
  const response = await axios.get(url, payload)
  return response.data
}

export default Account
