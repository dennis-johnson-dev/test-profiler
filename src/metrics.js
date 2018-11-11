import worker from "worker-loader!./worker.js";

const metricsWorker = new worker();

function metricsHandler(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  metricsWorker.postMessage({
    actualDuration,
    baseDuration,
    commitTime,
    id,
    phase,
    startTime
  });
}

export { metricsHandler };
