// import Carousel from "./Carousel";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Carousel from "./Carousel";



function Banner() {
 

  return (
    <div
    style={{
      backgroundImage: "url(./banner2.jpg)",
    }}>
      <Container style={{
         height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
      }}>
        <div style={{
           display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
        }}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Realm
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Welcome to CryptoCurrencies world.
          </Typography>
        </div>
        <div style={{}}>
          <Carousel />
        </div>
      </Container>
    </div>
  );
}

export default Banner;
