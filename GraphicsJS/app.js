function barChartOption(categories = [], values = []) {
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
    const json = await response.json();
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
  const { categories, values } = await getRevenues();
  const option = barChartOption(categories, values);
  myChart.setOption(option);
}

addEventListener("load", onLoad);
