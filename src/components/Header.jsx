import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

function Header() {
  const { currency, setCurrency } = CryptoState();
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <>
      <AppBar color="transparent" position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                style={{
                  color: "#4fc3f7",
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                }}
                to="/"
              >
                Crypto Realm
              </Link>
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
                color: "black",
                backgroundColor: "white",
                borderRadius: 0,
                border: "2px solid black",
              }}
              onChange={handleChange}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
