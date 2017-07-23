import React, { Component } from 'react';
//import LoginForm from '../Header/LoginForm';
//import SignUpFormm from  '../Header/SignUpForm';
import PerfomanceImage from "../../static/images/HomePage/startup.svg";
//import Adaptive from "../../static/images/HomePage/adaptive.svg";
//import Modern from "../../static/images/HomePage/css-3.svg";
import './HomePage.scss';
import {} from 'react-foundation';
import Slider from '../Slider/Slider';

class HomePage extends Component {
    render() {
        return (
            <main className="homepage">
                <div className="row">
                    <Slider/>
                </div>

                <hr/>
                <div className="row title">
                    <span>Этот сайт создан для антропометрии. Здесь вы можете отселживать изменения своего тела с течением времени!</span>
                </div>

                <hr/>
                <div className="row description-blocks">
                    <div className="column large-4">
                        <div>
                            <img /*src={PerfomanceImage}*/ alt="image1"/>
                        </div>
                        <span>Высокая производительность.
                            блаблаблаблаблаблабла
                            блаблабла блаблабла блаблабла</span>
                    </div>
                    <div className="column large-4">
                        <div>
                            <img /*src={Modern}*/ alt="image1"/>
                        </div>
                        <span>Создан на современных технологиях.
                            блаблабла блаблабла
                            блаблабла блаблабла
                            блаблабла блаблабла</span>
                    </div>
                    <div className="column large-4 ">
                        <div>
                            <img /*src={Adaptive}*/ alt="image1"/>
                        </div>
                        <span>Быстрая тех-поддержка. блаблабла блаблабла
                            блаблабла блаблабла блаблабла
                            блаблабла</span>
                    </div>
                </div>
            </main>
        );
    }
}

export default HomePage;
