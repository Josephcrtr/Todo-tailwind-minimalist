import React from 'react'
import { useState } from 'react'

const Input = ({addTask}) => {
    const [input, setInput] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        addTask(input)
        setInput('')
        console.log(input)
    }

    const handleChange =(e)=>{
        setInput(e.target.value)
    }
    return (
        <div className='m-auto mb-9'>
            <form onSubmit={handleSubmit} className='m-auto'>
                <input type='text' 
                placeholder='Set tasks..'
                className='text-black-200 w-72 border border-gray-500 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300'
                 value={input}
                 onChange={handleChange}
                 />
                 <button className='ml-3 px-2 rounded-md text-white bg-gray-400 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400'>Add</button>
            </form>
        </div>
    )
}

export default Input
