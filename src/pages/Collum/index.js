import React from 'react';
import style from "./style.css";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Radio } from '@mui/material';

export default function CheckboxLabels() {
  return (
  <div>
    <div className='collum-body'>
    <p><strong>Filtrar por</strong></p>
        <hr />
    <FormGroup> 
      <FormControlLabel control={<Checkbox />} label="Adiddas" />
      <FormControlLabel control={<Checkbox />} label="Calenciaga" />
      <FormControlLabel control={<Checkbox />} label="K-Swiss" />
      <FormControlLabel control={<Checkbox />} label="Nike" />
      <FormControlLabel control={<Checkbox />} label="Puma" />
      <p><strong>Categorias</strong></p>
      <FormControlLabel control={<Checkbox />} label="Esporte e lazer" />
      <FormControlLabel control={<Checkbox />} label="Casual" />
      <FormControlLabel control={<Checkbox />} label="Utilitário" />
      <FormControlLabel control={<Checkbox />} label="Corrida" />
        <p><strong>Gênero</strong></p>
        <FormControlLabel control={<Checkbox />} label="Masculino" />
        <FormControlLabel control={<Checkbox />} label="Feminino" />
        <FormControlLabel control={<Checkbox />} label="Unisex" />
        <p><strong>Estado</strong></p>
        <FormControlLabel control={<Radio />} label="Novo" />
        <FormControlLabel control={<Radio />} label="Usado" />

    </FormGroup>
    </div>
    </div>
  );
} 