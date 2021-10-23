import './App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail'


function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <Switch>

        <Route exact path="/">
          <div className="jumbotron">
            <h1>20% Season OFF</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident maiores doloribus, quos similique perferendis fugit et accusantium,
              <br/>iusto dolor labore suscipit laboriosam ullam unde eum voluptatum debitis, rem voluptate ipsa.
            </p>
            <p>
            <Button variant="primary">Learn more</Button>{' '}
            </p>
          </div>
          <div className="container">
            <div className="row">
            
              {
                shoes.map((el, i)=>{
                  return <Card shoes = { shoes[i] } i = { i } key = { i } />
                })
              }

              {/* <Card shoes = { shoes[0] } />
              <Card shoes = { shoes[1] } />
              <Card shoes = { shoes[2] } /> */}
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes = { shoes } />
        </Route>
        
      </Switch>
    </div>
  );
}




function Card(props) {

  return (
    <div className="col-md-4" key={props.key}>
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%" />
      <h4> { props.shoes.title } </h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )

}



export default App;
