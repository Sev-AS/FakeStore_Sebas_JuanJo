import { productsURL } from "./url.js";
import { getProducts } from "./api.js";



console.log(productsURL());
async function init() {
  try {
    const products = await getProducts();
    console.log('Productos:', products);
    // renderProducts(products)...
  } catch (err) {
    console.error('Error en init:', err);
    // renderStatus('No se pudo cargar productos', 'error')
  }
}

init();
