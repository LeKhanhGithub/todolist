import React from 'react';
import PropTypes from 'prop-types';

Todolist.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
    
};

Todolist.defaultProps = {
    todos: [],
    onTodoClick: null,
}



function Todolist(props) {

    const { todos, onTodoClick } = props;
    

    const handleOnclick = (todo) => {
        if(onTodoClick) 
        onTodoClick(todo);
    }
    
    return (
        <div>
            <ul>
                { todos.map((todo) => {
                    return(
                        <li key={todo.id} onClick = {() => handleOnclick(todo)}>{todo.title}</li>
                    )
                })}
            </ul>
            
        </div>
    );
}

export default Todolist;