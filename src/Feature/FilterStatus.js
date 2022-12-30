export const getfunction =(Doctordata,status)=>{
  return Doctordata=Doctordata.filter(data=>data.status===status)
}

export const GetFunctionPatient =(Doctordata,status)=>{
  return Doctordata=Doctordata.filter(data=>data.status===status)
}