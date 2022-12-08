import LinkButtons from "./LinkButtons"

function KeyInfo() {
    return (
        <div className="key_info">
            <h1><u>About Constitutions</u></h1>
            <p>For more information on constitution and herbal formulas download <a href="https://www.healingfromscratch.com/ebooks" target="_blank">The Medicinal Kitchen</a>, and for personalized consultation, diet, and supplements to support balancing your constitution, <a href="https://healingfromscratch.wufoo.com/forms/m161wbdq1pgmfsx/" target="_blank"><i>fill out an inquiry</i></a></p>
            <LinkButtons/>
            <br></br><br></br><br></br>
            <h1><u>Basic information about your score</u></h1>

            <p className="left-align" style={{ fontWeight: 'normal' }}>These lists are based on traditional medicine philosophies including Chinese medicine, Ayurveda, and Western Vitalism. Keep in mind that each person is unique and may experience foods and herbs differently. Listen to your body if you feel a food or herb affects your constitution differently than what is listed.</p>
            <br></br><br></br>


            <p className="left-align" style={{ fontWeight: 'normal' }}><u style={{ fontWeight: 'bold' }}>DRY</u><br></br>If your constitution tends towards dry, choose less drying foods and opt for more moistening foods. You can also balance dry foods with a higher ratio of moistening foods.</p>
            <p style={{ fontWeight: 'normal' }}><br></br><u style={{ fontWeight: 'bold' }}>Drying Foods</u><br></br></p>
            <ul className="left-align" style={{ fontWeight: 'normal' }}>
                <li>Crunchy foods like biscuits, crisps, crackers</li>
                <li>Nuts and seeds</li>
                <li>Grains - bread, pasta, rice, oats, buckwheat, etc.</li>
                <li>Beans, lentils and legumes</li>
                <li>Roasted vegetables</li>
                <li>Raw foods</li>
                <li>Green tea </li>
                <li>Cinnamon</li>
                <li>Most dried spices</li>
                <li>Rosemary</li>
                <li>Sage</li>
                <li>Oregano</li>
            </ul>
            <br></br>

            <p className="left-align" style={{ fontWeight: 'normal' }}><br></br><u style={{ fontWeight: 'bold' }}>DAMP/MOIST</u><br></br>If your constitution tends towards damp/moist, choose less moistening foods and opt for more tonifying or drying foods. You can also balance moistening foods with a higher ratio of drying or tonifying foods.</p>
        
            <p style={{ fontWeight: 'normal' }}><br></br><u style={{ fontWeight: 'bold' }}>Moistening Foods</u><br></br></p>
            <ul className="left-align" style={{ fontWeight: 'normal' }}>
                <li>Dairy</li>
                <li>Gluten and wheat-containing foods - bread, pasta, pastries, etc.</li>
                <li>High-water content fruits and vegetables like watermelon, pineapple and cucumber</li>
                <li>Sugar and sweeteners</li>
                <li>Eggs</li>
                <li>Meat</li>
                <li>Soy</li>
                <li>Demulcent (slimy) foods - Okra, Flax, Chia, Aloe vera, etc.</li>
                <li>Certain mushrooms</li>
                <li>Oil</li>
                <li>Water with electrolytes or minerals</li>
            </ul>
            <br></br>

            <p className="left-align" style={{ fontWeight: 'normal' }}><br></br><u style={{ fontWeight: 'bold' }}>COOL/COLD</u><br></br>If your constitution tends towards cool, choose less cooling foods and opt for more warming foods. You can also balance cooling foods with a higher ratio of warming foods.</p>
            <p style={{ fontWeight: 'normal' }}><br></br><u style={{ fontWeight: 'bold' }}>Cooling Foods</u><br></br></p>
            <ul className="left-align" style={{ fontWeight: 'normal' }}>
                <li>Banana</li>
                <li>Melons - watermelon, honeydew, canteloupe, musk melon, canary, etc.</li>
                <li>Strawberries</li>
                <li>Raw vegetables</li>
                <li>Leafy vegetables</li>
                <li>Cold drinks</li>
                <li>Iced water</li>
                <li>Peppermint tea</li>
                <li>Turmeric</li>
                <li>Bitter herbs & veggies - mustard greens, chicory, dandelion leaves, radicchio, endive, bitter melon, etc.</li>
            </ul>
            <br></br>

            <p className="left-align" style={{ fontWeight: 'normal' }}><br></br><u style={{ fontWeight: 'bold' }}>WARM/HOT</u><br></br>If your constitution tends towards warm, choose less heating foods and opt for more cooling foods. You can also balance hot foods with a higher ratio of cooling foods.</p>
            <p style={{ fontWeight: 'normal' }}><br></br><u style={{ fontWeight: 'bold' }}>Warming Foods</u><br></br></p>
            <ul className="left-align" style={{ fontWeight: 'normal' }}>
                <li>Onion</li>
                <li>Garlic</li>
                <li>Ginger</li>
                <li>Black pepper</li>
                <li>Peppers (all kinds)</li>
                <li>Chilli</li>
                <li>Cayenne</li>
                <li>Coriander</li>
                <li>Cumin</li>
                <li>Turmeric</li>
                <li>Ginger</li>
                <li>Cinnamon</li>
                <li>Hot sauces</li>
                <li>Tomatoes</li>
                <li>Mangoes</li>
                <li>Oranges</li>
                <li>Coffee</li>
                <li>Caffeinated beverages</li>
                <li>Energy drinks</li>
                <li>Oils</li>
                <li>Fried foods</li>
                <li>Red meat</li>
            </ul>
            <br></br>

            <p className="left-align" style={{ fontWeight: 'normal' }}><br></br><u style={{ fontWeight: 'bold' }}>BALANCED</u><br></br>If your constituition tends towards to be fairly balanced, avoid excessive amounts of dry or moist foods and choose a balance of moistening and drying foods.</p>
            <br></br>
            <p className="left-align" style={{ fontWeight: 'normal' }}><u style={{ fontWeight: 'bold' }}>BOTH DRY AND DAMP/MOIST</u><br></br>If you are exhibiting both dry and damp/moist signs, this could indicate a medical condition where dryness and moisture exist in different areas of the body. It is recommended to see a health practitioner.</p><br></br>
            <p className="left-align" style={{ fontWeight: 'normal' }}><u style={{ fontWeight: 'bold' }}>BOTH COOL AND WARM</u><br></br>If you are exhibiting both cool and warm signs, this could indicate a medical condition where cold and heat exist in different areas of the body. It is recommended to see a health practitioner.</p><br></br>
            <br></br>

            <p className="left-align" style={{ fontWeight: 'normal' }}><i><u style={{ fontWeight: 'bold' }}>Foods may affect you differently at different times</u></i><br></br>Environmental factors can also contribute to changes in your constitution. For example, ginger may be more heating in a warm than a humid climate. Eating seasonally and according to your environment can have a positive impact on constitution and overall health. Bringing awareness to how your mouth and body feel after eating is also a great way to connect to your food consumption intuition.</p>

            <br></br><br></br>

         </div>
    )
}

export default KeyInfo


// Food Constitution List

// This list is based on traditional Vitalism medicine philosophies including Chinese medicine and Western Vitalism. Keep in mind that each person is unique and may experience foods and herbs differently. Listen to your body if you feel a food or herb affects your constitution differently than what is listed.


// Warming Foods
// Onion
// Garlic
// Ginger
// Black pepper
// Peppers (all kinds)
// Chilli
// Cayenne
// Coriander
// Cumin
// Turmeric
// Ginger
// Cinnamon 
// Hot sauces
// Tomatoes
// Mangoes
// Oranges
// Coffee
// Caffeinated beverages
// Energy drinks
// Oils
// Fried foods
// Red meat

// Cooling Foods
// Banana
// Melons 
// Watermelon
//  Strawberries
// Raw vegetables
// Leafy vegetables
// Cold drinks
// Iced water
// Peppermint tea
// Bitter herbs & veggies (mustard greens, chicory, dandelion leaves, radicchio, endive, bitter melon, etc)

// Drying Foods
// Crunchy foods like biscuits, crisps, crackers
// Nuts and seeds
// Grains - bread, pasta, rice, potatoes, millet, buckwheat, etc
// Beans, lentils and legumes
// Roasted vegetables
// Raw food
// Green tea 
// Cinnamon
// Most dried spices
// Rosemary
// Sage
// Oregano

// Moistening Foods
// Dairy
// Gluten and wheat-containing foods (bread, pasta, pastries)
// High-water content fruits and vegetables like watermelon, pineappleand cucumber
// Sugar and sweeteners
// Eggs
// Meat
// Soy
// Demulcent (slimy) foods- Okra, Flax, Chia, Aloe vera
// Certain Mushrooms
// Water with electrolytes or minerals
// Oils 