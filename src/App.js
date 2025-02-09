import React, {useCallback, useState} from 'react';
import './App.css';
import {exampleDataSet} from "./data-sets/example";
import {Board} from './board';
import {QuestionScreen} from './question-screen';

function App() {
    const [selectedQuestion, setSelectedQuestion] = useState();
    const [dataSet, setDataSet] = useState(exampleDataSet);
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
