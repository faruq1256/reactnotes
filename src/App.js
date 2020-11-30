import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

const App = () => {
  const [listNote, setListNote] = useState([]);

  const addNote = (note) => {
    setListNote((prevData) => {
      return [...prevData, note];
    });
  };

  const deleteEvent = (id) => {
    console.log("clicked");
    setListNote((oldArr) => {
      return oldArr.filter((oldArr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <hr></hr>

      <div className="container-fluid mb-5 ml-3  contact_div">
      <div className="row">
        <div className="col-10 max-auto max_auto">
            <div className="row gy-4 gx-4"></div>
      {listNote.map((val, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={val.title}
            desc={val.desc}
            onSelect={() => {
              return deleteEvent(index);
            }}
          />
        );
      })}
      </div>
      </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
