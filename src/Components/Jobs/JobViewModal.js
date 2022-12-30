import React, { useState } from 'react'
import { Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { GetRequset } from '../../Feature/Axios';


export default function JobViewModal ({setOpen,open,id}) {
  const cancelButtonRef = useRef(null)
  const [studentData,setStudentData]=useState()

  const GetSingleDocterData =()=> {
    GetRequset(`admin/api/v1/job/${id}`)
      .then((res)=>{ setStudentData(res.data.data) })
      .catch((err)=>{ console.log(err.message )})
  }

  React.useEffect(()=>{
    GetSingleDocterData();
  },[id])

  return (
    <Transition.Root show={open} as={Fragment}>   
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
              <div className="max-w-screen mx-auto">
                <div className="container mx-auto">
                  <div className=" col-span-2">
                    <div className=" border-b border-gray-200 rounded">
                      <div className="grid grid-cols-2 shadow-lg">
                        <div className="p-2 ml-2 mt-2">
                        <Dialog.Title as="h2" className=" text-lg text-blue-500 font-semibold">
                         Post Details
                        </Dialog.Title>
                        </div>
                        <div className="text-sm text-end p-2 mr-2 mt-2">
                        <span className="flex justify-end mb-2 -mr-1 ">
                          <i onClick={() => setOpen(false)} className="fa-solid fa-xmark text-xl font-extrabold"></i>
                        </span>
                        </div>
                      </div>  
                      <div>
                      {/*------------------------profile*/}
                      <div className="container w-11/15 mx-auto px-4 bg-white rounded ">
                          <div className="relative flex flex-col flex-auto min-w-0 mt-4 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border mb-4 draggable" draggable="true">
                              <div className="flex flex-wrap -mx-3">
                                  <div className="flex-none w-auto max-w-full px-3 my-auto">
                                      <div className="h-full">
                                          <h5 className="mb-1 text-2xl font-semibold">{!studentData?null:studentData.Company_Name}</h5>
                                          <p className="mb-0  leading-normal text-slate-600 text-size-sm"><i className="fa-solid fa-location-dot" /> {!studentData?null:studentData.city}</p>
                                          <p className="mb-0  leading-normal text-slate-600 text-size-sm"> {!studentData?null:studentData.designation}</p> 
                                          <p className="mb-0  leading-normal text-slate-600 text-size-sm"> {!studentData?null:studentData.experience}</p>
                                          <p className="mb-0  leading-normal text-slate-600 text-size-sm"> {!studentData?null:studentData.Budget}</p>  
                                          <p className="mb-0  leading-normal text-slate-600 text-size-sm"> {!studentData?null:studentData.description}</p> 
                                      </div>
                                  </div>
                                  <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
          </Dialog.Panel>
          </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
