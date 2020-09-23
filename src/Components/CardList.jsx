import React, { Component } from "react";

import { Grid } from "semantic-ui-react";

import "../Styles/cardlist.css";

import SingleCard from "./SingleCard";

import data from  '../Data/data.json';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

 


  render() {
    
    let pd = data.pricingData[this.props.activeItem-1].package_list;

    return (
      <div>
        <Grid columns={4} className="container">
          <Grid.Row>
            <Grid.Column>
              <SingleCard
                name={1}
                type="gen"
                num={pd[0].qualified_leads_permonth}
                val1={pd[0].price_per_live_transfer}
                val2={pd[0].total_qualified_lead_price}
                val3={pd[0].total_platformprice}
                val4={pd[0].final_package_price}
              />
            </Grid.Column>
            <Grid.Column>
              <SingleCard
                name={1}
                type="gen"
                num={pd[1].qualified_leads_permonth}
                val1={pd[1].price_per_live_transfer}
                val2={pd[1].total_qualified_lead_price}
                val3={pd[1].total_platformprice}
                val4={pd[1].final_package_price}
              />
            </Grid.Column>

            <Grid.Column>
              <SingleCard
                name={1}
                type="gen"
                num={pd[2].qualified_leads_permonth}
                val1={pd[2].price_per_live_transfer}
                val2={pd[2].total_qualified_lead_price}
                val3={pd[2].total_platformprice}
                val4={pd[2].final_package_price}
              />
            </Grid.Column>
            <Grid.Column>
              <SingleCard name={4} type="diff" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default CardList;
