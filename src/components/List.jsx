import React from 'react'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io'
const List = ({task, deleteTask, completeTask, editTask}) => {
    return (
        <div className='m-auto mt-4'>
            <ul className='w-72 text-sm font-md text-gray-900 bg-gray-200 border border-gray-300 m-auto'>
                <li className= {`${task.isCompleted ? 'text-green-400 font-bold':'w-full px-3 py-2 border-b border-gray-200 rounded-lg'}`}>
                    {task.title}
                </li>
                <div className='py-2'>
                <button className='ml-3 px-2 rounded-md text-white bg-gray-400 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400' onClick={()=>{
                    completeTask(task.id)
                }}><IoCheckmarkDoneCircleOutline/></button>
                <button className='ml-3 px-2 rounded-md text-white bg-gray-400 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400' onClick={()=>{
                    deleteTask(task.id)
                }}>del</button>
                <button className='ml-3 px-2 rounded-md text-white bg-gray-400 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400'
                onClick={()=>{editTask(task.id)}}>edit</button>

                </div>
            </ul>
        </div>
    )
}

export default List
