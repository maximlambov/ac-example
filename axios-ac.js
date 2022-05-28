import axios from "axios";

const controller = new AbortController();

const timer = setTimeout(() => {
  controller.abort();
}, 2000);

const promise = axios.get("http://123.123.123.123", {
  signal: controller.signal
})

console.time('promise');

promise
.then(() => {
  console.log("finished");
})
.catch((error) => {
  console.log("error", error.message);
}).finally(() => {
  console.timeEnd('promise');
})