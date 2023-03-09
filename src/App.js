import { Container, Typography, Grid, TextField, FormControl, Select, MenuItem } from "@mui/material"

import './App.css';

function App() {
  const militares = [
    {
      id: 1,
      nome: "CAP GIANCARLO"
    },
    {
      id: 2,
      nome: "ST CARLOS"
    },
    {
      id: 3,
      nome: "1ºSGT VITOR"
    },
    {
      id: 4,
      nome: "1ºSGT JUNQUEIRA"
    },
    {
      id: 5,
      nome: "1ºSGT DANIEL"
    },
    {
      id: 6,
      nome: "1ºSGT PEREIRA"
    },
    {
      id: 7,
      nome: "3ºSGT SARAIVA"
    },
    {
      id: 8,
      nome: "CB LUDSON"
    },
    {
      id: 9,
      nome: "CB ADRIANO"
    },
    {
      id: 10,
      nome: "SD ALBERT"
    },
    {
      id: 11,
      nome: "SD JONILLE"
    },
    {
      id: 12,
      nome: "SD AMIN SANTOS"
    },
    {
      id: 13,
      nome: "SD JUNIOR"
    },
    {
      id: 14,
      nome: "SD HUGO MOREIRA"
    },
    {
      id: 15,
      nome: "SD BRASIL"
    },
    {
      id: 14,
      nome: "SD RUBENS"
    },
    {
      id: 14,
      nome: "SD SENA"
    },
    {
      id: 14,
      nome: "SD HAILSON"
    },
  ]



  return (
    <Container maxWidth="sm">
      <Typography align='center' variant="h4" gutterBottom>
        Pecúlio da ECAP
      </Typography>
      <Grid container>
        {
          militares.map(militar => (
            <>
              <Grid item xs={7}>
                <TextField
                  id="standard-size-normal"
                  defaultValue={militar.nome}
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item xs={5}>
                <FormControl fullWidth>

                  <Select
                    id="demo-simple-select"
                    fullWidth

                  >
                    <MenuItem value={1}>Pronto</MenuItem>
                    <MenuItem value={2}>Dispensado</MenuItem>
                    <MenuItem value={3}>Férias</MenuItem>
                    <MenuItem value={4}>Instalação</MenuItem>
                    <MenuItem value={5}>Luto</MenuItem>
                    <MenuItem value={6}>Nupcias</MenuItem>
                    <MenuItem value={7}>Falta</MenuItem>
                    <MenuItem value={8}>Disp Medica</MenuItem>
                    <MenuItem value={9}>Curso</MenuItem>
                    <MenuItem value={10}>Voô</MenuItem>
                    <MenuItem value={11}>Missão</MenuItem>
                    <MenuItem value={12}>Serviço</MenuItem>
                    <MenuItem value={13}>SSV</MenuItem>
                    <MenuItem value={14}>BAdm</MenuItem>
                    <MenuItem value={15}>CMN</MenuItem>
                    <MenuItem value={16}>Instrução</MenuItem>
                    <MenuItem value={17}>Formatura</MenuItem>


                  </Select>
                </FormControl>


              </Grid>
            </>
          ))
        }
      </Grid>
    </Container>
  );
}

export default App;
