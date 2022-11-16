import Form from "../Form"
import {useState, useEffect} from 'react'

const questions = [
    { title: 'Do you experience excessive moisture in your mouth?', value: 0},
    { title: 'Are your sinuses and nose moist?', value: 0},
    { title: 'Do you have a moist or oily skin/scalp?', value: 0},
    { title: 'Do you forget to drink water?', value: 0},
    { title: 'Are you laid back, less excitable/mellow?', value: 0},
    { title: 'Do you get bloated?', value: 0},
    { title: 'Do you experience nasal congestion?', value: 0},
    { title: 'Do you have slow or stagnant digestion?', value: 0},
    { title: 'Do you ever feel stagnant or congested in your pelvic area?', value: 0},
]

function Moist({getScore, moistScore, setMoistScore}) {

    const [surveyQuestions, setSurveyQuestions] = useState(questions)
    // const [score, setScore] = useState([])
    useEffect(() => {
        setMoistScore(getScore(surveyQuestions, 'damp'))
    }, [surveyQuestions])
    
    return (
        <div>
            <h1>Damp Signs</h1>
            <Form
                surveyQuestions={surveyQuestions}
                setSurveyQuestions={setSurveyQuestions}
            />
            {/* <button 
                onClick={() => setMoistScore(getScore(surveyQuestions, 'moist'))}
            >Get my moist constitution</button>
            <h1>Moist constitution:</h1>
            <h2>{moistScore[1]}</h2> */}
        </div>
    )
}

export default Moist