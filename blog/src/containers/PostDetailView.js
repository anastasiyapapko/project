import React from 'react';
import axios from 'axios';
import { Card } from 'antd';

class PostDetail extends React.Component {

    state = {
        post : {}
    }

    componentDidMount() {
        const postID = this.props.match.params.postID;
        axios.get(`http://127.0.0.1:8000/api/${postID}`)
            .then(res => {
                this.setState({
                    post : res.data
                });
                console.log(res);
            })
    }
    render() {
        return(
            <div className="card-article">
                <Card title={this.state.post.title} >
                    <p>{this.state.post.content}</p>
                </Card>
            </div>
        );
    }
}
 export default PostDetail;