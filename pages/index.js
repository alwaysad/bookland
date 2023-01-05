import { useEffect, useState } from "react";

const Home=()=>{
const [book,setBook]=useState([]);










return <div>
    {book.map(item=><p>{item.book_details[0].title}</p>)}
</div>




}
export default Home;

export const getServerSideProps=async()=>{

  
}