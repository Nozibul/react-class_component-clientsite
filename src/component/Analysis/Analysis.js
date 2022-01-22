import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart, ResponsiveContainer,Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default class Analysis extends Component {
  // barchart er data gulo k nite state create korte hobe ter jonno constructor create korte hobe and ter vitore super() method k call korte hobe.

  constructor() {
    super(); // parent class theke super method k call korlam

    this.state = {
      // then state create korbo then er bitore data gulo object hisebe rakbo.
      // now ai state er vitore json create kore akhane projonio data gulo rakhbo.
      data: [
        { Technology: "React", Projects: "99" },
        { Technology: "Next JS", Projects: "80" },
        { Technology: "Python", Projects: "70" },
        { Technology: "Java", Projects: "50" },
        { Technology: "MySQl", Projects: "75" },
        { Technology: "Redux", Projects: "95" },
        { Technology: "Bootstrap", Projects: "60" },
      ],
    };
  }
  
  render() {
    var skyColor ="#8884d8";

    return (
      <Fragment>
        <div className=" bg-analysis">
          <Container className="text-center">
            <h2 className="pt-5">Used <small>Technology</small></h2>
            <Row>
              <Col style={{height:"350px"}} lg={6} md={12} sm={12}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={100}
                    height={350}
                    data={this.state.data}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                     <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Technology" />
                    <YAxis /> 
                    <Tooltip />
                   
                    <Bar
                      dataKey="Projects"
                    //   fill="#8884d8" or 
                      fill={skyColor}
                      label={{ position: "top" }}
                    >
                      {/* {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                      ))} */}
                    </Bar> 
                  </BarChart>
                </ResponsiveContainer>
              </Col>

              <Col lg={6} md={12} sm={12}>
                <p className="analysis-content">
                  Tezos is designed to provide the safety and code correctness
                  required for assets and other high value use cases at both the
                  protocol and application layers by leveraging languages OCaml
                  and Michelson, which facilitate formal verification, a
                  practice commonly used in mission-critical industries,
                  spanning from  which facilitate formal verification, a
                  practice commonly used in mission-critical industries,
                  spanning from  nuclear and aerospace to semiconductor and
                  others.Unlike Proof-of-Work blockchains like Bitcoin or
                  Ethereum. Proof-of-Stake requires significantly less energy
                  and cost to operate, making it an ideal alternative platform
                  for building blockchain applications that are eco-friendly.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
