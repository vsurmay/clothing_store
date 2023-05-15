import { MoonLoader } from "react-spinners";
import classes from "./Spiner.module.scss";
import Container from "../Container/Container";

function Spiner() {
  return (
    <Container>
      <div className={classes.container}>
        <MoonLoader className={classes.spiner} color="#000000" />
      </div>
    </Container>
  );
}

export default Spiner;
