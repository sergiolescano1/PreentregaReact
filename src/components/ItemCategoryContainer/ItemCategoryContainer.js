/*
import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory, getProductsByCategory1 } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemCategoryContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory1 : getProducts;
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <div>
        <ItemList products={products} />
      </div>
      <p>FIN de Productos</p>
    </div>
  );
};

export default ItemCategoryContainer;

*/