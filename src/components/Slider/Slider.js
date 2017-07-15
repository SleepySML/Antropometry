import React from 'react';
import './slider.scss';
import img1 from '../../static/images/sliderImages/slide1.png';
import img2 from '../../static/images/sliderImages/slide2.png';
import img3 from '../../static/images/sliderImages/slide3.png';

const style = {
    transition: 'all .2s ease-out'
};

class Slider extends React.Component{
    constructor() {
        super();
        this.state = {
            marginLeft: 0
        };
        this.onNextSlide = this.onNextSlide.bind(this);
        this.onPrevSlide = this.onPrevSlide.bind(this);
    }

    timer() {

        if (this.state.marginLeft <= -200){
            this.setState({marginLeft: 0});
        }
        else {
            this.setState({marginLeft: this.state.marginLeft - 100});
            console.log(this.state.marginLeft);
        }
    }

    componentWillUnmount(){
        clearTimeout(this.timerId);
    }

    componentDidMount() {
        this.timerId = setInterval(this.timer.bind(this), 5000);
    }

    onNextSlide(){

        if (this.state.marginLeft <= -200){
            this.setState({marginLeft: 0});
        }
        else {
            this.setState({marginLeft: this.state.marginLeft - 100});
        }


    }

    onPrevSlide(){

        if (this.state.marginLeft >= 0 ){
            this.setState({marginLeft: -200});
        }
        else {
            this.setState({marginLeft: this.state.marginLeft + 100});
        }

    }

    render(){

        /*this.timerId = setInterval(()=>{
            if (this.state.marginLeft <= -200){
                this.setState({marginLeft: 0});
                console.log(this.state.marginLeft);
            }
            else {
                this.setState({marginLeft: this.state.marginLeft - 100});
                console.log(this.state.marginLeft);
            }
        },5000);*/

        return(
            <div className="slider-wrapper">
                <ul className="Slider-list" style={{...style, marginLeft: this.state.marginLeft+"%"}}>
                    <li className="slide"><img src={img1} alt="image1"/></li>
                    <li className="slide"><img src={img2} alt="image2"/></li>
                    <li className="slide"><img src={img3} alt="image3"/></li>
                </ul>
                <div className="orbit-controls">
                    <button className="orbit-next" onClick={this.onNextSlide}><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
                    <button className="orbit-previous" onClick={this.onPrevSlide}><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                </div>
        </div>
        );
    }
}

export default Slider;