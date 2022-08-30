import React, { useState } from "react";
import "./productShop.scss";
import { useEffect } from "react";
import axios from "axios";
import ProductShop from "./ProductShop";
import ReactPaginate from "react-paginate";

const ProductsShop = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const [pageNumber,setPageNumber] = useState(0)
  const productPerPage = 4
  const pagesVisited = pageNumber * productPerPage;
  const displayProducts = products.slice(pagesVisited, pagesVisited + productPerPage).map((item)=>(
    <ProductShop product={item} key={item.id}/>
  ))

  const pageCount = Math.ceil(products.length/productPerPage)

  const handlePageClick =({selected})=>{
    setPageNumber(selected)
  }

  const filterData = (item) => {
    const result = products.filter((catItem) => {
      return catItem.category === item;
    });
    setProducts(result);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      let response = await axios.get("http://localhost:5000/api/product");
      setProducts(response.data);
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      let response = await axios.get("http://localhost:5000/api/category");
      setCategory(response.data);
    };
    fetchCategory();
  }, []);

  return (
    <>
    <div className="products-shop">
      <div className="product-shop-row">
        <div className="product-shop-col-1">
          <h2>Category List</h2>
          <button className="shop-btn" onClick={() => setProducts(products)}>
            All{" "}
          </button>

          {category.map((item, i) => (
            <button
              className="shop-btn"
              key={i}
              onClick={() => filterData(item.title)}
            >
              {item.title}{" "}
            </button>
          ))}
           <div className="shop-pegination">
     <ReactPaginate
       previousLabel={"<<"}
       nextLabel={">>"}
       onPageChange={handlePageClick}
       pageCount={pageCount}
       containerClassName={"paginationBttns"}
       previousLinkClassName={"previousBttn"}
       nextLinkClassName={"nextBttn"}
       disabledClassName={"paginationDisabled"}
       activeClassName={"paginationActive"}
     />
   </div>
        </div>
        
        <div className="product-shop-col-2">
          <div className="shop-products">
          {displayProducts}
          </div>
        </div>
      </div>
    </div>
    
   </>
  );
};

export default ProductsShop;
