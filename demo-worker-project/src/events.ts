export type OrderCreatedEvent = {
    type: "OrderCreated";
    data: {
        orderId: string;
        username: string;
        payment: number
    }
}