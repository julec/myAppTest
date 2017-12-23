# myAppTest

## How it works
App validates your input file and shows you the resulting table, where you can edit the data.
It also shows 4 aggregations of your data: sum, average, min and max value.

Input is a CSV-file with two columns. Its first row is headers, all subsequent - data itself.
First column should contains a name of the company and second one -- its income.

## Start

Run in the project folder:
```
lein figwheel
```

Run once to compile styles and figwheel will watch the scss-changes:
```
lein sass4clj once
```

## Demo
[Demo](https://julec.github.io/myAppTest/)
