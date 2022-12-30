import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { ToastContainer } from 'react-toastify';
import StudentViewModal from '../../Components/Students/StudentViewModal';
import { getfunction } from '../../Feature/FilterStatus'; 
import { customStyles } from '../../Feature/DataTable';
import {GetRequset} from '../../Feature/Axios';
import StatusData from '../../Components/StatusDesgin/StatusData';

  

const StudentList = () => {
    const [open,setOpen] = useState(false);
    const [studentData,setStudentData]=React.useState()
    const [statusData,setStatusData]=useState({active:'',hold:'',deactive:''})
    const [Id,setId]=React.useState()

    const columns = [
        { name:  'Sr.', selector: (row,index) => index+1, width:"9rem"},
        { name: 'Doctor Name', selector: row => row.name, width:"15rem" },
        { name: 'Mobile Number', selector: row => row.PhoneNumber, },
        { name: 'Email', selector: row => row.email,},
        { name: 'Status', selector: row => row.status === 'active' ? <span className='bg-green-100 p-2 px-4 rounded-full text-green-600'>Activate</span>:row.status === "onload" ?<span className='bg-yellow-100 p-2 px-4 rounded-full text-yellow-600'>OnHold</span>:<span className='bg-red-100 p-2 px-4 rounded-full text-red-600'>Deactivate</span>,},
        { name: 'Action', selector: row =><div><button onClick={()=>ViewHandleOpen(row._id)} type="button" className="px-4 ml-2 py-1 rounded-full focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-300 font-medium  text-sm  mr-2 mb-2 dark:focus:ring-blue-800">
        <i className="fa-solid fa-eye" /></button >
        </div>, width:"10rem" },
    ];

    const ViewHandleOpen = (id) =>{
        setId(id)
        setOpen(true);
    } 

    const GetStudentData =()=> {
        GetRequset('user/accounts/getAlluser')
        .then((res)=>{
           setStudentData(res.data.candidate); 
           let active = getfunction(res.data.candidate,'created')
           let hold = getfunction(res.data.candidate,'onload') 
           let deactive = getfunction(res.data.candidate,'terminate') 
           setStatusData({active:active.length,hold:hold.length,deactive:deactive.length})
        })
        .catch((err)=>{ console.log(err.message) })
    }

    React.useEffect(()=>{
        GetStudentData();
      },[])
    

  return (
        <>
          <StatusData active={statusData.active} hold={statusData.hold} deactive={statusData.deactive} icon="fa-sharp fa-solid fa-user-graduate" />
            <div className="max-w-screen mx-auto mt-20">
                <div className="container mx-auto">
                <div>
                    <div className="flex justify-between items-center px-1 bg-white dark:bg-gray-800">
                        <div className=" text-sm text-gray-500">
                            <h2 className=" text-lg font-normal text-blue-600 mb-4">All Students</h2>
                        </div>  
                    </div>
                    <hr />
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                     <DataTable
                        columns={columns}
                        data={studentData}
                        customStyles={customStyles}
                        pagination 
                     />
                    </div>
                </div>
                </div>
            </div>  
         { open === true ? <StudentViewModal setOpen={setOpen} open={open} id={Id}/> : null}
        <ToastContainer />
    </>
  )
}

export default StudentList;