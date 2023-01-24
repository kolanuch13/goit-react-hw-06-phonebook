import React from "react";
import PropTypes from 'prop-types';
// ====================================
import { useSelector, useDispatch } from "react-redux";
import { namedFilter } from "redux/constants";
import { getFilteredContacts } from "redux/selectors";
import { setFilteredContacts } from "redux/filterSlice";
import css from './Filter.module.css';


const Filter = ({ value, onChange }) => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilteredContacts);

    const handleChange = filter => dispatch(setFilteredContacts(filter))
    
    return (
      <div className={css.filterWrapper}>
        <span>Search by Name</span>
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={css.filterInput}
        />
      </div>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;
