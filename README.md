# IGT Jeopardy

To run go to https://swolekat.github.io/igt-jeopardy/

To do a specific data set add a query parameter. For example: https://swolekat.github.io/igt-jeopardy/?dataset=example2

## Creating data sets
You need to first add a file in the `data-sets` folder. The structure should be IDENTICAL to `example.js`

Then you need to modify `dataSetNameToValueMap` in `App.js`. The left side is the "name" and the right side will be the imported file.

## Deploying
Do a build and copy all the files to the root. Make sure to modify `index.html` so that the paths are like `./static`