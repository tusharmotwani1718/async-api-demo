import { Worker } from "bullmq";
import { connection } from "./queue";
import type { OrderCreatedEvent } from "./events";

export const worker = new Worker(
    "orders",
    async (job) => {

        const event = job.data as OrderCreatedEvent;

        console.log("Received event:", event.type);
        console.log("Order:", event.data);

        // Pretend we're doing some real work
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("Order processed:", event.data.orderId);
    },
    {
        connection,
    },
);

console.log("Order worker started");
