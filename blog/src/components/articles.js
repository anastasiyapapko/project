import React from 'react';
import './articles.css';
import CustomLayout from '../containers/Layout';
import {BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from '../routes';

class Article extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                    <div className="white-bar">
                        
                    </div>
                </div>
                <div className="content">
                    <div className="title-name">
                        <h2>Articles:</h2>
                    </div>
                    <div className="post-content">
                        <div className="post-layout">
                            <Router>
                                    <CustomLayout>
                                        <BaseRouter/>
                                    </CustomLayout>
                            </Router>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <h2>More articles are coming...</h2>
                </div>
                
            </div>
        );
    }
}

export default Article;