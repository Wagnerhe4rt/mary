'use client';  // Importante para uso de hooks no Next.js 13+

import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import styles from '../components/styles/nutricional.module.css';
//import  from '../components/styles/nutrional.css';
// Componente para exibir a tabela com as informações nutricionais
const NutritionTable = ({ data }) => {
  return (
    <table className={styles.nutritionTable}>
      <thead>
      <tr>
          <th>INFORMAÇÃO NUTRICIONAL</th>
        </tr>
        <tr>
          <th></th>
          <th>Quantidade por Porção</th>
          <th>%VD(*)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            <td>{value}</td>  
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Home() {
  // Estado do formulário
  const [formData, setFormData] = useState({
    calorias: '',
    gorduraTotal: '',
    gorduraSaturada: '',
    carboidrato: '',
    fibra: '',
    proteina: '',
    SODIO: '',
  });

  // Estado para as informações nutricionais
  const [nutritionData, setNutritionData] = useState(null);

  // Função para atualizar o estado com os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para submeter o formulário e mostrar os dados
  const handleSubmit = (e) => {
    e.preventDefault();
    setNutritionData(formData);  // Atualiza o estado com os dados do formulário
  };

  // Função para exportar a imagem do conteúdo
  const exportToImage = () => {
    const element = document.getElementById('exportable-content');
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'informacoes_nutricionais.png';
        link.click();
      });
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>INFORMAÇÃO NUTRICIONAL</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          type="text"
          name="calorias"
          placeholder="Calorias"
          value={formData.calorias}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="text"
          name="gorduraTotal"
          placeholder="Gordura Total"
          value={formData.gorduraTotal}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="text"
          name="gorduraSaturada"
          placeholder="Gordura Saturada"
          value={formData.gorduraSaturada}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="text"
          name="carboidrato"
          placeholder="Carboidrato"
          value={formData.carboidrato}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="text"
          name="fibra"
          placeholder="Fibra"
          value={formData.fibra}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="text"
          name="proteina"
          placeholder="Proteína"
          value={formData.proteina}
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="text"
          name="SODIO"
          placeholder="SODIO"
          value={formData.sal}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">Gerar Tabela</button>
      </form>

      {/* Exibe a tabela com as informações nutricionais se houver dados */}
      {nutritionData && (
        <div id="exportable-content">
          <NutritionTable data={nutritionData} />
        </div>
      )}

      {/* Botão para exportar a imagem */}
      <button className={styles.button} onClick={exportToImage}>Exportar Imagem</button>
    </div>
  );
}
