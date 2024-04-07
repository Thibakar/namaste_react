import React, { useState, useEffect } from "react";
import "./About.css";

const About = (props) => {
  const [profiles, setProfiles] = useState([]);
  console.log("profiles", profiles);

  const getProfileData = async () => {
    const data = await fetch(`https://dummyjson.com/users`);
    const jsonData = await data.json();
    setProfiles(jsonData.users);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div class="about-container row">
        {profiles.map((user) => (
          <div class="column">
            <div class="card">
              <img src={user.image} />
              <div class="container">
                <h2>Jane Doe</h2>
                <p class="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button class="button">Contact</button>
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
