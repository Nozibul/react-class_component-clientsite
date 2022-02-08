import React, { Component, Fragment } from 'react'
import '../../asset/css/custom.css';
import { Nav, Navbar, } from 'react-bootstrap'
import logo from "../../asset/images/logo.jpg"
import scroll from "../../asset/images/logo2.jpg"
import { NavLink } from 'react-router-dom';

export default class Header extends Component {    
 
    constructor(props){
        super();                         
        this.state={                    
            topBanner:"nav-title" ,    
            topBannerLogo: [logo],  
            navVariant: "light",    
            navBackground: "nav-bg" ,
            navMenu: "menu-item",
            pageTitle:props.title
          
        }                              
    }

 // scroll korar sathe sathe menu property ta change korte scrollListener create korte hobe.
   onScroll=()=>{     // scroll korle css class change hobe sejonno onScroll name akta function create korbo
       // amra jhokon scroll kore nicher dike asi thakhon window scroll grater than 100 thake 
       // ar upore gele scroll ta thakhon window scroll less than 100 thake.

       if(window.scrollY>100){   // state er property change korar jonno amra setState use kori
          this.setState({navVariant:"dark", topBanner:"nav-titleScroll", topBannerLogo:[scroll], navBackground:"nav-bgScroll", navMenu:"menu-itemScroll"})
       }
       else if(window.scrollY<100){
           this.setState({topBanner:"nav-title", topBannerLogo:[logo], navBackground:"nav-bg", navMenu:"menu-item"})
       }
   }

   // je onScroll func ba method ta banalam seta run time automatic execute korte hobe  react er life cycle method er
   // vitore akta method ase ter name componentDidMount method, ata use korte hobe , er kaj holo page load hoaer pore 
   // kono ghotona ghotle se ota ke real time change kore dey .
   
   componentDidMount(){
       // onScroll ta k window er sate add korbo
       window.addEventListener("scroll",this.onScroll) // "scroll"ata holo eventListener er type, then kon evenetListener ta call korte chassi seta dia dibo
   }

    render() {
        
        const navLinkStyle=({isActive})=>{
            return {
                color: isActive ? "#daaa57" : "" ,
                borderBottom: isActive ? "2px solid #dfaa4f" : "",
                fontWeight: isActive ? "bold" : "",
               
            };
        }
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
              <Navbar variant={this.state.navVariant} fixed="top" collapseOnSelect expand="lg" className={this.state.navBackground}>
              
                <img className="menu-logo" src={this.state.topBannerLogo} alt="" />   
                <Navbar.Brand className={this.state.topBanner} href="#home">IT Solution</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                 
                    <Nav className="ms-auto me-5">
                        <Nav.Link> <NavLink style={navLinkStyle} className={this.state.navMenu} to="/">Home</NavLink></Nav.Link>
                        <Nav.Link> <NavLink style={navLinkStyle} className={this.state.navMenu} to="/services">Services</NavLink></Nav.Link>
                        <Nav.Link> <NavLink style={navLinkStyle} className={this.state.navMenu} to="/courses">Courses</NavLink></Nav.Link>
                        <Nav.Link> <NavLink style={navLinkStyle} className={this.state.navMenu} to="/portfolio">Portfolio</NavLink> </Nav.Link> 
                        <Nav.Link> <NavLink style={navLinkStyle} className={this.state.navMenu} to="/contact">Contact</NavLink> </Nav.Link> 
                        <Nav.Link> <NavLink style={navLinkStyle} className={this.state.navMenu} to="/about">About</NavLink> </Nav.Link> 
                   
                    </Nav>
                </Navbar.Collapse>
               
                </Navbar>
            </Fragment>
        )
    }
}
