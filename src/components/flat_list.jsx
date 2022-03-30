
import React from "react";
import Flat from "./flat";

const FlatList = ({flats, selectedFlat, selectedFlatId}) => {
  const renderList = () => {
    return flats.map(flat => {
      return (<Flat
      selectedFlatId={selectedFlatId}
      selectedFlat = {selectedFlat}
      flat={flat}
      key={flat.id}
      />)
    })
  }

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  )
}

export default FlatList;
