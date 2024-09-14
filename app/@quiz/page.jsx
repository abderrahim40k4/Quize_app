import React from 'react'

const Quize = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span class="text-blue-600 dark:text-blue-500">Question Numbber</span> CRM.</h1>
      <div className="shadow-xl my-10 p-10 w-[90%] rounded-lg flex flex-col justify-center items-center shadow-blue-300 ">
        <h4 className="mb-4 text-center  text-xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-4xl  text-blue-600 dark:text-blue-500">
          {0}
        </h4>
        <div className="flex justify-evenly items-center w-full my-20 flex-wrap">
        <button
                  className=
                    "w-[40%] my-4 bg-white hover:bg-blue-600 hover:text-gray-100  text-gray-800 font-semibold py-4 px-4 shadow-blue-200   rounded-lg shadow-2xl"
        
                >
                  {0}
                </button>
          </div>

          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow"
          >
            Next
          </button>
      </div>
    </div>
  )
}

export default Quize