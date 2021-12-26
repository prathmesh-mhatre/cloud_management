import React from "react";

const FolderCard = ({ folderName, folderSize, subFolders, users }) => {
  return (
    <div className="folder">
      <div className="folder-name">{folderName}</div>
      <div className="folder-size">
        {subFolders} f . {folderSize}
      </div>
    </div>
  );
};

export default FolderCard;
