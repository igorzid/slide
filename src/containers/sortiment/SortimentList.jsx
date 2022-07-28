import React from 'react';
import { Sortiments } from '../../components';
import './sortimentlist.css';
import sortimentData from './sortimentData';

const SortimentList = () => {

const displayList = sortimentData.map(sortiment => <Sortiments key={sortiment.id} name={sortiment.name} picture={sortiment.picture} />)

  return (
    <div className="slide__sortimentlist" id="sortimentlist">
        {displayList}
    </div>
  )
}

export default SortimentList