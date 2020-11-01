
// console.log(rows)
var populateTable = function (data, columns) {
  var table = d3.select('body').append('table')
  var thead = table.append('thead')
  var tbody = table.append('tbody')

  thead.append('tr')
    .selectAll('th')
    .data(columns)
    .enter()
    .append('th')
    .text(function (d) { return d })

  var rows = tbody.selectAll('tr')
    .data(data)
    .enter()
    .append('tr')

  var cells = rows.selectAll('td')
    .data(function (row) {
      return columns.map(function (column) {
      return { column: column, value: row[column] }
      })
    })
    .enter()
    .append('td')
    .text(function (d) { return d.value })

  return table;
}

d3.csv('data/tweet_dates.csv', function (data) {
  var columns = ['date', 'text']
  populateTable(data, columns)
})
console.log(columns[date])

// d3.csv('data/tweet_dates.csv').then(function(data){
//   console.log(data);
// });

// d3.csv('data/tweet_dates.csv').then(function(data) {
//   console.log(data[0]);
// });

// d3.csvParse("data/tweet_dates.csv", function(d) {
//   return {
//     date : d.date,
//     text : d.text,
//   };
// });
