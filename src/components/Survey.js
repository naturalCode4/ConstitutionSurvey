 import Dry from "./fourSurveys/Dry"
 import Moist from "./fourSurveys/Moist"
 import Cold from "./fourSurveys/Cold"
 import Warm from "./fourSurveys/Warm"
 import { Fragment, useState } from "react"
 
const getScore = (questions, constitutionType) => {
    const valueArray = questions.map(question => question.value)
    const totalYes = valueArray.reduce((prev, curr) => +prev + +curr, 0) // valueArray contained strings with numbers instead of numbers
    const fractionScore = `${totalYes}/${questions.length} ${constitutionType}`
    const percentScore = `${Math.round(totalYes/questions.length)} % ${constitutionType} constitution`
    return [fractionScore, percentScore]
}

// const getAllScores = () => {
    
// }

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
            <button 
                className="box"
                onClick={() => setShowScores(true)}
                style={{ margin: '0px', padding: '10px', marginBottom: '40px' }}
            >Get my constitutions</button>
            {showScores &&
                <Fragment>
                    <div style={{ padding: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                         <div style={{ display: 'flex' }}>
                            <div className="box-button">
                                <h3>{showScores && dryScore[1]}</h3>
                            </div>
                            <div className="box-button">
                                <h3>{showScores && moistScore[1]}</h3>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className="box-button">
                                 <h3>{showScores && coldScore[1]}</h3>
                            </div>
                            <div className="box-button">
                             <h3>{showScores && warmScore[1]}</h3>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
 }

 export default Survey