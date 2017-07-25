import React, { Component } from 'react';
//import LoginForm from '../Header/LoginForm';
//import SignUpFormm from  '../Header/SignUpForm';
import PerfomanceImage from "../../static/images/HomePage/startup.svg";
import Adaptive from "../../static/images/HomePage/adaptive.svg";
import Modern from "../../static/images/HomePage/css-3.svg";
import './HomePage.scss';
import {} from 'react-foundation';
import Slider from '../Slider/Slider';
import DescriptionCards from '../Cards/HomePageCards/DescriptionCards';

class HomePage extends Component {
    render() {
        return (
            <main className="homepage">
                <div className="row title">
                    <span>Этот сайт создан для антропометрии. Здесь вы можете отселживать изменения своего тела с течением времени!</span>
                </div>
                <hr/>
                <div className="row relation">
                    <div className="relation__ratio"></div>
                    <div className="relation__content">
                        <Slider/>
                    </div>
                </div>
                <div className="row">

                </div>
                <hr/>
                <div className="row description-blocks">
                    <DescriptionCards Description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                                      Title={"Height performance"}>
                        <PerfomanceImage/>
                    </DescriptionCards>

                    <DescriptionCards Description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                                      Title={"Was created using modern technologies"}>
                        <Modern/>
                    </DescriptionCards>

                    <DescriptionCards Description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                                      Title={"Adaptive design"}>
                        <Adaptive/>
                    </DescriptionCards>

                </div>
            </main>
        );
    }
}

export default HomePage;
