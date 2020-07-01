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
                <div classNme="footer">
                </div>   
            </div>
            
        );
    }
}

export default Lifestyle;