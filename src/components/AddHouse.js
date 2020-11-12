import React from 'react'
import React,{ useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getHouses,deleteHouse } from '../actions/house'


const AddHouse = () => {
  const blankHouse = {
        "address": "string",
        "owner": "string",
        "price": "string",
        "area": 0
    }
    return (
        <div>
            <form>
                <input />
                <input />
                <input />
                <input />
            </form>
            
        </div>
    )
}

export default AddHouse
