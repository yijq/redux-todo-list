import React from 'react';

const AddItem = ({addItem,onEdit,textValue}) => (
    <div>
        <input type="text" onChange={onEdit} value={textValue}/>
        <button onClick={addItem}>add item</button>
    </div>
)

export default AddItem;