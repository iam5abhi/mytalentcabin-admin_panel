import React,{useState} from 'react';
import { GetRequset } from '../../Feature/Axios';
import { useParams } from 'react-router-dom';

const ViewJob = () => {
    const {id} = useParams()
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
        <>
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
    </>
  )
}

export default ViewJob;