const from = document.querySelector("input[name=from]");
const to = document.querySelector("input[name=to]");
const form = document.querySelector("form");
const chartElement = document.getElementById("main");
let revenues = { categories: [], values: [] };
let myChart;

form.onsubmit = update;

function update(event) {
  event.preventDefault();
  if (!myChart) {
    return;
  }
  const from = event.target.from.value;
  const to = event.target.to.value;

  const filteredRevenues = filterRevenues(revenues, { from, to });
  const option = barChartOption(filteredRevenues);

  console.log(filteredRevenues);

  myChart.setOption(option);
}

function barChartOption({ categories = [], values = [] } = {}) {
  return {
    xAxis: {
      type: "category",
      data: categories,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: values,
        type: "bar",
      },
    ],
  };
}

function initBarChart(element) {
  if (!element) return;
  const chart = echarts.init(element);
  const option = barChartOption();
  chart.setOption(option);
  return chart;
}
function filterRevenues({ categories = [], values = [] } = {}, { from, to }) {
  let firstIndex = 0;
  let secondIndex = 0;

  for (let i = 0; i < categories.length; i++) {
    if (from === categories[i]) {
      firstIndex = i;
    }
    if (to === categories[i]) {
      secondIndex = i + 1;
    }
  }

  return {
    categories: categories.slice(firstIndex, secondIndex),
    values: values.slice(firstIndex, secondIndex),
  };
}

function datesBounds(dates = []) {
  let min = "9999-99-99";
  let max = "0000-00-00";

  if (dates.length === 0) {
    return { min: undefined, max: undefined };
  }

  for (let date of dates) {
    if (date < min) {
      min = date;
    }
    if (date > max) {
      max = date;
    }
  }
  return { min, max };
}

function setBounds({ min, max }) {
  const lastDate = addDays(7, min);

  from.min = min;
  from.max = max;
  to.min = min;
  to.max = max;
  from.value = min;
  to.value = lastDate.toJSON().substring(0, 10);
}

function addDays(num, t1 = new Date()) {
  const t2 = new Date(t1);

  t2.setDate(t2.getDate() + num);

  return t2;
}

async function getRevenues() {
  try {
    const url = "http://localhost:3000/revenues";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    console.error(error);
    return {
      categories: [],
      values: [],
    };
  }
}

async function onLoad() {
  myChart = initBarChart(chartElement);

  if (!myChart) return;
  revenues = await getRevenues();
  const bounds = datesBounds(revenues.categories);
  setBounds(bounds);
  form.classList.remove("not-visible");
  console.log(revenues);
  const option = barChartOption(revenues);
  myChart.setOption(option);
}

addEventListener("load", onLoad);
