import React,{ useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getHouses,deleteHouse } from '../actions/house'

const HousesList = ({
    getHouses,
    deleteHouse,
    houses,
    history
}) => {
    useEffect(() => {
        getHouses()
    },[])

    const onClick = (id) => {
        deleteHouse(id)
        history.push('/houses-list')
        getHouses()
    }

   return houses ? (
        <div>
            <h1>List of houses</h1>
           {houses.map(house => (
               <div key={house._id}>
                   <NavLink to={`/single-house/${house._id}`} style={{fontSize:"3rem"}}>Address: {house.address}</NavLink>
                   <button onClick={e => onClick(house._id)} className="btn">X</button>
               </div>
           ))}
        </div>
    ) : (
        <p>No houses on the list</p>
    )
}


const mapStateToProps = (state) => ({
    houses: state.housesReducer.houses,
  });
  
export default connect(mapStateToProps, { getHouses,deleteHouse })(
    withRouter(HousesList),
);