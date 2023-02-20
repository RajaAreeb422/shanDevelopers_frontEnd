import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  Details,
  Description,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LinkedIn,
  LocationCity,
  Phone,
  Email,
} from "@material-ui/icons";
import fot from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={fot.box}>
      <div className={fot.container}>
        <div className={fot.row}>
          <div className={fot.columnS}>
            <h2>Shaan Developers</h2>
            <p style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className={fot.column}>
            <h2 className={fot.heading}>Quick Links</h2>
            <hr className={fot.hh} />
            <div className={fot.footlink}>
              <Link
                href="https://foresttown.com.pk/maple-range/#"
                as={`https://foresttown.com.pk/maple-range/#`}
                className={fot.footlink}
              >
                
                  {">"}Home
              
              </Link>
            </div>
            <div className={fot.footlink}>
              <Link
                href="https://ft-foresttown.vercel.app/"
                as={`https://ft-foresttown.vercel.app/`}
                className={fot.footlink}
              >
             
                  {">"}About Us
                
              </Link>
            </div>
          </div>
          <div className={fot.column}>
            <h2 className={fot.heading}>Contact Us </h2>
            <hr className={fot.hh} />
            <Link
              href="https://foresttown.com.pk/contact/"
              as={`https://foresttown.com.pk/contact/`}
              className={fot.mlink}
            >
           
              <div style={{ display: "flex" }}>
                <LocationCity />
                <p >Address</p>
              </div>
            </Link>
            <Link
              href="https://foresttown.com.pk/"
              as={`https://foresttown.com.pk/`}
              className={fot.mlink}
            >
              <div style={{ display: "flex" }}>
                <Phone />
                <p >Phone1</p>
              </div>
            </Link>
            <Link
              href="https://foresttown.com.pk/about-us/"
              as={`https://foresttown.com.pk/about-us/`}
              className={fot.mlink}
            >
              <div style={{ display: "flex" }}>
                <Phone />
                <p >Phone 2</p>
              </div>
            </Link>
            <Link
              href="https://foresttown.com.pk/contact/"
              as={`https://foresttown.com.pk/contact/`}
              className={fot.mlink}
            >
              <div style={{ display: "flex" }}>
                <Email />
                <p >Email</p>
              </div>
            </Link>
          </div>
          <div className={fot.column}>
            <div className={fot.footlink} href="#">
              <img src="./logo.jpeg" className={fot.logo} />
              <h4 className={fot.heading} style={{ paddingTop: "20px" }}>
                Social Links
              </h4>

              <Link
                href="https://www.facebook.com/ForesttownIsb.official/?
              show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip
              =0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=
              0&show_follower_visibility_disclosure=0"
                className={fot.footlink}
              >
                <Facebook style={{ marginLeft: "20px", color: "white" }} />
              </Link>
              <Link
                href="https://twitter.com/foresttown_off?s=09"
                className={fot.footlink}
              >
                <Twitter style={{ marginLeft: "20px", color: "white" }} />
              </Link>
              <Link
                href="https://www.instagram.com/foresttown.official/?igshid=YmMyMTA2M2Y%3D"
                className={fot.footlink}
              >
                <Instagram style={{ marginLeft: "20px", color: "white" }} />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCJYgfho7IIuEAw7OBWRdhSQ"
                className={fot.footlink}
              >
                <YouTube style={{ marginLeft: "20px", color: "white" }} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/forest-town-official/"
                className={fot.footlink}
              >
                <LinkedIn style={{ marginLeft: "20px", color: "white" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          color: "black",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <div className={fot.footerRights}>
        <span
          style={{
            color: "white",
            textAlign: "center",
            height: "30px",
          }}
        >
          © CyberXStudio-All Rights Reserved
        </span>
        <div style={{ display: "flex" }}>
          <p>Home</p>
          <p style={{ marginLeft: "16px" }}>About Us</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
