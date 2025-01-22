import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './ListHome.css';


const Listhome = (props) => {
    const data = props.data;
    const dltNote=props.dltNote;
    const title = props.title;
    return ( 
        <div className="listhome">
           <div className="row">
            <h2>{title}</h2>
            {data.map((item)=>(
                    <div className='listitems' key={item.id}>
                    <div className="col-sm-12">
                    <div className="card">
                      <Link to={`/notes/${item.id}`} className="listlink">
                    <div className="card-header">{item.Subject}</div>
                    <div className="card-body">{item.Topic}</div>
                    <div className="card-footer">{item.Date }<button className='dltbtn'  onClick={()=>dltNote(item.id)}  >Delete</button></div>
                    </Link>
                  </div>
                  
                    </div>
                
  
 
 
</div> 
                ))}
                


</div>
        </div>
     );
}
 
export default Listhome;