import { ordersQueue } from "./queue";
import { nanoid } from "nanoid";

interface CreatedOrder {
    id: string
    title: string
    createdAt: Date
    payment: number
    customerName: string
    description?: string
}


async function createdOrder() {
    try {
        const orderToAdd: CreatedOrder = {
            id: nanoid(),
            title: "New order",
            createdAt: new Date(),
            payment: 1799,
            customerName: "Tushar"
        }

        await ordersQueue.add("OrderCreated", orderToAdd);

        await ordersQueue.close();

        console.log('order added to queue');
    } catch (error) {
        console.error(`error adding order to queue.`);
        console.error(error)
    }
}


await createdOrder();