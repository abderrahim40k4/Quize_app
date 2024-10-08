'use client'
import useQuiz from '@/app/Store'
import React from 'react'

const ButtonDef = () => {
    const addStatus = useQuiz(state=>state.addStatus)
  return (
    <div>
        
<button type="button" onClick={() => addStatus('start')} className="p-4 w-full me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-lg border border-gray-200 hover:bg-blue-500 hover:text-yellow-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Start Quize Now</button>

    </div>
  )
}

export default ButtonDef