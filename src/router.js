import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//Pages
import App from './App';
import HomePage from './components/HomePage/HomePage';
import NotePage from './components/NotePage/NotePage';
import StatisticPage from './components/StatisticPage/StatisticPage';




class BasicExample extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <App/>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/notes" component={NotePage}/>
                    <Route path="/statistic" component={StatisticPage}/>
                </div>
            </Router>
        );
    }
}
export default BasicExample;