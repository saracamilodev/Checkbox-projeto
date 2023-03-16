import React, { useEffect } from "react";
import { Button, Card, Grid, Fab } from "@mui/material";
import { useParams } from "react-router-dom";
import converse01 from "./img/converse01.webp";
import converse02 from "./img/converse02.webp";
import converse03 from "./img/converse03.webp";
import converse04 from "./img/converse04.webp";
import converse05 from "./img/converse05.webp";
import { Stack } from "@mui/system";
import { ChevronLeft, ChevronRight, Star, StarOutline } from "@mui/icons-material";
import "./styles.scss";


export default function DetalhesProdutos() {
    const {id} = useParams();
    const [atual, setAtual] = React.useState(0);
    const [color, setColor] = React.useState(0);

    const imagens = [
            converse01,
            converse02,
            converse03,
            converse04,
            converse05,
        ];

    const Items = () => {
        return imagens.map((cada, posicao)=> {
            return (
                <Grid item xs={2.4}>
                    <Card onClick={() => setAtual(posicao)} sx={(atual === posicao) && { border: "2px solid red"}}>
                        {posicao}
                        <img src={cada} width="100px"/>
                    </Card>    
                </Grid>
                );
        });
    }
    //rotação do banner

    function anterior(){ 
        if(atual === 0){
            setAtual(imagens.length - 1);
        }else{
            setAtual(atual - 1);
        }
    } 
        
    function proximo(){
        if(atual < imagens.length - 1){
         setAtual(atual + 1);
        }else{
            setAtual(0)
        }
    }

    React.useEffect (() => {
        let intervalo = setInterval(proximo, 3000);

        return () => clearInterval(intervalo);
    });

    return(
        <div className="product-details">
            Detalhes do produto {id}

            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Card align="center">
                        <Stack direction="row"
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                        <ChevronLeft sx={{fontSize: "60px"}} />
                            
                        <img width="400px" src={imagens[atual]}/>
                        
                        <ChevronRight sx={{fontSize: "60px"}} onClick={proximo} />
                        </Stack>
                    </Card>

            
                <Grid container spacing={2}>
                    <Items/>
                
                </Grid>
            </Grid>
            
                <Grid item xs={5}>
                    <div className="title">
                        Tênis nike
                        </div>

                    <div className="ref">
                        Casual | nike
                        </div>

                    <div className="revlews">
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <StarOutline/>
                        </div>

                        <div>
                            R$ 219.00
                        </div>

                        <div>
                            Descrição do produto
                        </div>

                        <div>
                            Tamanho
                        </div>

                        <div>
                            <p>cor <small>{color}</small></p>
                            <Fab onClick={() => setColor("Azul")} color="primary"></Fab>
                            <Fab onClick={() => setColor("Roxo")} color="secondary"></Fab>
                            <Fab onClick={() => setColor("Verde")} color="success"></Fab>
                            <Fab onClick={() => setColor("Vermelho")} color="error"></Fab>
                        </div>

                        <br />

                        <Button className="buy" variant="contained"> COMPRAR </Button>

                </Grid>
            </Grid>
        </div>
        )
}