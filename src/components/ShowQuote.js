import React from "react"

const ShowQuote = ({ data, onSubmitHandler }) => {
    const quote = data.content;
    const author = data.author;

    return (
        <>
            <div className="quote-head">
                <h1>Random Quote Generator</h1>                        
            </div>
            <div className="quote-data">
                <p className="quote">{quote}</p>
                <p className="author">{author}</p>
            </div>
            <div className="new-quote">
                <button onClick={onSubmitHandler}>New Quote</button>
            </div> 
        </>
    );
};

export default ShowQuote;