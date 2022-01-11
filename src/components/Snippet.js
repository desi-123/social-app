import React from 'react'
import axios from 'axios'
function Snippet({ snippet, getSnippets, editeSnippet }) {
    const deleteSnippet = async () => {
        await axios.delete(`http://localhost:3000/snippet/${snippet._id}`)

        getSnippets()
    }

    return (
        <div className="snippet">
            {snippet.title && <h2 className="snippet__title">{snippet.title}</h2>}
            {snippet.description && (
            <p className="snippet__description">{snippet.description}</p>
            )}
            {snippet.code && (
            <pre className="snippet__code">
                <code>{snippet.code}</code>
            </pre>
            )}
            <button className='btn btn--edit' onClick={() => editeSnippet(snippet)}>Edite</button>
            <button className='btn btn--delete' onClick={deleteSnippet}>Delete</button>
        </div>
    )
}

export default Snippet
