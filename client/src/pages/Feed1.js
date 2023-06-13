import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBTypography,
  MDBCardText,
} from "mdb-react-ui-kit";

export default function Feed1() {
  return (
    <MDBContainer className="py-5">
      <MDBCard style={{ width: "48rem" }}>
        <div className="border border-left border-right px-0">
          <div className="p-3 border-bottom">
            <h4 className="d-flex align-items-center mb-0">
              Home
              <MDBIcon
                far
                icon="star"
                size="xs"
                color="primary"
                className="ms-auto"
              />
            </h4>
          </div>
          <MDBCard className="shadow-0">
            <MDBCardBody className="border-bottom pb-2">
              <div className="d-flex">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle"
                  height="50"
                  alt="Avatar"
                  loading="lazy"
                />
                <div className="d-flex align-items-center w-100 ps-3">
                  <div className="w-100">
                    <input
                      type="text"
                      id="form1"
                      className="form-control form-status border-0 py-1 px-0"
                      placeholder="What's happening"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <MDBTypography
                  listUnStyled
                  className="d-flex flex-row ps-3 pt-3"
                  style={{ marginLeft: "50px" }}
                >
                  <li>
                    <a href="#!">
                      <MDBIcon far icon="image" className="pe-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <MDBIcon fas icon="photo-video" className="px-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <MDBIcon fas icon="chart-bar" className="px-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <MDBIcon far icon="smile" className="px-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <MDBIcon far icon="calendar-check" className="px-2" />
                    </a>
                  </li>
                </MDBTypography>
                <div className="d-flex align-items-center">
                  <MDBBtn rounded>Tweet</MDBBtn>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
          <div className="d-flex p-3 border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp"
              className="rounded-circle"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#!">
                  <h6 className="text-body">
                    Neha Shree
                    <span className="small text-muted font-weight-normal mx-1">
                      @neha
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      •
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      2h
                    </span>
                    <span>
                      <MDBIcon fas icon="angle-down" className="float-end" />
                    </span>
                  </h6>
                </a>
                <p style={{ lineHeight: "1.2" }}>
                 Excited to be part of this incredible NGO event today, advocating for a #HungerFreeWorld!
                 <a href="#!">#social</a>
                 Together, we can make a difference and ensure that no one goes to bed hungry.
                  <a href="#!"> #NGOCampaign</a> Let's fight food insecurity and spread the 
                  love of sharing. #FoodCampaign 
                  <a href="#!"> #NGOEvent</a> 
                </p>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-between mb-0 pe-xl-5"
                >
                  <li>
                    <MDBIcon far icon="comment" />
                  </li>
                  <li>
                    <MDBIcon fas icon="retweet" />
                    <span className="small ps-2">7</span>
                  </li>
                  <li>
                    <MDBIcon far icon="heart" />
                    <span className="small ps-2">35</span>
                  </li>
                  <li>
                    <MDBIcon far icon="share-square" />
                  </li>
                </MDBTypography>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp"
              className="rounded-circle"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#">
                  <h6 className="text-body">
                    Richa Jain
                    <span className="small text-muted font-weight-normal mx-1">
                      @richa
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      •
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      3h
                    </span>
                    <span>
                      <MDBIcon fas icon="angle-down" className="float-end" />
                    </span>
                  </h6>
                </a>
                <p style={{ lineHeight: "1.2" }}>
                The dedication and passion of the volunteers are truly inspiring! 
                Let's join hands to fight and make sure everyone has access to
                nutritious meals. 
                </p>

                <MDBCard
                  className="border mb-3 shadow-0 "
                  style={{ maxWidth: "540px" }}
                >
                  <MDBRow className="g-0">
                    <MDBCol md="3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (21).webp"
                        alt="Avatar"
                        className="img-fluid rounded-left"
                      />
                    </MDBCol>
                    <MDBCol md="9">
                      <MDBCardBody>
                        <MDBCardText style={{ lineHeight: "1" }}>
                          Latest Post
                        </MDBCardText>
                        <MDBCardText
                          className="small mb-0"
                          style={{ lineHeight: "1.2" }}
                        >
                          Cats go to NGO event
                        </MDBCardText>
                        <MDBCardText
                          className="small mb-0"
                          style={{ lineHeight: "1.2" }}
                        >
                          <MDBIcon fas icon="link" size="xs" className="pe-1" />
                          See here
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-between mb-0 pe-xl-5"
                >
                  <li>
                    <MDBIcon far icon="comment" />
                  </li>
                  <li>
                    <MDBIcon fas icon="retweet" />
                    <span className="small ps-2">51</span>
                  </li>
                  <li>
                    <MDBIcon far icon="heart" />
                    <span className="small ps-2">185</span>
                  </li>
                  <li>
                    <MDBIcon far icon="share-square" />
                  </li>
                </MDBTypography>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (22).webp"
              className="rounded-circle"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#">
                  <h6 className="text-body">
                    Bina
                    <span className="small text-muted font-weight-normal mx-1">
                      @binaysinha
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      •
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      5h
                    </span>
                    <span>
                      <MDBIcon fas icon="angle-down" className="float-end" />
                    </span>
                  </h6>
                </a>
                <p style={{ lineHeight: "1.2" }}>
                  Join us at our vibrant NGO event today supporting deaf children!<a href="#!">#save</a>{" "}
                  adipisicing elit. Officiis, <a href="#!"> #event</a>. Your purchase will directly 
                  contribute to funding education and empowering these amazing kids. Let's build a future 
                  empowering these amazing kids. Let's build a future of inclusivity and endless possibilities!  <a href="#!">#deserunt</a> odit libero
                  Say yes to education.
                </p>

                <MDBCard
                  className="border mb-3 shadow-0 "
                  style={{ maxWidth: "540px" }}
                >
                  <MDBRow className="g-0">
                    <MDBCol md="3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (20).webp"
                        alt="Avatar"
                        className="img-fluid rounded-left"
                      />
                    </MDBCol>
                    <MDBCol md="9">
                      <MDBCardBody>
                        <MDBCardText style={{ lineHeight: "1" }}>
                          Fundraiser
                        </MDBCardText>
                        <MDBCardText
                          className="small mb-0"
                          style={{ lineHeight: "1.2" }}
                        >
                          
                          Every purchase goes towards providing education and support for deaf children, 
                          and reach their full potential. Come show your support and make a difference today!
                        </MDBCardText>
                        <MDBCardText
                          className="small mb-0"
                          style={{ lineHeight: "1.2" }}
                        >
                          <MDBIcon fas icon="link" size="xs" className="pe-1" />
                          Mukti Event
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-between mb-0 pe-xl-5"
                >
                  <li>
                    <MDBIcon far icon="comment" />
                  </li>
                  <li>
                    <MDBIcon fas icon="retweet" />
                    <span className="small ps-2">8</span>
                  </li>
                  <li>
                    <MDBIcon far icon="heart" />
                    <span className="small ps-2">97</span>
                  </li>
                  <li>
                    <MDBIcon far icon="share-square" />
                  </li>
                </MDBTypography>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (24).webp"
              className="rounded-circle"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#">
                  <h6 className="text-body">
                    Anna Doe
                    <span className="small text-muted font-weight-normal mx-1">
                      @annadoe
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      •
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      7h
                    </span>
                    <span>
                      <MDBIcon fas icon="angle-down" className="float-end" />
                    </span>
                  </h6>
                </a>
                <p style={{ lineHeight: "1.2" }}>
                  Food campaign event has been eye-opening! It's alarming to 
                  learn about <a href="#!">#distraught</a> the scale of hunger around
                  the world. 
                </p>
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className="img-fluid rounded mb-3"
                  alt="Fissure in Sandstone"
                />
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-between mb-0 pe-xl-5"
                >
                  <li>
                    <MDBIcon far icon="comment" />
                  </li>
                  <li>
                    <MDBIcon fas icon="retweet" />
                    <span className="small ps-2">11</span>
                  </li>
                  <li>
                    <MDBIcon far icon="heart" />
                    <span className="small ps-2">65</span>
                  </li>
                  <li>
                    <MDBIcon far icon="share-square" />
                  </li>
                </MDBTypography>
              </div>
            </div>
          </div>
          <div className="d-flex p-3 border-bottom">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (3).webp"
              className="rounded-circle"
              height="50"
              alt="Avatar"
              loading="lazy"
            />
            <div className="d-flex w-100 ps-3">
              <div>
                <a href="#">
                  <h6 className="text-body">
                    Ankit ccccSen
                    <span className="small text-muted font-weight-normal mx-1">
                      @ankitsen
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      •
                    </span>
                    <span className="small text-muted font-weight-normal me-1">
                      10h
                    </span>
                    <span>
                      <MDBIcon fas icon="angle-down" className="float-end" />
                    </span>
                  </h6>
                </a>
                <p style={{ lineHeight: "1.2" }}>
                  Watch this video I shooted in the event.
                  Let's use our voices to raise awareness.
                </p>
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src="https://www.youtube.com/watch?v=T31WCLjfs6A"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
                <MDBTypography
                  listUnStyled
                  className="d-flex justify-content-between mb-0 pe-xl-5"
                >
                  <li>
                    <MDBIcon far icon="comment" />
                  </li>
                  <li>
                    <MDBIcon fas icon="retweet" />
                    <span className="small ps-2">34</span>
                  </li>
                  <li>
                    <MDBIcon far icon="heart" />
                    <span className="small ps-2">159</span>
                  </li>
                  <li>
                    <MDBIcon far icon="share-square" />
                  </li>
                  
                </MDBTypography>
                
              </div>
            </div>
          </div>
        </div>
      </MDBCard>
    </MDBContainer>
  );
}