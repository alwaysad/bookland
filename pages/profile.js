import { useEffect, useState } from "react";

const Profile=()=>{
const [book,setBook]=useState([]);
const fetchData=async()=>{


    try {
        const response=await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=XqscGqoQIsQuGWr9ctLPf08RJBAbvs99');
        if(!response.ok){
            throw new Error('could not fetch data');
        }

        const data=await response.json();
        setBook(data.results);
        console.log(data.results)
    } catch (error) {
        console.log(error.message);
    }
   


}


useEffect(() => {
  fetchData();

}, []);





return <div>
   
</div>




}
export default Profile;