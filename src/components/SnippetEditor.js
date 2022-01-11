import axios from 'axios'
import React, { useEffect, useState } from 'react'

function SnippetEditor({
    getSnippets,
    setSnippetEditorOpen,
    editeSnippetData,
    }) {
    const [editorTitle, setEditorTitle] = useState('')
    const [editorDescription, setEditorDescription] = useState('')
    const [editorCode, setEditorCode] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        const snippetData = {
        title: editorTitle ? editorTitle : undefined,
        description: editorDescription ? editorDescription : undefined,
        code: editorCode ? editorCode : undefined,
        }
        if (!editeSnippetData)
        await axios.post('http://localhost:3000/snippet', snippetData)
        else
        await axios.put(`http://localhost:3000/snippet/${editeSnippetData._id}`, snippetData)
        getSnippets()
        closeEditor()
    }

    function closeEditor() {
        setSnippetEditorOpen(false)
        setEditorCode('')
        setEditorDescription('')
        setEditorTitle('')
    }

    useEffect(() => {
        if (editeSnippetData) {
            setEditorTitle(editeSnippetData.title ? editeSnippetData.title : '');
            setEditorDescription(editeSnippetData.description ? editeSnippetData.description : '');
            setEditorCode(editeSnippetData.code ? editeSnippetData.code : '');
        }
    }, [editeSnippetData])
    return (
        <div className="snippet-editor">
        <form onSubmit={onSubmit}>
            <label htmlFor="editor-title">Title</label>
            <input
            id="editor-title"
            type="text"
            value={editorTitle}
            onChange={(e) => setEditorTitle(e.target.value)}
            />

            <label htmlFor="editor-description">Description</label>
            <input
            id="editor-description"
            type="text"
            value={editorDescription}
            onChange={(e) => setEditorDescription(e.target.value)}
            />

            <label htmlFor="editor-code">Code</label>
            <textarea
            id="editor-code"
            type="text"
            value={editorCode}
            onChange={(e) => setEditorCode(e.target.value)}
            ></textarea>
            <button className='btn btn--save' type="submit">Save Submit</button>
            <button className='btn btn--cancel' onClick={closeEditor} type="button">
            Cancel
            </button>
        </form>
        </div>
    )
}

export default SnippetEditor
