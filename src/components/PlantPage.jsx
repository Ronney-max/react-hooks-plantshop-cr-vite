import  { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ GET plants on page load
  useEffect(() => {
    fetch("http://127.0.0.1:3000/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // ✅ Add new plant (POST)
  function handleAddPlant(newPlant) {
    fetch("http://127.0.0.1:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => setPlants([...plants, data]));
  }

  // ✅ Mark plant as sold out (PATCH)
  function handleUpdatePlant(updatedPlant) {
    fetch(`http://127.0.0.1:3000/plants/${updatedPlant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) =>
        setPlants(
          plants.map((plant) =>
            plant.id === data.id ? data : plant
          )
        )
      );
  }

  // ✅ Search Filter
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList
        plants={filteredPlants}
        onUpdatePlant={handleUpdatePlant}
      />
    </main>
  );
}

export default PlantPage;