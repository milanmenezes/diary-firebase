import AppBar from "./components/AppBar";
import Container from "@mui/material/Container";
import Datepicker from "./components/Calendar";
import Grid from "@mui/material/Grid";
import UncontrolledEditor from "./components/Editor";

function App() {
  return (
    <Container maxWidth="false">
      <AppBar />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={3}
      >
        <Grid item xs={2} sm={4} md={4} key="g1">
          <Datepicker />
        </Grid>
        <Grid item xs={4} sm={6} md={6} key="g2">
          <UncontrolledEditor />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
