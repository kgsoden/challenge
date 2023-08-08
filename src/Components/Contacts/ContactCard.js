import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import React from "react";
import { Favorite } from "@mui/icons-material";
import ContactInfo from "./ContactInfo";
import styled from "@emotion/styled";

const ContactCard = (props) => {
  const onFavoriteClickHandler = (id) => {
    props.onToggleFavorite(id);
  };

  const CustomCard = styled(Card)({
    maxWidth: "18rem",
    minWidth: "18rem",
    maxHeight: "25rem",
    minHeight: "25rem",
    backgroundColor: "#252850",
    color: "white",
    margin: ".2rem",
    border: "1px solid",
    boxShadow: 2,
  });

  const CustomAvatar = styled(Avatar)({
    verticalAlign: "center",
    position: "absolute",
    width: "5rem",
    height: "5rem",
    marginTop: "-2.5rem",
    marginLeft: "1.5rem",
    border: ".5rem solid",
    borderColor: "#252850",
  });

  const FavoriteIcon = styled(IconButton)({
    color: "#FF52A2",
  });

  return (
    <div>
      <CustomCard>
        <CardMedia
          component="img"
          height="120rem"
          image="/backgroundImage.avif"
        ></CardMedia>
        <CustomAvatar alt={props.lastname} src={props.avatar}></CustomAvatar>
        <CardContent>
          <ContactInfo
            firstname={props.firstname}
            lastname={props.lastname}
            phone={props.phone}
            email={props.email}
            location={props.location}
          ></ContactInfo>
        </CardContent>
        {props.favorite === true ? (
          <FavoriteIcon onClick={() => onFavoriteClickHandler(props.id)}>
            <Favorite />
          </FavoriteIcon>
        ) : (
          <IconButton onClick={() => onFavoriteClickHandler(props.id)}>
            <Favorite />
          </IconButton>
        )}
      </CustomCard>
    </div>
  );
};

export default ContactCard;
