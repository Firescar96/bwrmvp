import React from 'react';
require('../sass/home.scss');

let navbar = (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">BWRMVP</a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="/demo">Demo</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

var Home = React.createClass({
  render () {
    return (
      <div id="home">
        {navbar}
        <div className="pages white center" id="page-welcome">
          <div className="line-divider" id="banner">
            <h1>Blockchain Warehouse Receipts</h1>
          </div>
        </div>

        <div className="pages container" id="page-intro">
          <header id="intro">
            <h3 className="line-divider">What is BWR</h3>
            <p>This page will be updated as more speakers confirm</p>
          </header>
          <article>
          </article>
        </div>

      </div>
    );
  },
});

export default Home;