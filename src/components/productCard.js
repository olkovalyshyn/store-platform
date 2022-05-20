export default function ProductCards(props) {
  console.log('!!!props', props);

  // console.log('!!!props.api', props.api);
  return (
    <ul>
      {props.api.map(product => {
        return (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} width="200" alt="product foto" />
            <h3>{product.price}</h3>

            <h3>{product.description}</h3>
          </li>
        );
      })}
    </ul>
  );
}
