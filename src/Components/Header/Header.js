import React from "react";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { AccountBox } from "@mui/icons-material";

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ minHeight: "70px" }}>
        <Stack direction="row" spacing="5px" alignItems="center">
          <AccountBox sx={{ height: "18px", width: "18px" }}></AccountBox>
          <Typography sx={{ fontSize: "22px" }}>My Contacts</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
