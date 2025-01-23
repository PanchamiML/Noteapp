import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Newnote.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Newnote = () => {
  const[Subject,setSubject]=useState('');
  const[Topic,setTopic]=useState('');
  const[Date,setDate]=useState('');
  const[Details,setDetails]=useState('');
  const[ispending,setIspending]=useState(false);
  const history=useHistory();

  const storeNewdata=(e)=>{
    e.preventDefault();
    setIspending(true);
    
    const newdata={Subject,Topic,Date,Details}

    fetch('http://localhost:5000/notes',{method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(newdata)})
      .then(()=>{
        setIspending(false)
        history.push('/')

      }).catch((err)=>{
        console.log(err)
      })


}



    return ( 
        <div className='newnoteform'>
            <form action="/action_page.php" onSubmit={storeNewdata}>
  <div className="mb-3 mt-3">
    <label  htmlFor="email" className="form-label subjectlabel">Subject:</label>
    <input type="text" className="form-control subjectinput" id="subject" placeholder="Enter subject" name="subject"
    required
    value={Subject}
    onChange={(e)=>setSubject(e.target.value)}></input>
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label topiclabel">Topic:</label>
    <input type="text" className="form-control topicinput" id="topic" placeholder="Enter topic" name="topic"
    required
    value={Topic}
    onChange={(e)=>setTopic(e.target.value)}></input>
  </div>
  <div className="form-check mb-3">
  <label  htmlFor="email" className="form-label datelabel">Date:</label>
  <input type="date" className="form-control dateinput" id="date" placeholder="Enter date" name="date"
  required
  value={Date}
  onChange={(e)=>setDate(e.target.value)}></input>
    
  </div>
  <div className="mb-3">
  <label  htmlFor="comment" className='notelabel'>Note:</label>
  <textarea className="notecontent noteinput" rows="5"  id="notecontent" name="notecontent"
  required
  value={Details}
  onChange={(e)=>setDetails(e.target.value)}></textarea>
  </div>
  {!ispending  && <button type="submit" class="btn btn-primary notebtn">Add</button>}
  {ispending  && <button type="submit" class="btn btn-primary notebtn">Adding........</button>}
</form>

        </div>
     );
}
 
export default Newnote;