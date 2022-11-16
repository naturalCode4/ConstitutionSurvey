import Form from "../Form"
import {useState, useEffect} from 'react'

const questions = [
    { title: 'Are you sensitive to cold?', value: 0},
    { title: 'Do you get cold hands or feet?', value: 0},
    { title: 'Do you have a white tongue coat?', value: 0},
    { title: 'Is your tongue pale?', value: 0},
    { title: 'Is your digestion sluggish?', value: 0},
    { title: 'Does your body temperature run low to normal?', value: 0},
    { title: 'Do you often feel cool/cold?', value: 0},
    { title: "Do you need a sweater/jacket when others aren't wearing one?", value: 0},
    { title: 'Do you urinate frequently or in large amounts?', value: 0},
    { title: 'Is your pulse slow/deep?', value: 0},
    { title: 'Is your stool thin?', value: 0},
    { title: 'Do you prefer warm drinks over cold drinks?', value: 0},
]

function Cold({getScore, coldScore, setColdScore}) {

    const [surveyQuestions, setSurveyQuestions] = useState(questions)
    useEffect(() => {
        setColdScore(getScore(surveyQuestions, 'cold'))
    }, [surveyQuestions])
    // const [score, setScore] = useState([])
    
    return (
        <div>
            <h1>Cold Signs</h1>
            <Form
                surveyQuestions={surveyQuestions}
                setSurveyQuestions={setSurveyQuestions}
            />
            {/* <button 
                onClick={() => setColdScore(getScore(surveyQuestions, 'cold'))}
            >Get my cold constitution</button>
            <h1>Cold constitution:</h1>
            <h2>{coldScore[1]}</h2> */}
        </div>
    )
}

export default Cold