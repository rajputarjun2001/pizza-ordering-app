import React, {useEffect} from 'react' 
import {Container, Row, Col} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import PizzaCard from './PizzaCard'
import { getPizza } from '../action/pizzaAction'
import Filters from './Filters'


const PizzaData = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPizza())
    },[dispatch])
    const pizzaState = useSelector(state=>state.pizzaReducer)
    const {loading, pizzas,error} = pizzaState

    
  return (
    <>
    <Container>
        {loading?(<h1>Loading....</h1>)
                : error ? (<h1>Error while fetching</h1>)
                :  ( <Row>
                    <Filters />
                    {pizzas.map(pizza=>(
                        <Col md={4}>
                            <PizzaCard pizza={pizza} />
                        </Col>
                    
                        
                    ))}
                    </Row>)
        
    }
       
</Container>

    </>
  )
}

export default PizzaData
