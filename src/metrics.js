import worker from "worker-loader!./worker.js";

const metricsWorker = new worker();

export { metricsWorker };
