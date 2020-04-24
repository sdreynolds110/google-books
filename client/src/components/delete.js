import React from "react";
import Button from 'react-bootstrap/Button';



function DeleteBtn(props) {
  return (
    <Button className="col-lg-1 col-md-2 col-sm-auto border btn btn-light float-right" {...props} role="button" tabIndex="0">
      Delete
    </Button>
  );
}

export default DeleteBtn;