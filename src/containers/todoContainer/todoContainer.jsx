import React from 'react';
import AddItem from '../../components/AddItem/AddItem';
import { TodoItem } from '../../components/TodoItem'
import * as action from '../../action/action';
import { connect } from 'react-redux';

class TodoContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            textValue: ''
        }
        this.onEdit = this.onEdit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }

    onEdit(e) {
        this.setState({
            textValue: e.target.value
        })
    }

    addItem() {
        if(this.state.textValue.trim() === '') {
            alert('输入不能为空')
            return;
        }
        this.props.addItem(this.state.textValue);
        this.setState({
            textValue: ''
        })
    }

    toggleCompleted(id) {
        this.props.toggleCompleted(id);
    }

    deleteItem(id) {
        this.props.removeItem(id)
    }

    onFilter(filter) {
        this.props.onFilter(filter)
    }

    render() {
        return (
            <div style={{margin: "50px"}}>
                <AddItem textValue={this.state.textValue} onEdit={this.onEdit} addItem={this.addItem} />
                <div>
                    {this.props.visibleList.map((v,i)=>{
                        return <TodoItem item={v} onToggle={()=>{this.toggleCompleted(v.id)}} onDelete={()=>{this.deleteItem(v.id)}} key={i}/>
                    })}
                </div>
                <div>
                    <button onClick={()=>{this.onFilter('GET_ALL')}}>all</button>
                    <button onClick={()=>{this.onFilter('GET_COMPLETED')}}>completed</button>
                    <button onClick={()=>{this.onFilter('GET_UNCOMPLETED')}}>uncompleted</button>
                </div>
            </div>
        )
    }
}
const visibleFilter = (state,filter) => {
    switch (filter) {
        case "GET_ALL":{
            return state
        }
        case "GET_COMPLETED":{
            return state.filter((v)=>(v.completed !== false))
        }
        case "GET_UNCOMPLETED":{
            return state.filter((v)=>(v.completed === false))
        }
        default: {
            return state
        }
    }
}

const mapStateToProps = (state)=>({
    visibleList: visibleFilter(state.dataListReducer,state.visibleListReducer)
});
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (text)=>{
            dispatch(action.addItem(text))
        },
        toggleCompleted: (id)=>{
            dispatch(action.completed(id))
        },
        removeItem: (id)=> {
            dispatch(action.removeItem(id))
        },
        onFilter: (filter)=> {
            dispatch(action.visibleFilter(filter))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoContainer);

