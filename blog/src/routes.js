import React from 'react';
import {Route} from 'react-router-dom';

import PostList from './containers/PostListView';
import PostDetail from './containers/PostDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/articles' component={PostList}></Route>
        <Route exact path='/articles/:postID' component={PostDetail}></Route>
    </div>
);

export default BaseRouter;