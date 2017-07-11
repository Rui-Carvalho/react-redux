import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        const post = this.props.posts[this.props.match.params.id];
        return (
            <div>
                {post.title}
            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {
        posts
    };
}

export default connect(mapStateToProps, { fetchPost } )(PostsShow);