import React from 'react';
require('../sass/demo.scss');

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

var Demo = React.createClass({
  render () {
    return (
      <div>
        {navbar}
        <div className="pages white center" id="page-welcome">
          <div className="line-divider" id="banner">
            <h1>Demo Usage</h1>
          </div>
        </div>

        <div className="pages container" id="page-intro">
          <header id="intro">
            <h3 className="line-divider">What is BWR</h3>
            <p>Tststep in the flow</p>
          </header>
          <article>
          </article>
        </div>

      </div>
    );
  },
});

export default Demo;