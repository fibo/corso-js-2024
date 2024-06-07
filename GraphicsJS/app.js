const from = document.querySelector("input[name=from]");
const to = document.querySelector("input[name=to]");
const form = document.querySelector("form");
let revenues = { categories: [], values: [] };
form.onsubmit = update;
const min = "2024-01-01";
const max = "2024-01-31";
from.min = min;
from.max = max;
to.min = min;
to.max = max;
from.value = "2024-01-01";
to.value = "2024-01-10";

function update(event) {
  event.preventDefault();
  const from = event.target.from.value;
  const to = event.target.to.value;

  console.log(from, to);
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
  const myChart = initBarChart(document.getElementById("main"));
  if (!myChart) return;
  revenues = await getRevenues();
  console.log(revenues);
  const option = barChartOption(revenues);
  myChart.setOption(option);
}

addEventListener("load", onLoad);
