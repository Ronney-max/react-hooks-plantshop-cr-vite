import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePlant }) {
  return (
    <ul>
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onUpdatePlant={onUpdatePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;