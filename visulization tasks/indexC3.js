function generateChart(bindto, columns, type) {
  return c3.generate({
    bindto: bindto,
    data: {
      columns: columns,
      type: type
    },
    size: { height: 200 }
  });
}

var bar = generateChart(
  "#barChart",
  [["data1", 50, 20, 10, 40, 15, 25]],
  "bar"
);

var pie = generateChart(
  "#pieChart",
  [
    ["data1", 50],
    ["data2", 20],
    ["data3", 10]
  ],
  "pie"
);
