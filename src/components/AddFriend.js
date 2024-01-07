import React from "react";
import Button from "./Button";

function AddFriend({
  nameInput,
  imageInput,
  onAddSubmit,
  onChangeName,
  onChangeImage,
}) {
  return (
    <form className="form-add-friend" onSubmit={onAddSubmit}>
      <label> Friend name</label>
      <input
        type="text
    "
        value={nameInput}
        onChange={onChangeName}
      />
      <label>Image URL</label>
      <input
        type="text
        "
        value={imageInput}
        onChange={onChangeImage}
      />
      <Button>Add</Button>
    </form>
  );
}

export default AddFriend;
