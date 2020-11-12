import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getHouse } from '../actions/house'

const SingleHouse = ({
    getHouse,
    house,
    match
}) => {
    useEffect(() => {
        getHouse(match.params.houseId)
    },[])

    return house ? (
        <div style={{fontSize:"3rem"}}>
           <p>Address: {house.address}</p>
           <p>Owner: {house.owner}</p>
           <p>Price: {house.price}</p>
           <p>Area: {house.area}</p>
        </div>
    ) : (
        ""
    )
}

const mapStateToProps = (state) => ({
    house: state.housesReducer.house,
  });
  
export default connect(mapStateToProps, { getHouse })(
    withRouter(SingleHouse),
);

