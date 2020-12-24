import React, { useContext } from 'react'
import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../store/actions'
import { Dispatch } from '../store/context';

const FilterList = () => {
    const dispatch = useContext(Dispatch);
    return (
        <div>
            <button onClick={dispatch( {type: SET_VISIBILITY_FILTER, filter: VisibilityFilters.SHOW_ALL })}>Todas</button>
            <button onClick={dispatch( {type: SET_VISIBILITY_FILTER, filter: VisibilityFilters.SHOW_ACTIVE })}>Pendientes</button>
            <button onClick={dispatch( {type: SET_VISIBILITY_FILTER, filter: VisibilityFilters.SHOW_COMPLETED})}>Terminadas</button>
        </div>
    )
}

export default FilterList
