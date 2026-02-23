function PlantCard({plant, onUpdatePlant}) {
  function handleSoldOut() {
    onUpdatePlant({...plant, soldOut: !plant.soldOut})
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={"http://127.0.0.1:3000/plants"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button onClick={handleSoldOut}>
          {plant.soldOut ? "In Stock" : "Sold Out"}
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
