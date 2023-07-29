
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));



const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  

  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  
  const containerStyle = {
    width: isHovered ? "50px" : "50px",
    height: isHovered ? "50px" : "50px",

    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    transition: "width 0.3s ease, height 0.3s ease",
   
  
  };
  const textStyle = {
    fontSize: "18px",
    color: isHovered ? "gold" : "white", // Change color on hover
    transition: "color 0.3s ease",
  };

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              Crypto Hunter
            </Typography>

            <Typography
              onClick={() => history.push(`/about`)}
              style={containerStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              variant="h6"
              className={classes.title}
              
            >
              <p style={textStyle}>About</p>
            </Typography>
            {/* <div
            onClick={() => history.push(`/about`)}
      style={containerStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <p style={textStyle}>About</p> */}
    {/* </div> */}
            {/* <Button color="inherit">Login</Button> */}
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"RUB"}>RUB</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
