const userIds = ['U01', 'U02', 'U03']

const orderIds = ['T01', 'T02', 'T03', 'T04']

const userData = {
  'U01': 'Tom',
  'U02': 'Sam',
  'U03': 'John'
}

const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
   { userId: 'U02', orderIds: [] },
   { userId: 'U03', orderIds: ['T03'] },
]

const orderData = {
  'T01': { name: 'A', price: 499 },
  'T02': { name: 'B', price: 599 },
  'T03': { name: 'C', price: 699 },
  'T04': { name: 'D', price: 799 }
}

const result = [
  {
    user: { id: 'U01', name: 'Tom' },
    orders: [
      { id: 'T01', name: 'A', price: 499 },
      { id: 'T02', name: 'B', price: 599 },
    ],
  },
]

const output = userOrders.map(
  ({
    userId,
    orderIds
  }: {
    userId: string,
    orderIds: string[]
  }): {
      user: {
        id: string,
        name: string
      },
      orders: {
        id: string,
        name: string,
        price: number
      }[]
  } => {

    const user = { id: userId, name: userData[userId] }
    const orders = orderIds.map((orderId: string) => {
      return { id: orderId, ...orderData[orderId] }
    })

    return {
      user,
      orders
    }
 })

 console.log(output);
 