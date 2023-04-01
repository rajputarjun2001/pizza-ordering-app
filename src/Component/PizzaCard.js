import React,{useState} from 'react' 
import {Card, Button,Row, Col} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import {addTOCart} from "../action/cartAction"
const PizzaCard = ({pizza}) => {

  const [size, setSize] = useState()
  const [quantity, setQuantity] = useState(1)
  const dispatch =useDispatch()
  const addTOCartHandler = () =>{
    dispatch(addTOCart(pizza, quantity, size))
  }
  return (
    <div style={{paddingLeft:'3.5vw'}}>
     <Card style={{ width: '18rem', marginTop:"30px" }}>
      <Card.Img variant="top" src={pizza.img_url} style={{height:'20vh'}} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Variant</h6>
                <select value={size} onChange={e=>setSize(e.target.value)} >
                    {pizza.size[0].items.map((item)=>{
                        return <option>{item.size}</option>
                    })}

                </select>
            </Col>
            <Col md={6}>
                <h6>Quantity</h6>
                <select value={quantity} onChange={e=>setQuantity(e.target.value)} >
                    {[...Array(10).keys()].map((value,index)=>(
                      <option>{index+1}</option>
                    ))}

                </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
          <Col md={6}>Price : Rs{pizza.price * quantity} </Col>
          <Col md={6}>
            <Button onClick={addTOCartHandler}>Add to Cart</Button>
          </Col>
        </Row>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default PizzaCard
