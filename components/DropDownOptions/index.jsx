import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {ChevronDown} from 'lucide-react'

import useQuiz from '@/app/Store'

const type =['boolen', 'multiple'];
const level = ['easy', 'meduim', 'hard'];

const DropDownOtions = () => {
    const [categoreis, setCategories] = useState([])

    const config = useQuiz(state=>state.config) 

    const addCategory = useQuiz(state => state.addCategory)
    const addLevel = useQuiz(state => state.addLevel)
    const addType = useQuiz(state => state.addType)

    useEffect(()=>{
        async function fetchCategories(){
            const {trivia_categories} = await (await fetch('https://opentdb.com/api_category.php')).json()
            setCategories([...trivia_categories])
        }
        fetchCategories();
    })

  return (
    <div className="flex lg:flex-row flex-col justify-evenly items-center py-5">
        <div className="px-7 py-4 w-full lg:w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className='flex outline-none justify-between w-full shadow-md px-10 py-3 rounded-lg text-center hover:bg-blue-500 hover:text-white font-medium text-sm'>{config.category.name? config.category.name:"Select category"}<ChevronDown /> </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel> Select Category </DropdownMenuLabel>
            <DropdownMenuSeparator />
           
                {
                    categoreis.map(category =>  <DropdownMenuItem key={category.name}  onClick={() => addCategory(category.id, category.name)} >{category.name}</DropdownMenuItem>)
                }
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="px-7 py-4 w-full lg:w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className='flex outline-none justify-between w-full shadow-md px-10 py-3 rounded-lg text-center hover:bg-blue-500 hover:text-white font-medium text-sm'>{config.level? config.level:"Select Level"} <ChevronDown /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Level</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {
                level.map(ele =><DropdownMenuItem key={ele} onClick={()=>addLevel(ele)} >{ele}</DropdownMenuItem> )
            }
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="px-7 py-4 w-full lg:w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className='flex outline-none justify-between w-full shadow-md px-10 py-3 rounded-lg text-center hover:bg-blue-500 hover:text-white font-medium text-sm'>{config.type? config.type:"Select type"} <ChevronDown /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {
                type.map(ele =><DropdownMenuItem key={ele} onClick={()=>addType(ele)}>{ele}</DropdownMenuItem> )
            }
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
    </div>
  )
}

export default DropDownOtions