import React, { useState } from 'react'
import { Container, Box, Button } from '@mui/material'
import { MapContainer, TileLayer } from 'react-leaflet';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Mapa = () => {
    const[paradas, setParadas] = useState([]);
    const[busqueda, setBusqueda] = useState("");

    const getParadas = (search) =>{
        axios.get("https://pcu3s1.deta.dev/paradas/"+search).then((response) =>{
            console.log(response.data);
        })
    };

    return (
        <Container maxWidth="xl" sx={{ mb: 3 }}>
            <Button variant="contained" color="secondary" sx={{"mt":"10px"}} onClick={() => {window.open("http://localhost:8000/logs")}}> Mostrar Logs</Button>
            <Box sx={{ m: "20px", border: 3, borderColor: "#BF40BF" }}>
                <MapContainer style={{ width: "100%", height: "55vh" }} center={[36.72184282369917, -4.418403224132213]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </Box>
            <Box>
                <TextField id="parada" label="Parada" variant="outlined" onChange={(event) => {setBusqueda(event.target.value)}}/>
                <Button variant="contained" onClick={() => {getParadas(busqueda)}} color="secondary" type="submit" sx={{"m":"10px"}}> Buscar </Button>
            </Box>

        </Container>
    )
}

export default Mapa