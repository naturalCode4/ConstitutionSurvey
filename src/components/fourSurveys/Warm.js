import Form from "../Form"
import {useState, useEffect} from 'react'

const questions = [
    { title: 'Are you sensitive to heat?', value: 0},
    { title: 'Do you get warm hands or feet?', value: 0},
    { title: 'Do you have a yellow coat on your tongue?', value: 0},
    { title: 'Do you have redness on your tongue?', value: 0},
    { title: 'Do you have a tendency toward agitation?', value: 0},
    { title: 'Do you have a warm core?', value: 0},
    { title: 'Does your body temperature run normal to high?', value: 0},
    { title: 'Do you usually run warm-hot?', value: 0},
    { title: 'Do you use very few covers at night?', value: 0},
    { title: "Do you wear short sleeves when others are wearing jackets?", value: 0},
    { title: 'Is your urine dark yellow?', value: 0},
    { title: 'Do you have a rapid pulse?', value: 0},
    { title: 'Is your stool hard?', value: 0},
    { title: 'Do you enjoy cold drinks more than cold drinks?', value: 0},
    { title: 'Are you often thirsty?', value: 0},
]

function Warm({getScore, warmScore, setWarmScore}) {

    const [surveyQuestions, setSurveyQuestions] = useState(questions)
    // const [score, setScore] = useState([])
    useEffect(() => {
        setWarmScore(getScore(surveyQuestions, 'warm'))
    }, [surveyQuestions])
    
    return (
        <div>
            <h1>Warm Signs</h1>
            <Form
                surveyQuestions={surveyQuestions}
                setSurveyQuestions={setSurveyQuestions}
            />
            {/* <button 
                onClick={() => setWarmScore(getScore(surveyQuestions, 'warm'))}
            >Get my warm constitution</button>
            <h1>Warm constitution:</h1>
            <h2>{warmScore[1]}</h2> */}
        </div>
    )
}

export default Warm