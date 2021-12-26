import React from "react";

const FolderCard = ({ folderName, folderSize, subFolders, users }) => {
  console.log(users.length);

  return (
    <div className="folder">
      <div className="folder-name">{folderName}</div>
      <div className="folder-size">
        {subFolders} f . {folderSize}
      </div>
      <div className="avatars-container">
        {users.slice(0, 3).map((user) => (
          <Avatar userAvtar={user.profilePicture} />
        ))}
        {users.length >= 4 ? <Exc left={users.length - 3} /> : ""}
      </div>
    </div>
  );
};

const Avatar = ({ userAvtar }) => {
  return (
    <img
      style={{ width: "28px", height: "28px" }}
      src={userAvtar}
      className="user-avatar"
      alt="user avatar"
    />
  );
};

const Exc = ({ left }) => {
  return (
    <div className="exc">
      <p className="left">+{left}</p>
    </div>
  );
};

export default FolderCard;
