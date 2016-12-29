import React from "react";

const GlossaryEntry = ({english, french}) => (
    <tr>
      <td>{english}</td>
      <td>{french}</td>
    </tr>
);

export default GlossaryEntry;