const Proudact = (props) => {
  return (
    <div className="card  m-auto text-center" style={{ width: '18rem' }}>
      <img src={props.imgUrl} className="card-img-top" alt="car" />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">price: {props.price}$</li>
        <li class="list-group-item">Category: {props.category}</li>
      </ul>
    </div>
  );
};
export default Proudact;
