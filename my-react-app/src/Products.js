
import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
 

// DEN HÄR SIDAN HAR JAG FLYTTAT TILL PROFILSIDAN
function Products() {
  const [productList, setProductList] = useState([]);
 
  useEffect(() => {
    axios.get('https://reqres.in/api/products').then(res => {
      setProductList(res.data.data);
    });
  }, []);
 
  return (

    <div className="container-fluid p-3">
      <table class="table table-sm mt-3">
        <thead class="thead-dark">
          <th>Name</th>
          <th>id</th>
          <th>Color</th>
        </thead>
        <tbody>
          {productList.map(x => <tr>
            <td>{x.name}</td>
            <td>{x.id}</td>
            <td style={{backgroundColor: x.color}} className='box'> </td>
            <td>{x.color}</td>
          </tr>)}
          {productList.length == 0 && <tr>
            <td className="text-center" colSpan="4">
              <b>No data found to display.</b>
            </td>
          </tr>}
        </tbody>
      </table>
      
 
    </div>
  );
}
 
export default Products;