import React from 'react';
import { useHistory, useParams } from 'react-router-dom';


function Detail(props) {

  let { id } = useParams();
  let history = useHistory();
  let 찾은상품 = props.shoes.find(function(상품){  return 상품.id == id  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + [Number(id) + 1] + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ 찾은상품.title }</h4>
          <p>{ 찾은상품.content }</p>
          <p>{ 찾은상품.price }</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{ 
            history.goBack();
          }}>뒤로가기</button>
        </div>
      </div>
    </div> 
  );
}

export default Detail;