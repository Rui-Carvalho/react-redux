import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

    renderField(field) {
        const {meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text" {...field.input}
                />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }

    onSubmit(values) {
        //console.log(values);
        this.props.createPost(values, () => {
            this.props.history.push('/'); //==> navigates to the list of posts
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Post Title"
                    name="title"
                    component={ this.renderField }
                />
                <Field
                    label="Post Categories"
                    name="categories"
                    component={ this.renderField }
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={ this.renderField }
                />
                <button type="submit" className="btn btn-primary">Save</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {

    const errors = {};

    if(!values.title) {
        errors.title = "Please give the post a title!";
    }

    if(values.title && values.title.length < 3) {
        errors.title = "Please give the post title more than 3 characters!";
    }

    if(!values.categories) {
        errors.categories = "Please give the post some categories!";
    }

    if(!values.content) {
        errors.content = "Please give the post some content!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm' //This is a unique name given to the form
})(
    connect(null,{ createPost })(PostsNew) //This returns a react component - now a container - passed to reduxForm
);