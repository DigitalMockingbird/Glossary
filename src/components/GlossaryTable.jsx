import React from "react";
import GlossaryEntry from "./GlossaryEntry";

const GlossaryTable = ({visibleWords}) => (
    <div className="glossaryTable table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
        <tr>
          <th>English</th>
          <th>French</th>
        </tr>
        </thead>
        <tbody>
        {visibleWords.map((word, index) =>
          <GlossaryEntry
              key={index}
              english={word.english}
              french={word.french}
          />
        )}
        </tbody>
      </table>
    </div>
);

export default GlossaryTable;
