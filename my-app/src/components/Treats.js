function Treats() {
  //fetch data from dog_treats table & display it 


  return (
    <div className="treatsPage">
      <h1>Shop For Dog Treats</h1>
      {/* <br></br>
      {data.map((dog_treats) => (
        <div className="productDisplay" key={dog_treats.barcode}>
          <h3>{dog_treats.name}</h3>
          <h4>{dog_treats.brand}</h4>
          <img src={dog_treats.image} alt="Dog Treats"></img>
          <h5>{dog_treats.price}</h5>
          <h6>{dog_treats.weight}</h6>
          <button className="add-btn">Add</button>
          <br></br>
        </div> */}
      ))}
    </div>
  );
}

export default Treats;