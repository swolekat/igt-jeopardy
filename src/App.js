import React, {useCallback, useState} from 'react';
import './App.css';
import {exampleDataSet} from "./data-sets/example";
import {Board} from './board';
import {QuestionScreen} from './question-screen';
import {exampleDataSet2} from "./data-sets/example2";
import {firstCategoryDataSet} from "./data-sets/firstCategory";
import {firstBoardTestDataSet} from "./data-sets/firstBoardTest";
import {secondBoardTestDataSet} from "./data-sets/secondBoardTest";

const dataSetNameToValueMap = {
    example: exampleDataSet,
    example2: exampleDataSet2,
    firstcategory: firstCategoryDataSet,
    firstBoard: firstBoardTestDataSet,
    secondBoard: secondBoardTestDataSet,

};
const urlParams = new URLSearchParams(window.location.search);
const dataSetName = urlParams.get('dataset');

const queryParamDataSet = dataSetNameToValueMap[dataSetName] || exampleDataSet;

function App() {
    const [selectedQuestion, setSelectedQuestion] = useState();
    const [dataSet] = useState(queryParamDataSet);
    const goBack = useCallback(() => {
        selectedQuestion.answered = true;
        setSelectedQuestion(null);
    }, [selectedQuestion]);

  return (
    <div className="App">
        {
            !selectedQuestion && (
                <Board dataSet={dataSet} setSelectedQuestion={setSelectedQuestion}></Board>
            )
        }
        {
            selectedQuestion && (
                <QuestionScreen selectedQuestion={selectedQuestion} goBack={goBack} />
            )
        }
    </div>
  );
}

export default App;
