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
      return json;
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error(error);
  }
}

const data = await getMeteo();

const container = document.createElement("ul");
container.classList.add("container");
container.style.padding = "1em";
document.body.appendChild(container);

for (let { city, temperature } of data) {
  const element = document.createElement("li");
  element.innerHTML = `
  <strong>
  ${city}
  </strong> 
  ${temperature}
  `;
  container.appendChild(element);
}

console.log(data);
