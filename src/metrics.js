import worker from "worker-loader!./worker.js";

const myOtherWorker = new worker();

export { myOtherWorker };
