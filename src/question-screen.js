import React, {useCallback, useState} from 'react';

export const QuestionScreen = ({selectedQuestion, goBack}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const onClick = useCallback(() => {
        if(showAnswer){
            goBack();
            return;
        }
        setShowAnswer(true);
    }, [showAnswer]);

    const { question, answer } = selectedQuestion;
    return (
        <div className='question-screen' onClick={onClick}>
            <div className='question-screen-content'>
                {showAnswer ? answer : question}
            </div>
        </div>
    )
};