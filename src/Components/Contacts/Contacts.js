import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ContactCard from "./ContactCard";

const Contacts = (props) => {
  function toggleFavoriteHandler(contactId) {
    props.toggleFavoriteHandler(contactId);
  }

  return (
    <Grid2
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      padding={3}
      justifyContent="center"
    >
      {props.contactList.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          avatar={contact.avatar}
          firstname={contact.firstname}
          lastname={contact.lastname}
          phone={contact.phone}
          email={contact.email}
          location={contact.location}
          favorite={contact.favorite}
          onToggleFavorite={toggleFavoriteHandler}
        />
      ))}
    </Grid2>
  );
};

export default Contacts;
