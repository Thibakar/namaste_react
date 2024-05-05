import React, { useState, useEffect } from "react";
import { usersDataAPI } from "../../Utils/constants";

const About = () => {
  const [profiles, setProfiles] = useState([]);

  const getProfileData = async () => {
    const data = await fetch(usersDataAPI);
    const jsonData = await data.json();
    setProfiles(jsonData.users);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div>
      <div className="mx-32 text-center bg-slate-300 p-8 my-5 rounded-lg  ">
        <h1 className="font-extrabold">About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="flex flex-wrap mx-32 justify-between">
        {profiles.map((user, i) => (
          <div key={i + 1} className="">
            <div className="card w-64 my-3 relative">
              <img src={user.image} />
              <div className="mx-2 py-2">
                <h2 className="font-bold">Jane Doe</h2>
                <p className="font-semibold py-2">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p className="font-semibold">jane@example.com</p>
                <p>
                  <button className="">Contact</button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
