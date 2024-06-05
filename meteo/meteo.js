async function getMeteo() {
  try {
    const controller = new AbortController();

    setTimeout(() => {
      controller.abort();
    }, 10_000);

    const response = await fetch("http://localhost:3000/meteo", {
      signal: controller.signal,
    });

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
