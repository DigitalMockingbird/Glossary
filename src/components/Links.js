import React from "react";
import GlossaryLinks from "../containers/GlossaryLinks";

const Links = () => (
    <div className="bot-10px text-center">
      <h4>Duplicate filtering:</h4>
      {" "}
      <GlossaryLinks filter="SHOW_DUPLICATES">
          Show all words
      </GlossaryLinks>
      {" "}
      <GlossaryLinks filter="HIDE_DUPLICATES">
          Hide duplicates
      </GlossaryLinks>

      <h4>Word sorting:</h4>
      {" "}
      <GlossaryLinks filter="SORT_NONE">
          Default order
      </GlossaryLinks>
      {" "}
      <GlossaryLinks filter="SORT_ENGLISH">
          Sort English Descending
      </GlossaryLinks>
    </div>
);

export default Links;