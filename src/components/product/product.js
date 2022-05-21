import s from '../product/product.module.css';

export default function Product({ api }) {
  console.log('!!!props.api', api);
  return (
    <div>
      <ul className={s.flex_elements}>
        {api.map(product => {
          return (
            <li key={product.id} className={s.card}>
              <h2>{product.title}</h2>
              <img src={product.image} width="200" alt="product foto" />
              <h3>{product.price}</h3>

              <h3>{product.description}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
