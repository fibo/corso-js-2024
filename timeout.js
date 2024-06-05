setTimeout(() => {
  console.log("ciao");
}, 3000);

function sleep(delay = 1000) {
  console.log("zzzz");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

await sleep(4000);

console.log("ciao prima 3");

let intervalId;
intervalId = setInterval(() => {
  console.log(Date.now(), "qualcosa");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 3000);
