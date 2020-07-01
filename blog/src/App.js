import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import Main from './components/main';
import { Link,NavLink} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div>
        <div className="main">
          <div >
            <Navbar className="nav-bar">
              <Navbar.Brand className="nav-bar-brand" as={Link} to='/'><img src="../images/designlab.png"></img></Navbar.Brand>
              <Nav className="nav-elements">
                <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/articles">Articles</Nav.Link>
                <Nav.Link as={NavLink} to="/lifestyle">Lifestyle
                </Nav.Link>
                <Nav.Link as={NavLink} to="/travelling">Travelling</Nav.Link>
              </Nav>
              <div className="social-media-links" >
                      <a href="https://www.facebook.com/profile.php?id=100008173802094" className="fa fa-facebook"></a>
                      <a href="http://www.instagram.com/anasta.sia.p" className="fa fa-instagram"></a>
                  
              </div>
            </Navbar>
          </div>
        </div>
        <div className="main-page">
          <Main/>
          <div className="about">
                    <div className="title-about">
                        <span>About</span>
                    </div>
                    <div className="desc-about">
                        <span>Hello, I'm Anastasia, I'm from Belarus, but live in Poland. I like taking photos, finding inspiration, travelling and want to share it with you!</span>
                    </div>
                </div>
        </div>
      </div>
      
    );
  }
}

 
export default App;
