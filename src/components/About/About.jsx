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
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="about-container row">
        {profiles.map((user, i) => (
          <div key={i + 1} className="column">
            <div className="card">
              <img src={user.image} />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="button">Contact</button>
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
