import { Queue } from "bullmq";

export const connection = {
    host: "localhost",
    port: 6379,
    password: "redisAsyncApi",
};

export const ordersQueue = new Queue("orders", {
    connection
});