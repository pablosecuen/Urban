'use client'
import axios from  'axios'

const fetchPassageById = async (id:string) => {
    const response = await axios.get(`http://localhost:3000/passage/${id}`);
    return response.data
}


export const Detail = ({params}:any) => {
const {id} = params
console.log(id);

  return (
    <div>page</div>
  )
}