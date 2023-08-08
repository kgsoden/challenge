import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Content.css";
import styled from "@emotion/styled";
import Axios from "axios";
import Contacts from "../Contacts/Contacts";

const Content = () => {
  const FavoritesToggleButton = styled(Button)({
    backgroundColor: "transparent",
    color: "#2A79C4",
    alignItems: "center",
    width: "20rem",
    height: 40,
    fontSize: 16,
    padding: 10,
    border: "2px solid",
    borderRadius: "2px",
    borderColor: "#2A79C4",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#2A79C4",
      alignItems: "center",
      width: "20rem",
      height: 40,
      fontSize: 16,
      padding: 10,
      border: "2px solid",
      borderRadius: "2px",
      borderColor: "#2A79C4",
    },
  });

  const [showFavorites, setShowFavorites] = useState(false);

  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await Axios("https://randomuser.me/api/?results=10");

    setContactList(
      response.data.results.map((contact) => ({
        id: contact.login.uuid,
        avatar: contact.picture.thumbnail,
        firstname: contact.name.first,
        lastname: contact.name.last,
        phone: contact.phone,
        email: contact.email,
        location: `${contact.location.city}, ${contact.location.country}`,
        favorite: false,
      }))
    );
  };

  const showFavoritesHandler = () => {
    setShowFavorites(true);
  };
  const showAllHandler = () => {
    setShowFavorites(false);
  };

  function toggleFavoriteHandler(contactId) {
    setContactList(
      contactList.map((contact) => {
        if (contact.id === contactId && contact.favorite === false) {
          return {
            ...contact,
            favorite: true,
          };
        } else if (contact.id === contactId && contact.favorite === true) {
          return {
            ...contact,
            favorite: false,
          };
        } else {
          return contact;
        }
      })
    );
    if (showFavorites === true) {
      showFavoritesHandler();
    }
  }

  return (
    <div>
      <Stack justifyContent="center">
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "300",
          }}
        >
          {showFavorites === true ? "My Favorite Contacts" : "My Contacts"}
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "400",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          Click on the heart button of a card to mark a contact as favorite
        </Typography>
        <div>
          {showFavorites === false ? (
            <FavoritesToggleButton
              variant="contained"
              onClick={showFavoritesHandler}
            >
              SHOW FAVORITE CONTACTS
            </FavoritesToggleButton>
          ) : (
            <FavoritesToggleButton variant="contained" onClick={showAllHandler}>
              SHOW ALL CONTACTS
            </FavoritesToggleButton>
          )}
        </div>

        <Contacts
          contactList={
            showFavorites === true
              ? contactList.filter((contact) => {
                  return contact.favorite === true;
                })
              : contactList
          }
          toggleFavoriteHandler={toggleFavoriteHandler}
        ></Contacts>
      </Stack>
    </div>
  );
};

export default Content;
