export default function fetchProducts() {
  fetch('https://fakestoreapi.com/products').then(res => res.json());
}
