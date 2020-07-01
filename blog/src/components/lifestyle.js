import React from 'react';
import './lifestyle.css';

class Lifestyle extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                    <h2>French vibes in Warsaw</h2>
                </div>
                <div className="content">
                    <div className="post1">
                        <div className="img-collage">
                            <img src="/images/parisien.jpg">
                            </img>
                        </div>
                        <div className="post-content">
                            <p className="post-text">
                            Bonjour! Here I want to share with you some of my favorite places in Warsaw which always reminds me my lovely Paris.The first place is The Royal Bath, which is perfect not only for walks, but for reading a book, picnic, visiting a museum, taking some beautiful photos or even jogging!
                            The second place is Charlotte Bistro. I think this is the best place with the best croissants and french baguettes!
                            <a className="museum-link" href="https://www.lazienki-krolewskie.pl/pl" >Here you can check the opening hours, follow some events or buy tickets to the museum</a> 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="header2">
                    <h2>Drinks with a view</h2>
                </div>
                <div className="content2">
                    <div className="post2">
                        <div className="img-collage2">
                            <img src="/images/loreta.jpg">
                            </img>
                        </div>
                        <div className="post-content2">
                            <p className="post-text2">
                             Hey!Want to spend the cozy summer evening with friends and a glass of prosecco? I have an amazing place for you with a great view and good music.It's Loreta Bar in one of the most stylish hotels in Warsaw.
                            <a className="bar-link" href="https://purohotel.pl/pl/warszawa/restauracje/loreta" >Here you can check the opening hours, menu or make a reservation</a> 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="header3">
                    <h2>Summer essentials</h2>
                </div>
                <div className="content3">
                    <div className="post3">
                        <div className="img-collage3">
                            <img src="/images/summer.jpg">
                            </img>
                        </div>
                        <div className="post-content3">
                            <p className="post-text3">
                             Hope you enjoy these summer sunny days and I'm here to recommend you a place with the best vegan bowls in Warsaw, which is called COCO bowls, they are serving vegan and super healthy meals like fruit bowls with granola,chia pudding,different smoothies and sugar-free desserts. You can take it away and eat your healthy breakfast/lunch in the park, hurry up, it's rose blooming season, go and enjoy !
                            <a className="bowls-link" href="https://cocobowls.pl/" >Here you can check the opening hours, menu or order some healthy products like peanut butter or granola</a> 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <h2>More places are coming...</h2>
                </div>   
            </div>
            
        );
    }
}

export default Lifestyle;