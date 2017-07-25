import React from 'react';
import PropTypes from 'prop-types';

class DescriptionCards extends React.Component{

    render(){
        return(
            <div className="column small-12 medium-6 large-4">
                <div>
                    {this.props.children}
                </div>
                <div className="row title-description">
                    <span>{this.props.Title}</span>
                </div>
                <div className="row description">
                    <span>{this.props.Description}</span>
                </div>
            </div>

        );
    }
}

DescriptionCards.propTypes = {
    Title: PropTypes.string,
    Description: PropTypes.string,
};

export default DescriptionCards;