import React from 'react'
import {Card,Container, Row, Col} from "react-bootstrap"
import {useSelector,useDispatch} from "react-redux"
import {FaMinusCircle,FaPlusCircle,FaTrash} from "react-icons/fa"
import {addTOCart} from "../action/cartAction"
import { deleteFromCart } from '../action/cartAction'
const CartScreen = () => {

    const cartState = useSelector(state=>state.cartReducer)
    const cartItems = cartState.cartItems
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x,item)=> x+item.price,0)
  return (
    <>
    <Container style={{height:'100vh'}}>
        <Row>
            <Col md={6}>
                <h1>My Cart</h1>
                <Row>
                    {
                        cartItems.map((item)=>(
                            <>
                           <Card style={{ width: '20rem', margin:'30px' }}>
                           {/* <Card.Img variant="top" src={item.} style={{height:'20vh'}} /> */}
      <Card.Body>
        <Row>
          <Col md={8}><Card.Title>{item.name}</Card.Title></Col>
          <Col md={1}><FaTrash className='text-danger'
                  style={{cursor:'pointer'}}
                  onClick={()=>{dispatch(deleteFromCart(item))}}/></Col>
        </Row>
        
        
        <Card.Text>
          <Row>
            
            <Col md={9}>
                <h6>Quantity: &nbsp;
                  <FaMinusCircle 
                  className='text-danger'
                  style={{cursor:'pointer'}}
                  onClick={()=>{dispatch(addTOCart(item,item.quantity-1))}}
                  /> {" "}
                  &nbsp;

                {item.quantity} &nbsp;
                <FaPlusCircle className='text-success'
                style={{cursor:'pointer'}}
                onClick={()=>{dispatch(addTOCart(item,item.quantity + 1,item.size))}}
                />
                 </h6>
                <h6>Price: {item.price} X {item.quantity} = Rs.{item.prices}</h6>
            </Col>
            
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
                            </>
                        ))
                    }
                </Row>
            </Col>
            <Col md={4}>
                <h1> Payment Info</h1>
                <h4>Sub Total</h4>
                <h4>Rs. {subTotal} </h4>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default CartScreen
