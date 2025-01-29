// App.js
import React, { useState } from "react";
//import "./styles/footer.module.css";

//import '/projetos/mary/src/app/footer'
import "../components/styles/nutricional.module.css";

// Componente para exibir as informações nutricionais
function NutritionLabel({ data }) {
  return (
    <div className="nutrition-label">
      <h2>Informação Nutricional</h2>
      <table>
        <tbody>
          {Object.keys(data).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{data[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Componente para inserir as informações nutricionais
function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    calorias: "",
    gorduraTotal: "",
    gorduraSaturada: "",
    carboidrato: "",
    fibra: "",
    proteina: "",
    sal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="calorias"
        value={formData.calorias}
        onChange={handleChange}
        placeholder="Calorias"
      />
      <input
        type="text"
        name="gorduraTotal"
        value={formData.gorduraTotal}
        onChange={handleChange}
        placeholder="Gordura Total"
      />
      <input
        type="text"
        name="gorduraSaturada"
        value={formData.gorduraSaturada}
        onChange={handleChange}
        placeholder="Gordura Saturada"
      />
      <input
        type="text"
        name="carboidrato"
        value={formData.carboidrato}
        onChange={handleChange}
        placeholder="Carboidrato"
      />
      <input
        type="text"
        name="fibra"
        value={formData.fibra}
        onChange={handleChange}
        placeholder="Fibra"
      />
      <input
        type="text"
        name="proteina"
        value={formData.proteina}
        onChange={handleChange}
        placeholder="Proteína"
      />
      <input
        type="text"
        name="sal"
        value={formData.sal}
        onChange={handleChange}
        placeholder="Sal"
      />
      <button type="submit">Gerar Informação Nutricional</button>
    </form>
  );
}

function App() {
  const [nutritionData, setNutritionData] = useState(null);

  const handleFormSubmit = (data) => {
    setNutritionData(data);
  };

  return (
    <div className="App">
      <InputForm onSubmit={handleFormSubmit} />
      {nutritionData && <NutritionLabel data={nutritionData} />}
    </div>
  );
}

export default App;
