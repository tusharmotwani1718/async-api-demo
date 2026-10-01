import { Worker } from "bullmq";
import { connection } from "./queue";

export const worker = new Worker(
    "orders",
    async (job) => {
      console.log("Received job:", job.name);
      console.log("Order:", job.data);
  
      // Pretend we're doing some real work
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      console.log("Order processed:", job.data.id);
    },
    {
      connection,
    },
  );
  
  console.log("Order worker started");
