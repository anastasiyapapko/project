import React from 'react';
import {Carousel} from 'react-bootstrap';
import './mainpage.css';


class MainPage extends React.Component{
    render(){
        return(
           <div className="content" >
                <div className="images">
                    <Carousel className="carousel">
                        <Carousel.Item className="carousel-item">
                            <img
                            className="slide-img1"
                            src="/images/slide3.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Inspiration</h3>
                            <p>Beauty and inspiration are everywhere, juat look around</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                            className="slide-img2"
                            src="/images/slide2.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Lifestyle</h3>
                            <p>Share some beautiful moments from everyday life</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                            className="slide-img3"
                            src="/images/slide1.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Travelling</h3>
                            <p>Let's explore some new cool places</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                        
                </div>
                <div className="pinterest">
                    <div className="pinterest-header">
                        <h2>More inspiration!</h2>
                        <p>
                            You can find more beautiful pictures on my &nbsp; <a href="https://www.pinterest.com/anastasiyapapko/boards/">Pinterest</a> 
                        </p>
                    </div>
                    <div className="pinterest-board">
                            <a data-pin-do="embedPin" href="https://www.pinterest.com/pin/786511522412862677/"></a>
                            <a data-pin-do="embedPin" href="https://www.pinterest.com/pin/368521182007773810/"></a>
                            <a data-pin-do="embedPin" href="https://www.pinterest.com/pin/280349145537345805/"></a>
                            <a data-pin-do="embedPin" href="https://www.pinterest.com/pin/786511522414809254/"></a>
                            <a data-pin-do="embedPin" href="https://www.pinterest.com/pin/786511522414809363/"></a>
                    </div>
                </div>
                <div className="post-content-area">
                    <h2 className="article-name">
                        My favorite breakfasts
                    </h2>
                    <div className="entry-content">
                        <iframe src="https://www.instagram.com/p/B-whQBoh-8h/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                        <iframe src="https://www.instagram.com/p/B-SPk7mBMx2/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                        <iframe src="https://www.instagram.com/p/B-E0ClHhjFp/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

                    </div>
                    <h2 className="article-name">
                        Summer is for picnics
                    </h2>
                    <div className="entry-content">
                        <iframe src="https://www.instagram.com/p/CBzqjGtJ39X/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                        <iframe src="https://www.instagram.com/p/CBfrUSeBmtA/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                        <iframe src="https://www.instagram.com/p/CBdRxCEnCfO/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

                    </div>
                    <h2 className="article-name">
                        Sunny days in Warsaw
                    </h2>
                    <div className="entry-content">
                        <iframe src="https://www.instagram.com/p/CA-K1G8JTYk/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                        <iframe src="https://www.instagram.com/p/CBC7u0dJbBX/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                        <iframe src="https://www.instagram.com/p/CAuuhuxg5Qr/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

                    </div>
                </div>

           </div>
           
        );
    }
}

export default MainPage;