import React from "react";
import { Switch, Route, withRouter } from "react-router";
import CityList from "./CityList";
import Weather from "./Weather";

const API_CITIES = "http://localhost:8888/weather-service/available-cities";

class Cities extends React.Component {
    state = {
        cities: []
    };

    //class 안에있는 함수는 function 선언을 생략한다.
    componentDidMount() {
        console.log('City component');

        //console.log(this.state.cities);
        const { cities } = this.state;
        //console.log(cities);

        const citiesData = fetch(API_CITIES)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    cities: data
                })
            });
    }

    render() {
        const { match } = this.props;
        const { cities } = this.state;
        return (
            <div>
                <h1>Cities</h1>
                <p>City list</p>
                <Switch>
                    <Route
                        exact
                        path={match.path}
                        render={() => <CityList cities={cities} />}
                    />
                    <Route path={`${match.path}/:cityName`} component={Weather} />
                </Switch>
            </div>
        );
    }
}
export default withRouter(Cities);