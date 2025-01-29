'use client';
import { useState } from 'react';

const Carrossel = () => {
  // Definir um estado para controlar a imagem atual
  const [index, setIndex] = useState(0);

  // Lista de URLs das imagens do carrossel (sem a parte '/public')
  const imagens = [
    '/img/img1.jpg',
    '/img/img3.jpg',
    '/img/img4.jpg',
    '/img/img5.jpg',
  ];

  // Função para ir à imagem anterior
  const anterior = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? imagens.length - 1 : prevIndex - 1));
  };

  // Função para ir à próxima imagem
  const proximo = () => {
    setIndex((prevIndex) => (prevIndex === imagens.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carrossel">
      <button onClick={anterior} className="anterior">{"<"}</button>
      <img src={imagens[index]} alt={`Imagem ${index + 1}`} />
      <button onClick={proximo} className="proximo">{">"}</button>
    </div>
  );
};

export default Carrossel;
