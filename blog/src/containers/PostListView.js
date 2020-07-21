import React from 'react';
import axios from 'axios';
import Post from '../components/Post';
import './postlistview.css';


class PostList extends React.Component {

    state = {
        posts:[]
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    posts : res.data
                });
                console.log(res);
            });
    }
    render() {
        return(
            <div className="all-posts-content"> 
                <Post data={this.state.posts}/>
            </div>
            
        );
    }
}
 export default PostList;