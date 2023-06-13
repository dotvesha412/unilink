import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Why our NGO is so great?
        </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        
        </p>

      <MDBRow>
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon
                icon="flag-checkered"
                size="2x"
                className="deep-purple-text"
              />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Fundraising</h5>
              <p className="grey-text">
                We sell donated products for children that are disabled and need education
                </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Events</h5>
              <p className="grey-text">
                We organise various food campaigns locally where you can come and support us.
                </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="glass-martini" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">User Friendly Platform</h5>
              <p className="grey-text">
                We have an online platform where you can visit and show your support.
                </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="text-name">
          <img
            className="img-fluid"
            src="https://media.istockphoto.com/id/1248639576/photo/portrait-of-kids-hanging-out-playing-together.jpg?s=612x612&w=0&k=20&c=eV4ZPWsYmQZWTprXJKycQKD0XpgbXN8L-OqUxB1GIgI="
            alt=""
          />
        </MDBCol>
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Volunteer</h5>
              <p className="grey-text">
                We do need Volunteers who can help us in our mission. Feel free to reach us.
                </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="bolt" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">For a cause</h5>
              <p className="grey-text">
                We are dedicated to build a fair society. Do take a part in it.
                </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Difference</h5>
              <p className="grey-text">
                We believe that your change can make a huge difference
                                </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default FeaturesPage;