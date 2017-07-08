import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text" {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <form>
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
    form: 'PostsNewForm'
})(PostsNew);