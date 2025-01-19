import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Newnote.css'

const Newnote = () => {
    return ( 
        <div className='newnoteform'>
            <form action="/action_page.php">
  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Sublect:</label>
    <input type="text" class="form-control" id="subject" placeholder="Enter subject" name="subject"></input>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Topic:</label>
    <input type="text" class="form-control" id="topic" placeholder="Enter topic" name="topic"></input>
  </div>
  <div class="form-check mb-3">
  <label for="email" class="form-label">Date:</label>
  <input type="date" class="form-control" id="date" placeholder="Enter date" name="date"></input>
    
  </div>
  <div class="mb-3 mt-3">
  <label for="comment">Note:</label>
  <textarea class="notecontent" rows="5" id="notecontent" name="notecontent"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Add</button>
</form>

        </div>
     );
}
 
export default Newnote;