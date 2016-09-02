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
      <div id="demo">
        {navbar}

        <div className="pages container" id="page-demo">
          <header id="intro">
            <h2 className="line-divider">Store Units</h2>
          </header>
          <article>
            <h3>Depositor - Store Units</h3>
            <label>
              <span>Warehouse Address</span>
              <input></input>
            </label>
            <label>
              <span>Owner</span>
              <input></input>
            </label>
            <label>
              <span>Number of Units</span>
              <input></input>
            </label>
            <label>
              <span>Time Picked</span>
              <input disabled></input>
            </label>
            <label>
              <span>Variety</span>
              <input disabled></input>
            </label>
            <button>Submit</button>
          </article>
          <article>
            <h3>Warehouse - Generate EWR</h3>
            <label>
              <span>GUID</span>
              <input></input>
            </label>
            <label>
              <span>Owner</span>
              <input></input>
            </label>
            <label>
              <span>Warehouse</span>
              <input></input>
            </label>
            <button>Submit</button>
          </article>
          <article>
            <h3>Warehouse - Sign EWR</h3>
            <label>
              <span>GUID</span>
              <input></input>
            </label>
            <button>Submit</button>
          </article>
          <article>
            <h3>Depositor - Sign EWR</h3>
            <label>
              <span>GUID</span>
              <input></input>
            </label>
            <button>Submit</button>
          </article>
        </div>
      </div>
    );
  },
});

export default Demo;