import React from 'react';
import {
  Header,
  Accordion,
  Label,
  Segment,
  Icon,
  Button,
  List,
  Image,
  Message,
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import formatDate from '../../utils/formatDate';
import { AccountOrdersProps } from './AccountType';
import { OrderModelType } from '../../models/OrderModel/OrderType';

function AccountOrders({ orders }: AccountOrdersProps): JSX.Element {
  const router = useRouter();

  function mapOrdersToPanels(orders: OrderModelType[]) {
    return orders.map((order) => ({
      key: order._id,
      title: {
        content: <Label color="blue" content={formatDate(order.createdAt)} />,
      },
      content: {
        content: (
          <>
            <List.Header as="h3">
              Total: ${order.total}
              <Label
                content={order.email}
                icon="mail"
                basic
                horizontal
                style={{ marginLeft: '1em' }}
              />
            </List.Header>
            <List>
              {order.products.map((p) => {
                '_id' in p.product ? (
                  <List.Item key={p.product._id}>
                    <Image avatar src={p.product.mediaUrl} />
                    <List.Content>
                      <List.Header>{p.product.name}</List.Header>
                      <List.Description>
                        {p.quantity} ・ ${p.product.price}
                      </List.Description>
                    </List.Content>
                    <List.Content floated="right">
                      <Label tag color="red" size="tiny">
                        {p.product.sku}
                      </Label>
                    </List.Content>
                  </List.Item>
                ) : (
                  <Message negative>
                    <Message.Header>
                      We`re sorry we can`t apply that discount
                    </Message.Header>
                    <p>Setting Product ObjectId error!</p>
                  </Message>
                );
              })}
            </List>
          </>
        ),
      },
    }));
  }

  return (
    <>
      <Header as="h2">
        <Icon name="folder open" />
        Order History
      </Header>
      {orders.length === 0 ? (
        <Segment inverted tertiary color="grey" textAlign="center">
          <Header icon>
            <Icon name="copy outline" />
            No past orders.
          </Header>
          <div>
            <Button onClick={() => router.push('/')} color="orange">
              View Products
            </Button>
          </div>
        </Segment>
      ) : (
        <Accordion
          fluid
          styled
          exclusive={false}
          panels={mapOrdersToPanels(orders)}
        />
      )}
    </>
  );
}

export default AccountOrders;
