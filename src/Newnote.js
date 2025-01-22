import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Newnote.css'

const Newnote = () => {
    return ( 
        <div className='newnoteform'>
            <form action="/action_page.php">
  <div class="mb-3 mt-3">
    <label for="email" class="form-label subjectlabel">Subject:</label>
    <input type="text" class="form-control subjectinput" id="subject" placeholder="Enter subject" name="subject"></input>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label topiclabel">Topic:</label>
    <input type="text" class="form-control topicinput" id="topic" placeholder="Enter topic" name="topic"></input>
  </div>
  <div class="form-check mb-3">
  <label for="email" class="form-label datelabel">Date:</label>
  <input type="date" class="form-control dateinput" id="date" placeholder="Enter date" name="date"></input>
    
  </div>
  <div class="mb-3">
  <label for="comment" className='notelabel'>Note:</label>
  <textarea class="notecontent noteinput" rows="5"  id="notecontent" name="notecontent"></textarea>
  </div>
  <button type="submit" class="btn btn-primary notebtn">Add</button>
</form>

        </div>
     );
}
 
export default Newnote;