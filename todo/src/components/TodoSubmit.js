import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/Todo'

class TodoSubmit extends React.Component {

    constructor() {
        super();
        //Keep this state local
        this.state = {
            newTodo: ""
        };

        this.textChangeHandler = this.textChangeHandler.bind(this);
    };

    textChangeHandler (event, target) {
        this.setState({[target]: event.target.value});
    }

    render() {
        return (
            <div>
                {/* On submit of new todo, call the addTodo function and pass the newTodo
                    stored in the local state to the global(Redux) state.
                */}
                <form onSubmit={(e) => this.props.addTodo(e, this.state.newTodo)} >
                    New todo:
                    <input type="text" onChange={(e) => this.textChangeHandler(e,"newTodo")} value={this.state.newTodo} />
                    <button type="submit"> Add </button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addTodo })(TodoSubmit);