import * as request from "superagent";

export default function http(opts) {
  return new Promise((resolve, reject) => {
    request[opts.method || "get"](opts.url)
      .set("accept", "json")
      .set("Content-Type", "application/json")
      .send(opts.data)
      .end((err, res) => {
        // Calling the end function will send the request
        if (err) {
          return reject(err);
        }

        resolve(res);
      });
  });
}
