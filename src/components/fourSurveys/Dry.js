import {useState, useEffect} from 'react'
import Form from '../Form'

const questions = [
    { title: 'Do you experience dry mouth?', value: 0},
    { title: 'Do you get dry nose or dry sinuses?', value: 0},
    { title: 'Do you have dry skin and/or a dry scalp?', value: 0},
    { title: 'Are you nails dry, chipped, and/or brittle?', value: 0},
    { title: 'Are you often thirsty?', value: 0},
    { title: 'Do you often feel agitated?', value: 0},
    { title: 'Do you have scanty urinatation?', value: 0},
]

function Dry({getScore, dryScore, setDryScore}) {

    const [surveyQuestions, setSurveyQuestions] = useState(questions)
    useEffect(() => {
        setDryScore(getScore(surveyQuestions, 'dry'))
    }, [surveyQuestions])

    console.log('surveyQuestions:', surveyQuestions);
    return (
        <div>
            <h1>Dry Signs</h1>
            <Form
                surveyQuestions={surveyQuestions}
                setSurveyQuestions={setSurveyQuestions}
            />
            {/* <button 
                onClick={() => setDryScore(getScore(surveyQuestions, 'dry'))}
            >Get my dry constitution</button>
            <h1>Dry constitution:</h1>
            <h2>{dryScore[1]}</h2> */}
        </div>
    )
}

export default Dry