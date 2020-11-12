import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getHouse } from '../actions/house'

const SingleHouse = ({
    house,
    match
}) => {
    useEffect(() => {
        getHouse(match.params.houseId)
    },[])

    console.log(house)

    return (
        <div>
            anythings
        </div>
    )
}

const mapStateToProps = (state) => ({
    house: state.housesReducer.house,
  });
  
export default connect(mapStateToProps, { getHouse })(
    withRouter(SingleHouse),
);

