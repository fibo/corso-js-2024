async function getMeteo() {
  try {
    const response = await fetch("http://localhost:3000/meteo");
    if (response.ok) {
      const json = await response.json();
      console.log(response.status, json);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error(error);
  }
}

getMeteo();
