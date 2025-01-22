import UseFetch from "./UseFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./DetailedNote.css";

const DetailedNote = () => {
    const { id } =useParams();
    const {data,pending,isError} = UseFetch(`http://localhost:5000/notes/${id}`);
    return ( 
        <div className="description">
            <div className="subjectdescription">
                {pending && <div>Loading data.....</div>}
                {isError && <div>Sorry, data is not found.........</div>}
                {data && <article><h4 className="detailtopic">{data.Topic}</h4>
                <div className="topicdetails">{data.Details}</div>
                <button className="detailbtn">Delete</button></article>}
                
            </div>
        </div> 
     );
}
 
export default DetailedNote;