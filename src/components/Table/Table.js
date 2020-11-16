import React from "react";
import "./Table.css";
import Card from "../Card";
import SearchForm from "../SearchForm";
import API from "../../utils/API";


class Table extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    users: [],
    searchUsers: []
  }


  //component did mount, fire off api call
  componentDidMount() {
    API.getUsers()
    .then(res => {
      this.setState({
        users: res.data.results,
        searchUsers: res.data.results
      });
    });
  }

  handleInputChange  = (event) => {
    const value = event.target.value;
    const userList = this.state.users.filter(name => {
   
      let values = Object.values(name).join("").toLowerCase();
      
      return values.indexOf(value.toLowerCase()) !== -1;
    }); 
    console.log(userList)
    this.setState({ searchUsers: userList });
  }

  
  render() {
    return (
   
      <div className="container">
        <div className="row">
          <SearchForm
          handleInputChange={this.handleInputChange}
    
        /> 
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.searchUsers.map(user => {
                    return (
                      <Card
                        img={user.picture.thumbnail}
                        first={user.name.first}
                        last={user.name.last}
                        phone={user.cell}
                        email={user.email}
                        dob={user.dob.date}
                      />
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    );
  }
}

export default Table;

