import React from "react";
import Developer from "./Developer";
import PoweredBys from "./PoweredBys";

const Note = () => (
  <div className="opacity-25 hover:opacity-100 hover:cursor-default">
    <Developer />
    <PoweredBys />
  </div>
);

export default Note;
