import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen overflow-auto">
        <nav className="w-full h-12 bg-alta-primary">
          <h1 className="text-white font-bold font-Alkalami">Rata Alada</h1>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
