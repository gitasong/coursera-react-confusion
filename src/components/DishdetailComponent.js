import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  render() {
    const { dish } = this.props;

    if (dish != null) {
      return(
        <div className="row">
          <div className="dishDetail col-12 col-md-5 m-1">
            <Card dish={dish}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="comments col-12 col-md-5 m-1">
            {/* comments go here */}
          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default DishDetail;
