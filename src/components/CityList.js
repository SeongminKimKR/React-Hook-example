import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const CityList = (props) => {
    const { cities, match } = props;
    const { url } = match;
    console.log(url);

    const uniqueCities = cities.filter(
        (item, index) => cities.indexOf(item) === index
    );
    return (
        <ul>
            {uniqueCities.map((item) => {
                //console.log(item);
                return (
                    <li key={item}>
                        <Link to={`${url}/${item}`}>{item}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

//withRouter는 자바의 어노테이션과 같은 역할로 라우터와 관련된 특정 기능을 할 수 있게 만듬
export default withRouter(CityList);