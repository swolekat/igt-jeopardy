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

    const { question, answer, image, embed } = selectedQuestion;
    return (
        <div className='question-screen' onClick={onClick}>
            <div className='question-screen-content'>
                {
                    showAnswer && <div className='question-text-content'>{answer}</div>
                }
                {
                    !showAnswer && !image && !embed && <div className='question-text-content'>{question}</div>
                }
                {
                    !showAnswer && image && (
                        <div className='image-question-container'>
                            <img src={image} />
                            <div className='image-question-text'>
                                {question}
                            </div>
                        </div>
                    )
                }
                {
                    !showAnswer && embed && (
                        <div className='embed-container'>
                            <iframe src={embed} className='embed-iframe'>{answer}</iframe>
                            <button className='embed-next-button' onClick={onClick}>
                                Go To Answer
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
};