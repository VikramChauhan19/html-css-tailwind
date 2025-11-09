import Card from "./Card";
function Tours(props) {
  return (
    <div className="container">
      <h2 className="title">Plan With Vikram</h2>
      <div className="cards">
        {props.tours.map((tour) => {
          return (
            <Card key={tour.id} {...tour} removeTourHandler={props.removeTourHandler}></Card> //it is a good practice to add key while rendering list of components because it helps react to identify which items have changed, are added, or are removed 
          );
        })}
      </div>
    </div>
  );
}

export default Tours;
