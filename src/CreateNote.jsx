import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    desc: "",
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const name = event.target.name;
    let value = event.target.value;
    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const addEvent = (event) => {
    props.passNote(note);
    setNote({
      title: "",
      desc: "",
    });
  };

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 max-auto max_auto">
            <div className="row">
        <form>
          <input required
            type="text"
            placeholder="Write Title"
            name="title"
            onChange={inputEvent}
            value={note.title}
          />
          <br />
          <textarea required
            name="desc"
            placeholder="Write Description"
            onChange={inputEvent}
            value={note.desc}
          ></textarea>
          <br />
          <Button variant="contained" color="secondary" onClick={addEvent}>
            <AddIcon />
          </Button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CreateNote;
