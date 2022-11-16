import { Fragment } from "react"

function Form({surveyQuestions, setSurveyQuestions}) {

    return (
        <Fragment>
            {surveyQuestions.map((surveyQuestion, index) => (
                <fieldset onChange={e => setSurveyQuestions(
                        [...surveyQuestions.slice(0, index),
                        {title: surveyQuestion.title, value: e.target.value},
                        ...surveyQuestions.slice(index + 1, surveyQuestions.length)])}>
                    <legend>{surveyQuestion.title}</legend>
                    {/* <input type="radio" name={`${surveyQuestion.title}`} id="yes" value={1} /><label for="yes">Yes</label><br/>
                    <input type="radio" name={`${surveyQuestion.title}`} id="moderate" value={.5} /><label for="moderate">Moderate</label><br/>
                    <input type="radio" name={`${surveyQuestion.title}`} id="no" value={0}  /><label for="no">No</label><br/> */}
                    <div className="slider_container">
                        <label className="slider_label" for="slider">0 (never)</label><br/>
                        <div classname="slider-container-2">
                            <input className="slider" type="range" name={`${surveyQuestion.title}`} id="slider" min={0} max={100} step={25} value={surveyQuestion.value}/>
                        </div>
                        <label className="slider_label" for="slider">4 (frequently / severe)</label><br/>
                    </div>
                </fieldset>
            ))}
            <br></br>
        </Fragment>
    )
}

export default Form