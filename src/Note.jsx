import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';

const Note = (props) => {
    
    return (
        <>
        <div className="col-md-4 col-lg-4 col-10 mx-auto">
          <div class="card">
           <div class="card-body">
                <p>{props.title}</p>
                <p>{props.desc}</p>
                <Button variant="contained" color="secondary" onClick={props.onSelect}><DeleteForeverIcon /></Button>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        </div>
        </div>

        </>
    );

}

export default Note;