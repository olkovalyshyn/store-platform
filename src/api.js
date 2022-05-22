function fetchProducts() {
  return fetch('https://fakestoreapi.com/products').then(res => res.json());
}

function fetchUser() {
  return fetch('https://fakestoreapi.com/users').then(res => res.json());
}

export { fetchProducts, fetchUser };
