import type { OrderCreatedEvent } from "./events";
import { ordersQueue } from "./queue";
import { nanoid } from "nanoid";



async function createdOrder() {
    try {
        const event: OrderCreatedEvent = {
            type: "OrderCreated",
        
            data: {
              orderId: nanoid(),
              username: "tushar",
              payment: 1799,
            },
          };
        
          await ordersQueue.add("event", event);
        
          console.log("OrderCreated event published");
        
          await ordersQueue.close();

        console.log('order added to queue');
    } catch (error) {
        console.error(`error adding order to queue.`);
        console.error(error)
    }
}


await createdOrder();