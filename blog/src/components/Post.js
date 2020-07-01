import React from 'react';
import { List } from 'antd';
import './post.css';

const Post = (props) => {
    return(
  <List className="post"
    itemLayout="vertical"
    size="large"
    dataSource={props.data}
    renderItem={item => (
      <List.Item className="post-item"
        key={item.title}
      >
      
        <List.Item.Meta
          title={<a href={`/articles/${item.id}`}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
 
    );
}

export default Post;