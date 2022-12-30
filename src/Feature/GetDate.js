exports.getDate=(date)=>{
    let  today 		= new Date();
    let  dd 		= String(today.getDate()+date).padStart(2, '0');
    let  mm 		= String(today.getMonth() + 1).padStart(2, '0'); 
    let  yyyy 		= today.getFullYear();
    
    return `${yyyy}-${mm}-${dd}`; 
}

exports.gettime =()=>{
    const date      = new Date()
    let   hour      = date.getHours()
          hour      = hour<10?`0${hour}`:hour
    let   minutes   = date.getMinutes()
          minutes   = minutes<10?`0${minutes}`:minutes
     
  return `${hour}:${minutes}`   
}