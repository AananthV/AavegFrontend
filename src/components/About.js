import React, { Component } from 'react';
var style = {width:"100px !important"}

const html = (
    <div id="main">
        <section id="text" class="main">
        <div class="spotlight">
            <div class="content">
            <header class="major">
                <h2>About Aaveg</h2>
            </header>
            <p>An impulse, that’s what Aaveg stands for, and it aims to caters only to the first years-it’s organised by the
                first years and participation is limited to only the first years. An inter-hostel competition, there’s passion
                and an undying determination to make your hostel win, that’s the spirit of Aaveg.
                There are four major cups, the Culturals Cup, involving all the events that test your expertise in areas
                ranging from art to dance; the Spectrum Cup, comprises a plethora of events from JAM and Minute to Win It to
                gaming events; the Sports Cup for all the budding athletes and the talented sportsmen while the Cheering Cup
                quantifies the camaraderie of the hostel.
                It’s time to channel your fury and ensure that your hostel wins the most points and returns with the coveted
                trophy and glory.</p>
            </div>
        </div>
        </section>
        <div id="myCarousel" class="carousel slide" data-ride="carousel" style={style}>
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="6"></li>
                <li data-target="#myCarousel" data-slide-to="7"></li>
                <li data-target="#myCarousel" data-slide-to="8"></li>
                <li data-target="#myCarousel" data-slide-to="9"></li>
            </ol>

            <div class="carousel-inner">
                <div class="item active">
                <img src="images/about/page1.jpg" alt=""/>
                </div>

                <div class="item">
                <img src="images/about/page2.jpg" alt=""/>
                </div>

                <div class="item">
                <img src="images/about/page3.jpg" alt=""/>
                </div>
                <div class="item">
                <img src="images/about/page4.jpg" alt=""/>
                </div>
                <div class="item">
                <img src="images/about/page5.jpg" alt=""/>
                </div>
                <div class="item">
                <img src="images/about/page6.jpg" alt=""/>
                </div>
                <div class="item">
                <img src="images/about/page7.jpg" alt=""/>
                </div>
                <div class="item">
                <img src="images/about/page8.jpg" alt=""/>
                </div>
                <div class="item">
                <img src="images/about/page9.jpg" alt=""/>
                </div>
                <div class="item">
                <img src="images/about/page10.jpg" alt=""/>
                </div>
            </div>

            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <br/><br/>
    </div>
);

class About extends Component {
	render() {
		return (
            html
    	);
	}
}

export default About;