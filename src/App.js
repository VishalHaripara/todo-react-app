import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { BrowserRouter as Router,	Route,	Link,	Switch } from 'react-router-dom';
import logo from './logo.png'; 


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:"",
        key:""
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!==""){
      const items=[...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items: filteredItems
      })
  }

  setUpdate(text, key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item =>{
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="MyApp">
              <ul>
                <li className="logo"><img src={logo} alt="Logo" /></li>
                <li><Link to="/" style={{ textDecoration: 'none',color:'#19a0fa' }}>Home</Link></li>
                <li><Link to="/contact" style={{ textDecoration: 'none' ,color:'rgb(252, 123, 3)'}}>Contact Us</Link></li> 
                <li><Link to="/about" style={{ textDecoration: 'none',color:'rgb(252, 123, 3)'}}>About Us</Link></li> 
              </ul>  
          </div>
        </Router>
        <div className="App">
          <header>
              <form id="to-do-form" onSubmit={this.addItem}>
                <input type="text" placeholder="Enter Task"
                value={this.state.currentItem.text}
                onChange={this.handleInput}></input>
                <button type="submit">Add</button>
              </form>
              <p>{this.state.items.text}</p>        
                <ListItems items = {this.state.items}
                deleteItem = {this.deleteItem}
                setUpdate = {this.setUpdate}>
                </ListItems>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;