import React from "react";

const UserProfile = () => {
  return (
    <div className="center flex-column">
      <h4 className="fw-bold">Sakib Siddiqi Supto</h4>
      <p className="text-muted p-2 rounded-2 bg-white shadow-sm">
        sakibsiddiqisupto@gmai.com
      </p>
      <div>
        <button className="my-btn py-2 px-3 rounded-3 me-3">Logout</button>
        <button className="btn btn-danger btn-sm py-2 px-3 ms-3 rounded-3">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
