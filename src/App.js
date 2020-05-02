import React, {Component} from 'react';
import './App.css';
import  CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box-component';
import RefreshButton from './components/refresh-button/refresh-button-component'


class App extends Component{
  constructor(){
    super();
    this.state = {
      avatar: [],
      searchField:'',
      refresh: true
    };
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({avatar: users}));
  };

  handleChange = (e) =>{
    this.setState({searchField: e.target.value})
  };

  refreshPage = (e) => {
    this.setState({refresh: true})
  }

  render() {
    const {avatar,searchField} = this.state;
    const filteredAvatars = avatar.filter(avatar =>
      avatar.name.toLowerCase().includes (searchField.toLowerCase())
      )
    return(
      <div className = 'App '> {/*Here className is the CSS class to use*/}
        <h1>Random Avatar <RefreshButton action={this.refreshPage} faIcon="fa fa-refresh fa-lg"></RefreshButton></h1>
        <SearchBox placeholder="Search Avatar" handleChange={this.handleChange}></SearchBox>
        <CardList data={filteredAvatars}> {/*Here we are passing the attribute data as a prop(attribute of html like width="50px"). We are sending the object avatar which is set in this.state*/}
        </CardList>
      </div>
    )
  }
} ;
export default App;
