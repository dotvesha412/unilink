import React from "react";
import Layout from "./../components/Layout/Layout";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export default function Chat() {
  return (
    <Layout title={"chat - Unilink"}>
      <h4>Welcome to our your CHAT window</h4>                           
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "73A5C6" }}>
      <MDBRow>
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <h5 className="font-weight-bold mb-3 text-center text-lg-start">
            Members
          </h5>

          <MDBCard>
            <MDBCardBody>
              <MDBTypography listUnStyled className="mb-0">
                <li
                  className="p-2 border-bottom"
                  style={{ backgroundColor: "#eee" }}
                >
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Shalini</p>
                        <p className="small text-muted">
                          Hello, Are you there?
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Just now</p>
                      <span className="badge bg-danger float-end">1</span>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Radha Jain</p>
                        <p className="small text-muted">
                          See you
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">5 mins ago</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Anita Sri</p>
                        <p className="small text-muted">
                        Glad to help
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Rama Olsen</p>
                        <p className="small text-muted">
                          Glad to Volunteer
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Kri Shri</p>
                        <p className="small text-muted">
                          I will purchase it
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2 border-bottom">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Me</p>
                        <p className="small text-muted">
                          Sure thing!!
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Yesterday</p>
                    </div>
                  </a>
                </li>
                <li className="p-2">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Reemi Sen</p>
                        <p className="small text-muted">
                          I got your payment.
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">5 mins ago</p>
                      <span className="text-muted float-end">
                        <MDBIcon fas icon="check" />
                      </span>
                    </div>
                  </a>
                </li>
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="6" lg="7" xl="8">
          <MDBTypography listUnStyled>
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <MDBCard>
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Reemi Sen</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 12 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                   Hey there!! Do you what to go ahead with purchase?
                  </p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <MDBCard className="w-100">
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Me</p>
                  <p class="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 13 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                    Sure, I will like to help people by purchasing this.
                  </p>
                </MDBCardBody>
              </MDBCard>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            </li>
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <MDBCard>
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Reemi Sen</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 10 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                    Well. I have to see that.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <li className="bg-white mb-3">
              <MDBTextArea label=" Message" id="textAreaExample" rows={4} />
            </li>
            <MDBBtn color="info" rounded className="float-end">
              Send
            </MDBBtn>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Layout>
  );
}