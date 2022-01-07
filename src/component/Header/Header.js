import React, { Component, Fragment } from 'react'
import '../../asset/css/custom.css';
import { Nav, Navbar, } from 'react-bootstrap'
import logo from "../../asset/images/logo.jpg"
import scroll from "../../asset/images/logo2.jpg"

export default class Header extends Component {    
 
    constructor(){     //scroll korar age and pore alada kisu dekhbo sejonno amra constructor create korbo.state change er madhome amra css class k change korbo
        super();                         // then parent class er super constructor ka call korte hobe avebe.
        this.state={                    //then akta state create korlam
            topBanner:"nav-title" ,     // navbarer er title er akta name dilam then value hisebe css class name ta dilam cotetion e.
            topBannerLogo: [logo],      // state er moddhe object rakte 3rd braket er moddhe object ta likhte hobe.
            navBackground: "nav-bg" ,
            navMenu: "menu-item"
        }                               // topBanner k neche jekhae amra kaj korbo sekhane dilam.
    }

 // scroll korar sathe sathe menu property ta change korte scrollListener create korte hobe.
   onScroll=()=>{     // scroll korle css class change hobe sejonno onScroll name akta function create korbo
       // amra jhokon scroll kore nicher dike asi thakhon window scroll grater than 100 thake 
       // ar upore gele scroll ta thakhon window scroll less than 100 thake.

       if(window.scrollY>100){   // state er property change korar jonno amra setState use kori
          this.setState({ topBanner:"nav-titleScroll", topBannerLogo:[scroll], navBackground:"nav-bgScroll", navMenu:"menu-itemScroll"})
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
        return (
            <Fragment>
              <Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.navBackground}>
              
                 <img className="menu-logo" src={this.state.topBannerLogo} alt="" />   
                <Navbar.Brand className={this.state.topBanner} href="#home">IT Solution</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                 
                    <Nav className="ms-auto me-5">
                        <Nav.Link className={this.state.navMenu} href="#">Home</Nav.Link>
                        <Nav.Link className={this.state.navMenu} href="#">Services</Nav.Link>
                        <Nav.Link className={this.state.navMenu} href="#">Courses</Nav.Link>
                        <Nav.Link className={this.state.navMenu} href="#">Portfolio</Nav.Link>
                        <Nav.Link className={this.state.navMenu} href="#">About</Nav.Link>
                        <Nav.Link className={this.state.navMenu} href="#">Contact</Nav.Link>
                   
                    </Nav>
                </Navbar.Collapse>
               
                </Navbar>
            </Fragment>
        )
    }
}
