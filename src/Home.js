import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Home.css'
import { useEffect,useState } from 'react';

import UseFetch from './UseFetch';
import Listhome from './Listhome';





const Home = () => {

   const {data,pending,isError,dltNote}= UseFetch('http://localhost:5000/notes')






    return ( 
        <div className='homecontent'>
            
            {pending && <p>Data is Loading........</p>}
            {data && <Listhome data={data} dltNote={dltNote} title="Notes"/> }
            {isError && <p>Error accured</p>}
            {data && <Listhome data={data.filter((item)=>item.Subject==="Economics")} dltNote={dltNote} title="Economics"/> }

        </div>
     );
}
 
export default Home;