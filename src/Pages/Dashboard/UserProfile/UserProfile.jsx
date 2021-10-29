import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { MdCancel } from "react-icons/md";
const UserProfile = () => {
  const { user, conFirm, handleConFirm, handleSignOut, handleDeleteUser } =
    useAuth();
  const [conFirmText, setConFirmText] = useState();
  return (
    <div className="center flex-column">
      <h4 className="fw-bold">{user.displayName}</h4>
      <p className="text-muted p-2 rounded-2 bg-white shadow-sm">
        {user.email}
      </p>
      {conFirm && (
        <div className="mb-3">
          <label htmlFor="confirm" className="form-label">
            Type <b>CONFIRM</b>
          </label>
          <div className="input-group">
            <input
              onBlur={(e) => setConFirmText(e.target.value)}
              id="confirm"
              className="form-control text-danger fw-bolder ls2"
            />{" "}
            <button
              className="input-group-text btn btn-primary text-light center"
              onClick={() => handleConFirm(false)}
            >
              <MdCancel />
            </button>
          </div>
        </div>
      )}
      <div>
        <button
          className="my-btn py-2 px-3 rounded-3 me-3"
          onClick={handleSignOut}
        >
          Logout
        </button>
        <button
          className="btn btn-danger btn-sm py-2 px-3 ms-3 rounded-3"
          onClick={() => {
            if (conFirmText === "CONFIRM") {
              handleDeleteUser();
              handleConFirm(false);
            } else {
              handleConFirm(true);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
