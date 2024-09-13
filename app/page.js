"use client"
import ButtonDef from "@/components/Button/indx";
import DropDownOtions from "@/components/DropDownOptions";
import useQuize from "./Store";


export default function Home() {
  const quizeConfige = useQuize(state=> state.config)
  console.log(quizeConfige)
  return (
    <section className="flex flex-col justify-center items-center my-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">WWelcome to Quize App</h1>
      <section className="my-10 rounded-lg p-10 shadow-xl lg:w-[75%] w-[80%]">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Questions</label>
          <input type="number" id="first_name" defaultValue={10} min={0} max={50} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
        </div>
        <div className="mx-auto flex flex-col justify-center w-full">
        <DropDownOtions/>
        <ButtonDef/>
        </div>
      </section>
    </section>
  );
}
