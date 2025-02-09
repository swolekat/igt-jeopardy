const questionIndexArray = [0, 1, 2, 3, 4];
export const Board = ({dataSet, setSelectedQuestion}) => {
    return (
        <div className='board'>
            {
                dataSet.columns.map(c => (
                    <div className='category-cell'>
                        <div className='cell-content'>
                            {c.name}
                        </div>
                    </div>
                ))
            }
            {
                questionIndexArray.map(index => (
                    <>
                        {
                            dataSet.columns.map(c => {
                                const questionObject = c.questions[index];
                                const {value, answered} = questionObject;
                                if (!answered) {
                                    return (
                                        <div className='question-cell'
                                             onClick={() => setSelectedQuestion(questionObject)}>
                                            <div className='cell-content'>
                                                {value}
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <div className='question-cell answered'>
                                        <div className='cell-content'>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </>
                ))
            }
        </div>
    )
};