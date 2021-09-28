import React, { useState } from "react";

function MyTitleForm() {
  const [erreur, setErreur] = useState("");
  const [title, setTitle] = useState("Awesome Title");
  const handleChange = (e) => {
    if (e.target.value.includes("*")) {
      setErreur("Caractére interdit");
      return;
    }
    setTitle(e.target.value);
    setErreur("");
  };

  return (
    <div>
      <h1>{title}</h1>
      <label htmlFor="title">Title :</label>
      <input id="title" type="text" value={title} onChange={handleChange} />
      <h3> {erreur} </h3>
    </div>
  );
}

export default MyTitleForm;
