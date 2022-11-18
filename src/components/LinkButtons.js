function LinkButtons() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener noreferrer');
    }

    return (
        <div 
            style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', width: 'fit-content', margin: 'auto', marginTop: '30px' }}
        >
            <button
                onClick={() => openInNewTab('https://www.healingfromscratch.com/ebooks')}
                className="two-buttons"
                >Download The<br></br>Medicinal Kitchen</button>
            <button
                onClick={() => openInNewTab('https://healingfromscratch.wufoo.com/forms/m161wbdq1pgmfsx/')}
                className="two-buttons"
            >Fill out an inquiry</button>
        </div>
    )
}

export default LinkButtons