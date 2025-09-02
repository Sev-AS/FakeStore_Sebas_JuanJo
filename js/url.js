export const BASE_URL = 'https://fakestoreapi.com';

export const productsURL = () => `${BASE_URL}/products`;
export const productsCategoriesURL = () => `${BASE_URL}/products/categories`;
export const categoryURL = () => `${BASE_URL}/products/categories/${encodeURIComponent(cat)}`;