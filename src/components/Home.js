import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Snippet from './Snippet';
import SnippetEditor from './SnippetEditor';

const Home = () => {
    const [snippets, setSnippets] = useState([]);
    const [SnippetEditorOpen, setSnippetEditorOpen] = useState(false);
    const [editeSnippetData, setEditeSinppetData] = useState(null)


    async function getSnippets() {
        const snippetsRes = await axios.get('http://localhost:3000/snippet');
        setSnippets(snippetsRes.data)
    }

    function editeSnippet(snippetData){
        setEditeSinppetData(snippetData);
        setSnippetEditorOpen(true)
    }
    const renderSnippets = () => {
        let sortedSnippets = [...snippets]
        sortedSnippets = sortedSnippets.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return sortedSnippets.map((snippet, i) => {
            return (
                <Snippet
                    key={i}
                    snippet={snippet}
                    getSnippets={getSnippets}
                    editeSnippet={editeSnippet}
                />
            ) 
})
    }

    useEffect(() => {
        getSnippets()
    }, []);
    return (
        <div className='home'>
        {!SnippetEditorOpen && 
            <button  className='btn btn-add-snippet'
            onClick={() => setSnippetEditorOpen(true)}>
            Add snippet
            </button>}
            {SnippetEditorOpen && (
            <SnippetEditor 
                setSnippetEditorOpen = {setSnippetEditorOpen}
                getSnippets={getSnippets}
                editeSnippetData={editeSnippetData}
            />
            )}
        {renderSnippets()}
        </div>
    )
}

export default Home
