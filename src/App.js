import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages/index";
import React, { useEffect } from "react";
import axios from "axios";
import store from './redux/store'
import {connect} from 'react-redux'
import {setPizzas} from './redux/actions/pizzas'

class App extends React.Component{

  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({data}) =>{
      this.props.setPizzas(data.pizzas)
    })
  }
  render(){
    return (
      <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home pizass={this.props.items} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state =>{
  console.log(state)
  return {
    items: state.pizzas.items
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
