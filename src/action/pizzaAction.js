import axios from 'axios'

export const getPizza = () =>async (dispatch) =>{
    dispatch({
        type:'GET_PIZZAS_REQUEST'
    })
    try {
        const res = await axios.get('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
        console.log(res)
        dispatch({
            type:'GET_PIZZAS_SUCCESS',
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:'GET_PIZZAS_FAIL',
            payload: err
        })
    }
}


export const filterPizza = (searchKey, category)=>async (dispatch)=>{

    let filteredPizza;
    dispatch({
        type:'GET_PIZZAS_REQUEST'
    })
    try {
        const res = await axios.get('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
        filteredPizza = res.data.filter((pizza) =>pizza.name.toLowerCase().includes(searchKey.toLowerCase()))
        if(category=='all'){
            filteredPizza = res.data
        }
        else if(category=='Veg'){
            filteredPizza = res.data.filter(pizza=>pizza.isVeg===true)
        }
        else{
            filteredPizza = res.data.filter(pizza=>pizza.isVeg===false)
        }
        dispatch({type:'GET_PIZZAS_SUCCESS',payload:filteredPizza})
    } catch (error) {
        dispatch({type:'GET_PIZZAS_FAIL', payload:error})
    }
}