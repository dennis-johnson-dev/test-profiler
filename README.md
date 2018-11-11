# Visualizing performance data for React.js Applications with Grafana

This project is a demo of using the data provided by the new `Profiler` component provided by the React.js core team. RFC - [https://github.com/reactjs/rfcs/pull/51](https://github.com/reactjs/rfcs/pull/51).

This repo emits the data that is provided to the `Profiler` component's `onRender` callback over a web worker to a Node.js server to proxy traffic using StatsD to eventually be seen with Grafana.

The network usage for emitting metrics has been moved to a web worker (see `metrics.js` and `worker.js`) to minimize the metrics gathering impact on the main thread.

The end result could be something like the following (you can create various graphs of your choosing):

![./docs/timings.png](./docs/timings.png)

## Setup

You will need to have docker installed.

[https://docs.docker.com/install/](https://docs.docker.com/install/)

Clone the following repo [https://github.com/kamon-io/docker-grafana-graphite](https://github.com/kamon-io/docker-grafana-graphite) and start the containers as noted in that README

```bash
git clone https://github.com/kamon-io/docker-grafana-graphite.git
cd docker-grafana-graphite
make up
```

Once the docker containers are running, `cd` into this project's directory and start the dev server

```bash
cd test-profiler
```

```bash
npm run dev
```

OR

```
yarn dev
```

This will start a server running the app on [port 3000](http://localhost:3000).

## Grafana Dashboards

Once you have the system up and running, you'll need to create some dashboards based on the metrics we're sending it.

With the grafana/grafite docker containers running, navigate to [http://localhost:80](http://localhost:80) to view the UI.

Login using admin/admin for username/password.

Create a new dashboard and start seeing your data!

Some useful metrics noted here are actual duration and base duration as well as the number of renders for a particular copmonent.

App Component Timings:

![./docs/app_response_time_queries.png](./docs/app_response_time_queries.png)

Component Render Count:

![./docs/render_count.png](./docs/render_count.png)

Don't forget to save your dashboard once you have it configured!

## Usage

Wrap your component with the `Profiler` component and use the `metricsHandler` method as the argument to `onRender`.

![./docs/profiler.png](./docs/profiler.png)

Now, refresh the page or otherwise trigger re-renders to start seeing the data flow through.

## 🚨 Warning 🚨

This project's network usage could cause bandwidth concern due to the amount of metrics emitted. This project is recommended for usage only in development and is very experimental.
