import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            taskName: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        e.preventDefault();
        this.setState({
            taskName: e.target.value
        });
    }

    submitHandler(e) {
        e.preventDefault();
        if (this.state.taskName == '') {
            return;
        }
        this.props.onAddTask(this.state.taskName);
        this.setState({
            taskName: ''
        })
    }

    render() {
        return (
            <div>
                <h4>Task Form:</h4>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="taskName">Enter a task:</label>
                        <input ref={(input) => { this.nameInput = input; }} type="text"
                            className="form-control" value={this.state.taskName}
                            onChange={this.changeHandler} />
                    </div>
                    <button className="btn btn-danger btn-block" disabled={this.state.taskName == ''}
                        onClick={this.submitHandler}>Submit</button>
                </form>
            </div >
        )
    }

    componentDidUpdate() {
        this.nameInput.focus();
    }


}
export default Form;