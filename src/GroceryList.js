import { Component } from "react";
import icon from './icon.jpg';

 export class GroceryList extends Component{
    state = {
        userInput:"",
        groceryList: []
}
onChangeEvent(e){
    this.setState({userInput: e})
}
addItem(input) {
    if (input === ''){
        alert("Please enter the item")
    } else {

    let listArray = this.state.groceryList;
    listArray.push(input)
    this.setState({groceryList: listArray,userInput: ""})
   
}
}
deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})

}

crossedWord(event){
    const apple = event.target;
    apple.classList.toggle("crossed");
}
onFormSubmit(e){
    e.preventDefault();
}
    render(){
        return(
           
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
            <input type="text" 
            placeholder="What do you need?"
            onChange={(e) =>{this.onChangeEvent(e.target.value)}}
            value={this.state.userInput} />
           </div>
           <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className= "add">ADD</button>
           </div>
           <ul>
            {this.state.groceryList.map((item, index) => (<li onClick={this.crossedWord} key={index}>
                <img src={icon} width="30px" alt="icon"/>
                 {item}
                 </li>
                ))}
            
           </ul>
           <div className="container">
           <button onClick={() => this.deleteItem()} className= "delete">Delete</button>
           </div>
           </form>
          
        )

    }
    
 }