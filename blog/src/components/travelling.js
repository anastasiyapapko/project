import React from 'react';
import './travelling.css';

class Travelling extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                    <h2>Travel diary from Paris</h2>
                </div>
                <div className="content">
                    <div className="article-content1">
                        <p>
                            Let's just take a moment to enjoy this amazing view!
                            It became one of my favorite view spots, because you can watch the sunset, see almost all popular attractions of Paris and it's all for free! So,if you want a really sensational view over Paris rooftops, go to the rooftop café called Deli-Cieux.
                        </p>
                    </div>
                    <div className="video-content1">
                        <video poster="../videos/view.mp4" autoplay="autoplay" controls="controls">
                            <source src="../videos/view.mp4" type="video/mp4"  />
                        </video>
                    </div>
                    <div className="article-content2">
                        <p>
                          Is it tea o'clock? So, I know the perfect place with the best jasmine tea, raspberry macarons and almond croissants. It's Laduree, which you can find all over the Paris and enjoy not only the food but the atmosphere inside with the great interior!
                        </p>
                    </div>
                    <div className="img-content2">
                        <img src="../images/laduree.jpg"></img>
                    </div>
                    <div className="article-content3">
                        <p>
                         And last but not least! Places, which are must-have, if you are going to Paris : Musée du Louvre, Arc de Triomphe and of course The Eiffel Tower! 
                        </p>
                    </div>
                    <div className="img-content3">
                        <img src="../images/views.jpg"></img>
                    </div>
                </div>
                <div className="footer">
                    <h2>More adventures are coming...</h2>
                </div>
            </div>
        );
    }
}

export default Travelling;