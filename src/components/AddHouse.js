import React,{ useState } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createHouse } from '../actions/house'


const AddHouse = ({
    createHouse,
    history
}) => {
    const [address, setAdress] = useState("");
    const [owner, setOwner] = useState("");
    const [price, setPrice] = useState("");
    const [area, setArea] = useState("");

    const onSubmit = (e) => {
        
        e.preventDefault();
        createHouse({
            address,
            owner,
            price,
            area
        })
        history.push('/houses-list')
      };

      const onChange = (e,setValue) => {
        setValue(e.target.value)
        
      }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={address} name="address" onChange={e => onChange(e,setAdress)} required/>
                <input value={owner} name="owner" onChange={e => onChange(e,setOwner)} required/>
                <input value={price} name="price" onChange={e => onChange(e, setPrice)} required/>
                <input value={area} name="area" type="number" onChange={e => onChange(e, setArea)} required/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
  });

export default connect(mapStateToProps, { createHouse })(
    withRouter(AddHouse),
);
