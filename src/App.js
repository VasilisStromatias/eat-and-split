import React, { useState } from "react";

import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import BillBox from "./components/BillBox";
import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [addIsOpen, setAddIsOpen] = useState(false);
  const [addFriendName, setAddFriendName] = useState("");
  const [addFriendImage, setAddFriendImage] = useState(
    "https://i.pravatar.cc/48"
  );

  const [friendList, setFriendList] = useState(initialFriends);

  const handleAddForm = () => {
    setAddIsOpen((c) => !c);
  };

  const onChangeName = (e) => {
    setAddFriendName(e.target.value);
  };

  const onChangeImage = (e) => {
    setAddFriendImage(e.target.value);
  };

  const onAddSubmit = (e) => {
    e.preventDefault();

    if (!addFriendName || !addFriendImage) return;

    const id = crypto.randomUUID();

    setFriendList([
      ...friendList,
      {
        id: id,
        name: addFriendName,
        image: `${addFriendImage}?=${id}`,
        balance: 0,
      },
    ]);
    setAddFriendName("");
    setAddFriendImage("https://i.pravatar.cc/48");
    setAddIsOpen(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList data={friendList} />
        {addIsOpen && (
          <AddFriend
            nameInput={addFriendName}
            imageInput={addFriendImage}
            onChangeName={onChangeName}
            onChangeImage={onChangeImage}
            onAddSubmit={onAddSubmit}
          />
        )}
        <Button handleAddForm={handleAddForm}>
          {addIsOpen ? "Close" : "Add a friend"}
        </Button>
      </div>
      <BillBox />
    </div>
  );
}

export default App;
