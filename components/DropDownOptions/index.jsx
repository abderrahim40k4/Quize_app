import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


const DropDownOtions = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-evenly items-center py-5">
        <div className="px-7 py-4 w-full lg:w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className='flex outline-none justify-center w-full shadow-md px-10 py-3 rounded-lg text-center hover:bg-blue-500 hover:text-white font-medium text-sm'>Select Category</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="px-7 py-4 w-full lg:w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className='flex outline-none justify-center w-full shadow-md px-10 py-3 rounded-lg text-center hover:bg-blue-500 hover:text-white font-medium text-sm'>Select Level</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Level</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="px-7 py-4 w-full lg:w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className='flex outline-none justify-center w-full shadow-md px-10 py-3 rounded-lg text-center hover:bg-blue-500 hover:text-white font-medium text-sm'>Select Type</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
    </div>
  )
}

export default DropDownOtions