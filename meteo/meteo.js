async function getMeteo() {
  const data = await fetch("http://localhost:3000/meteo");
  console.log(data);
}

getMeteo();
