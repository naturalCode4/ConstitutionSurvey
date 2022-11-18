import LinkButtons from "./LinkButtons"

function KeyInfo() {
    return (
        <div className="key_info">
            <h1 className="justify"><u>About Constitutions</u></h1>
            <p>For more information on constitution and herbal formulas download <a href="https://www.healingfromscratch.com/ebooks" target="_blank">The Medicinal Kitchen</a>, and for personalized consultation, diet, and supplements to support balancing your constitution, <a href="https://healingfromscratch.wufoo.com/forms/m161wbdq1pgmfsx/" target="_blank"><i>fill out an inquiry</i></a></p>
            <LinkButtons/>
            <br></br><br></br><br></br>
            <h1><u>Basic information about your score</u></h1>
            <p><u>DRY</u><br></br>If your constitution tends towards dry side, choose less drying foods and opt for more moistening foods. You can also balance dry foods with a higher ratio of moistening foods.</p>
            <p><br></br><u>DAMP/MOIST</u><br></br>If your constitution is mostly damp/moist, choose less moistening foods and opt for more tonifying or drying foods. You can also balance moistening foods with a higher ratio of drying or tonifying foods.</p>
            <p><br></br><u>COOL/COLD</u><br></br>If your constitution tends towards cool, choose less cooling foods and opt for more warming foods. You can also balance cooling foods with a higher ratio of warming foods.</p>
            <p><br></br><u>WARM/HOT</u><br></br>If your constitution tends towards warm, choose less heating foods and opt for more cooling foods. You can also balance hot foods with a higher ratio of cooling foods.</p>
            <p><br></br><u>DRY</u><br></br>If your constituition tends towards fairly balanced, avoid excessive amounts of dry or moist foods and choose a balance of moistening and drying foods.</p>
            <br></br><br></br><br></br>
            <p><u>BOTH DRY AND DAMP/MOIST</u><br></br>If you are exhibiting both dry and damp signs, this could indicate a medical condition where dryness and moisture exist in different areas of the body. It is recommended to see a health practitioner.</p>
            <p><br></br><u>BOTH COLD AND WARM</u><br></br>If you are exhibiting both cool and warm signs, this could indicate a medical condition where cold and heat exist in different areas of the body. It is recommended to see a health practitioner.</p>
            <br></br><br></br>
         </div>
    )
}

export default KeyInfo
