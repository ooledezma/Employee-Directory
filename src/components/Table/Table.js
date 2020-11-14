import React from "react";
import "./Table.css";
import Card from "../Card";
import API from "../../utils/API";


class Table extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    users: [],
  }


  //component did mount, fire off api call
  componentDidMount() {
    API.getUsers()
    .then(res => {
      console.log(res.data.results)
      this.setState({
        users: res.data.results,
      });
    });
  }

  render() {
    return (
      <div className="container">
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
                  this.state.users.map(user => {
                    console.log(user)

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

