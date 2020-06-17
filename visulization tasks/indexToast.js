function barChart(barData) {
  var container = document.getElementById("bar-chart");
  var data = barData.data;
  var options = barData.options;
  var theme = {
    series: {
      colors: [
        "#83b14e",
        "#458a3f",
        "#295ba0",
        "#2a4175",
        "#289399",
        "#289399",
        "#617178",
        "#8a9a9a",
        "#516f7d",
        "#dddddd"
      ]
    }
  };

  //For apply theme

  tui.chart.registerTheme("myTheme", theme);
  options.theme = "myTheme";

  tui.chart.barChart(container, data, options);
}
function pieChart(pieData) {
  var container = document.getElementById("pie-chart");
  var data = pieData.data;

  var options = pieData.options;
  var theme = {
    series: {
      colors: [
        "#83b14e",
        "#458a3f",
        "#295ba0",
        "#2a4175",
        "#289399",
        "#289399",
        "#617178",
        "#8a9a9a",
        "#516f7d",
        "#dddddd"
      ]
    }
  };

  // For apply theme

  tui.chart.registerTheme("myTheme", theme);
  options.theme = "myTheme";

  tui.chart.pieChart(container, data, options);
}
fetch("http://localhost:3000/Bar")
  .then(resp => {
    return resp.json();
  })
  .then(barData => {
    barChart(barData);
  });
fetch("http://localhost:3000/Pie")
  .then(resp => {
    return resp.json();
  })
  .then(pieData => {
    pieChart(pieData);
  });
