import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Form, Row, Col, Button} from "react-bootstrap"
import { filterPizza } from '../action/pizzaAction'
const Filters = () => {
    const [searchKey, setsearchKey] = useState("")
    const [category, setcategory] = useState("all")
    const dispatch = useDispatch()
  return (
    <div className='p-4 bg-light mt-4'>
      <Form>
        <Row>
            <Col>
            <Form.Control
            value={searchKey}
            onChange={(e)=>setsearchKey(e.target.value)}
            placeholder='Search Pizza'>

            </Form.Control>
            </Col>
            <Col>
            <Form.Select  value={category}
            onChange={(e)=>setcategory(e.target.value)}>
      
      <option >All</option>
      <option >Veg</option>
      <option >Non-Veg</option>
    </Form.Select>
            
            </Col>
            <Col>
            <Button onClick={()=>{dispatch(filterPizza(searchKey, category))}}>Search</Button>
            </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Filters
