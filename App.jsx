
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Starter from "./components/Starter";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|starter)">
          <Starter {...starterData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const starterData = {
    group1142812794: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/group-1142812794@2x.png",
    rectangle93: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/aa2i4685-min-1.png",
    istock1306636610Min1: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/istock-1306636610-min-1.png",
    hero_2XJpg: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/hero-2x-jpg.png",
    title: "INVITE",
    confirmation: "CONFIRMATION",
    taoAsianBistroN: <React.Fragment>Tao Asian Bistro &amp; Nightclub<br />at The Venetian ( MEZZANINE LEVEL )</React.Fragment>,
    rewardspadding1: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/rewardspadding-1@2x.png",
    pleaseJoinUsAndE: <React.Fragment>Please join us and enjoy this social event as a thank you<br />for being an existing or potential Unlimited Technology<br />client. Meet UT leadership including John Palumbo, our<br />CEO. We look forward to a collaborative relationship as<br />we kick off 2023. Our sponsors will be in attendance if<br />you wish to explore a requirement or just put a face to a<br />name. We look forward to seeing you!</React.Fragment>,
    scrollDownForYourQrCodeInvite: "Scroll down for your QR CODE invite.",
    march29Th530Pm830Pm: <React.Fragment>MARCH 29TH <br />5:30 PM - 8:30 PM</React.Fragment>,
    vector32: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/62e2cb0e95cec0501ebfb82c/img/line-2@2x.png",
    aa2I4685Min1: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/aa2i4685-min-1.png",
    group1142812808: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/aa2i4685-min-1.png",
    vector34: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/aa2i4685-min-1.png",
    vector33: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/aa2i4685-min-1.png",
    rectangle284: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/aa2i4685-min-1.png",
    clientsSec: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/clients-sec@2x.png",
    frame406: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/frame-406@2x.png",
    iconsSecurityIcSecuritySecuredProfi: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/icons-security-ic-security-secured-profile@2x.png",
    weLookForwardToSeeingYou: "WE LOOK FORWARD TO SEEING YOU",
    webLogo202212: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/web-logo-2022-1-2@2x.png",
    group1142812814: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/group-1142812814@2x.png",
    faviconBi21: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/favicon---bi--2--1@2x.png",
    poweredBySv3Visit: <React.Fragment>Powered by SV3 Visitor Management <br />from Building Intelligence Inc.</React.Fragment>,
    secBg: "https://anima-uploads.s3.amazonaws.com/projects/62e2b5b6072e5caa0aa1b3c0/releases/641a098fbf4747824b004c92/img/aa2i4685-min-1.png",
    paragraph1: "[Address Here]",
    paragraph2: "[contact@email.com]  |  Privacy  |  Terms",
    paragraph3: "Unsubscribe   |   View in Browser",
    paragraph4: "Copyright © 2023. All rights reserved.",
};

