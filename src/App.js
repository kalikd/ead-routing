import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
// import Button from './Button';
import 'antd/dist/antd.css';
import ApnaComponent from './Apna';
import { Button, List, Avatar } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Header from './Header';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Notfound from './components/Notfound';
import Categories from './components/Categories';
import Books from './components/Books';
import Pens from './components/Pens';
import Product from './components/Product';
import Products from './components/Products';
function ComponentA() {
  return (<><h1>Component A</h1></>)
}

// function ComponentB(props) {
//   return (<><h1>{props.obj.name}- {props.obj.city}</h1><h1>Component B</h1></>)
// }

// class ComponentB extends Component {
//   render() {
//     return (<>
//       {this.props.children}
//       <h1>{this.props.name}</h1>
//       <h1>Component B</h1>
//     </>)
//   }
// }

// ComponentB.propTypes = {
//   name: PropTypes.any.isRequired
// }

// ComponentB.defaultProps = {
//   name: 'Basit'
// }
// function App() {
//   const person = { name: 'KD', city: 'SUK' }
//   return (
//     <div className="App">
//       {/* <ComponentA /> */}
//       <ComponentB name='KD' >
//         <ul>
//           <li>A</li>
//           <li>B</li>
//           <li>C</li>
//         </ul>
//       </ComponentB>
//     </div>
//   );
// }


function Child(props) {
  function handleChange() {
    props.onChange(15)
  }
  return (<>
    <h2>Child!</h2>
    Count in Child: {props.count}
    <button onClick={handleChange}>Change Me</button>
  </>)
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, name: 'KD', list: ['Honda', 'Audi', 'BMW', 'Volvo'] }
    // this.increment = this.increment.bind(this)
    //this.decrement = this.decrement.bind(this)
  }

  increment = (num) => {
    this.setState((state, props) => {
      return { count: state.count + num }
    }, () => {
      console.log('Count: ', this.state.count)
    })


  }

  decrement(str) {
    console.log('My String:', str)
    this.setState((state, props) => {
      return { count: state.count - 1 }
    })
  }
  id = 0
  componentDidMount() {
    console.log('Mounted!')
    //this.id = setInterval(this.increment, 1000);
  }

  componentDidUpdate(props, state) {
    if (!props)
      this.setState({})
    console.log('UPDATED!')
  }

  componentWillUnmount() {
    clearInterval(this.id)
  }

  // render() {
  //   const companiesList = this.state.list.map((itm, ind) => <li key={ind}>{itm}</li>)
  //   return (<>
  //     <Button type="danger" icon={<DownloadOutlined />} size='large'>
  //       Download
  //     </Button>
  //     <ul>
  //       {companiesList}
  //     </ul>
  //     {/* <Button title="Save" style={{ backgroundColor: 'hotpink' }} classs='MyBtn' />
  //     <Button title="Remove" style={{ backgroundColor: 'red' }} classs='MyBtn' /> */}
  //     <button className='btn btn-primary' style={{ color: 'black', backgroundColor: 'orange' }} onClick={this.increment}>+</button>
  //     <h1>Count: {this.state.count}</h1>
  //     {/* <button style={{ color: 'black', backgroundColor: 'orange' }} onClick={this.decrement.bind(this, 'KD')}>-</button> */}
  //     {/* <button onClick={() => this.decrement()}>-</button> */}
  //     {this.props.children}
  //     <Child count={this.state.name} onChange={this.increment} />
  //   </>)
  // }

  render() {
    // return <ApnaComponent />

    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/products' element={<Products />} />

          <Route path='/product/:prodId' element={<Product />} />
          <Route path='/categories' element={<Categories />} >
            <Route index element={<Books />} />
            <Route path='books' element={<Books />} />
            <Route path='pens' element={<Pens />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </>
    )
  }
}

export default App;



