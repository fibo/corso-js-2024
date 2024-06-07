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
addEventListener("load", (event) => {
  const myChart = initBarChart(document.getElementById("main"));
  if (!myChart) return;
  const categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const values = [120, 200, 150, 80, 70, 110, 130];
  const option = barChartOption(categories, values);
  myChart.setOption(option);
});
