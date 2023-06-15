import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import hotelLogo from "../../images/hotelLogo.jpg"
import "../../App.css"
import { Facebook } from "@mui/icons-material";


const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}

      >

<Box style={{display:"flex", justifyContent:"space-between"}}>
        <div className="outletAddress">
          <h3 style={{marginBottom:"30px", color:"rgb(217, 52, 30)"}}>शाखा क्रमांक १</h3>
          <p>बीड बायपास रोड,</p>
          <p>बेंबडे हॉस्पिटल समोर,</p>
          <p>छ. संभाजीनगर</p>
          <p>431001</p>
        </div>


        <div className="outletAddress" style={{margin:"auto"}}>
              <img src={hotelLogo} alt="logo"  className="footerLogo" />
              </div>

              <div className="outletAddress">
          <h3 style={{marginBottom:"30px", color:"rgb(217, 52, 30)"}}>शाखा क्रमांक २</h3>
          <p>सेंट जॉन इंग्लिश स्कूल च्या </p>
          <p>शेजारी ( बाजुला )</p>
          <p> जळगाव रोड,  हरसूल,</p>
          <p>छ. संभाजीनगर</p>
          <p>431001</p>
        </div>


              </Box>

        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <Facebook />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; || हॉटेल जगदंब ||
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
