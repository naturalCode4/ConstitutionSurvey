 import Dry from "./fourSurveys/Dry"
 import Moist from "./fourSurveys/Moist"
 import Cold from "./fourSurveys/Cold"
 import Warm from "./fourSurveys/Warm"
 import { Fragment, useState } from "react"
 
const getScore = (questions, constitutionType) => {
    const valueArray = questions.map(question => question.value)
    const totalYes = valueArray.reduce((prev, curr) => +prev + +curr, 0) // valueArray contained strings with numbers instead of numbers
    const fractionScore = `${totalYes}/${questions.length} ${constitutionType}`
    const percentScore = `${Math.round(totalYes/questions.length)}% ${constitutionType} constitution`
    return [fractionScore, percentScore, Math.round(totalYes/questions.length)]
}

 function Survey() {

    const [showScores, setShowScores] = useState(false)
    const [dryScore, setDryScore] = useState([])
    const [moistScore, setMoistScore] = useState([])
    const [coldScore, setColdScore] = useState([])
    const [warmScore, setWarmScore] = useState([])
    
    return (
        <Fragment>
            <div className="constitutions box">
                <Dry
                    getScore={getScore}
                    dryScore={dryScore}
                    setDryScore={setDryScore}
                />
                <Moist
                    getScore={getScore}
                    moistScore={moistScore}
                    setMoistScore={setMoistScore}
                />
            </div>
            <div className="constitutions box">
                <Cold
                    getScore={getScore}
                    coldScore={coldScore}
                    setColdScore={setColdScore}
                />
                <Warm
                    getScore={getScore}
                    warmScore={warmScore}
                    setWarmScore={setWarmScore}
                />
            </div>
            <p style={{ color: '#1C8A43', maxWidth: '725px', margin: 'auto', paddingLeft: '20px', paddingRight: '20px', marginTop: '40px', marginBottom: '40px' }}>
                Your results show how you can stay in balance. It is normal to run higher or lower in certain categories. With this information, you can learn to customize foods and herbs that will be most supportive. However, if you found yourself ranking high in most questions of a category, it is highly recommended to see a health professional.
            </p>
            {!showScores && 
                <button
                    className="box-button"
                    onClick={() => setShowScores(true)}
                >Get my constitution</button>
            }
            {showScores &&
                <div style={{display: 'flex', flexDirection: 'column', margin: 'auto'}}>
                    <p style={{color: '#1C8A43', fontSize: '48px', fontWeight: 'bold'}}>My Constitution:</p>
                    <div className="results" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                         <div>
                            <div className="constitution-box">
                                {
                                    dryScore[2] > moistScore[2] ?
                                    <Fragment>
                                        <h3 style={{ textAlign: 'left', color: 'goldenrod' }}>{dryScore[1]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'normal' }}>{moistScore[1]}</h3>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <h3 style={{ textAlign: 'left', color: 'goldenrod' }}>{moistScore[1]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'normal' }}>{dryScore[1]}</h3>
                                    </Fragment>
                                }
                            </div>
                        </div>
                        <div>
                            <div className="constitution-box">
                                {
                                    coldScore[2] > warmScore[2] ?
                                    <Fragment>
                                        <h3 style={{ textAlign: 'left', color: 'goldenrod' }}>{coldScore[1]}</h3>
                                        <h3 style={{ fontWeight: 'normal', textAlign: 'left' }}>{warmScore[1]}</h3>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <h3 style={{ textAlign: 'left', color: 'goldenrod' }}>{warmScore[1]}</h3>
                                        <h3 style={{ textAlign: 'left', fontWeight: 'normal' }}>{coldScore[1]}</h3>
                                    </Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
 }

 export default Survey