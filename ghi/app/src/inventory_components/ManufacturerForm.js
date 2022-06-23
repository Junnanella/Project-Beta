import React from "react";

export default class ManufacturerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    // bind
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit
  async handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
    };

    const url = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      this.setState({
        name: "",
      });
    }
  }

  // handle changes on form
  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Manufacturer</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeName}
                  value={this.state.name}
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
                <label htmlFor="name">Manufacturer Name</label>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
