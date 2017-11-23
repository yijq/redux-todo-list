import React from 'react';

export const TodoItem = ({item,onToggle,onDelete}) => (
    <div>   
        <span style={item.completed ? {textDecoration: 'line-through',color: '#666'} : {}} onClick={onToggle}>
            {item.text}
        </span>
        <button onClick={onDelete}>删除</button>
    </div>
)