import React from 'react';

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = 'images/' + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Danish's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p style={{ color: '#E8E8E8' }}>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address" style={{ color: '#E8E8E8' }}>
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                {/* href={resumeDownload} */}
                <a
                  href="https://docs.google.com/document/d/1HIWL-tFMnFPe-u9SbfBWZF_8_0n2STmqsRT61DJRCPc/edit"
                  target="_blank"
                  className="button"
                >
                  View Current Resume
                  {/* <i className="fa fa-dow
                  nload"></i>Current Resume */}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
