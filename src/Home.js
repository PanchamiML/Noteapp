import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Home.css'
import { useEffect,useState } from 'react';
import Listhome from './Listhome';





const Home = () => {

    const[data,setData] = useState(null)

const dltNote =(id) => {
        // console.log("delete button pressed")
       const newData=data.filter((dltitem)=>dltitem.id!==id)
        setData(newData)
    }

useEffect(()=>{
    fetch('http://localhost:5000/notes')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        setData(data)
    })
    .catch((err)=>{
        console.log(err.message)
    })},[]
) 



    return ( 
        <div className='homecontent'>
            <h2>Notes</h2>
            {/* <Listhome/> */}
            <div className="row">
           {data && data.map((item)=>(
                    <div className='listitems' key={item.id}>
                    <div className="col-sm-12">
                    <div className="card">
                    <div className="card-header">{item.Subject}</div>
                    <div className="card-body">{item.Topic}</div>
                    <div className="card-footer">{item.Date }<button className='dltbtn' onClick={()=>{dltNote(item.id)}}>Delete</button></div>
                  </div>
                  
                    </div>
                
  
 
 
</div> 
                ))}
                


</div>
          

        </div>
     );
}
 
export default Home;