import React from "react";

const Profile = () => {
  const imgUrl = "./src/assets/react.svg";

  const handleImgClick = (e) => {
    console.log("Holla", e);
    e.target.style.display = "none";
  };

  return (
    <div>
      <img onClick={(e) => handleImgClick(e)} src={imgUrl} alt="#" />
    </div>
  );
};

export default Profile;
