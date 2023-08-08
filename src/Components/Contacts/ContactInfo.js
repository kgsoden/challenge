import styled from "@emotion/styled";
import {
  EmailOutlined,
  LocationOnOutlined,
  PhoneAndroidOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

const ContactInfo = (props) => {
  const Name = styled(Typography)({
    textAlign: "right",
    textEmphasisStyle: "bold",
    fontSize: "1.8rem",
    color: "#b3b8cd",
  });

  const ContactInfo = styled(Typography)({
    textAlign: "left",
    padding: ".2rem",
    color: "#b3b8cd",
  });

  return (
    <div>
      <Name>{props.firstname}</Name>
      <Name>{props.lastname}</Name>
      <Stack direction="row">
        <PhoneAndroidOutlined
          sx={{
            padding: ".4rem",
            height: "1.2rem",
            width: "1.2rem",
            color: "#b3b8cd",
          }}
        />
        <ContactInfo>{props.phone}</ContactInfo>
      </Stack>
      <Stack direction="row">
        <EmailOutlined
          sx={{
            padding: ".4rem",
            height: "1.2rem",
            width: "1.2rem",
            color: "#b3b8cd",
          }}
        />
        <ContactInfo>{props.email}</ContactInfo>
      </Stack>
      <Stack direction="row">
        <LocationOnOutlined
          sx={{
            padding: ".4rem",
            height: "1.2rem",
            width: "1.2rem",
            color: "#b3b8cd",
          }}
        />
        <ContactInfo>{props.location}</ContactInfo>
      </Stack>
    </div>
  );
};

export default ContactInfo;
