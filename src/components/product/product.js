import s from '../product/product.module.css';

export default function Product({ api }) {
  console.log('!!!props.api', api);
  return (
    <div className={s.container}>
      <ul className={s.flex_container}>
        {api.map(product => {
          return (
            <li key={product.id} className={s.flex_element}>
              <h2 className={s.title}>{product.title}</h2>
              <img src={product.image} className={s.img} alt="product foto" />
              <h3>Price: {product.price}</h3>
              <h4>{product.description}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
