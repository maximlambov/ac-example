import fetch, { AbortError } from "node-fetch";


const controller = new AbortController();

const timeout = setTimeout(() => {
  controller.abort()
}, 3000);

const promise = fetch('http://123.123.123.123', {
  signal: controller.signal
})

console.time('promise');

promise
.then(() => {
  console.log("finished");
})
.catch((error) => {
  if (error instanceof AbortError) {
    return console.log("AbortError");
  } 
  console.log("error", error.message);
}).finally(() => {
  console.timeEnd('promise');
})