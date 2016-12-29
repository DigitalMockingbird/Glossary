import React from "react";

const Link = ({activeDuplicateButton, activeSortButton, children, onClick}) => {
  if (activeDuplicateButton || activeSortButton) {
    return <button type="button" className="btn btn-success">{children}</button>;
  }

  return (
      <a href="#"
         onClick = {e => {
           e.preventDefault();
           onClick();
         }}
      >
        <button
            type="button"
            className="btn btn-default">{children}</button>
      </a>
  );
};

export default Link;