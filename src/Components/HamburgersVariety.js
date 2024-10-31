import React from "react";
import './HamburgersVariety.css';


function HamburgersVariety(props){
    return(
    <div className="burger-variety-cont">
        <div className="recomended">
           {props.recomended == true ? <button>RECOMENDED</button> : null}
           {/* {props.recomended && <button>RECOMENDED</button>} */}
        </div>
        <div className="hamburger-img-cont"><img src = "https://s3-alpha-sig.figma.com/img/b809/7ea6/cc3a738cc3c595dce4f51cc20347632d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KhZr-xTzizjgS9Ng3NeBSL1ouSH0ieXxH0NJLbFP56aPW7VhcQbFaieSHZTbEF1zM8E0uX~aNSMYrTHhxKNcHNDIivWQrFcWaaP3EFPTOlgC8dqN9l5zYnE0T5C2TGtcnCxPh40iyUrmAcXfuK0a8py5zDOtYjDdTjMqJ9-sRZlDOzsLDFkMMSDtFIZGy4XMrcN9yGtVuCNPyTYnmjUH3QtGVLKDg4LHFQHxnsi1e54CWZgEDEzPs1E9La5VcDpuiAhu5hFp1TS04wjA~ukC5U-q2HrKlyna5d-JV0ZQ-VhIcKpoaims2gs5wcjkRZESfqLykpvxQ4e8giAQE-jqqw__"></img></div>
        <div className="burger-img-design">
            <span>{props.price}</span>
        </div>
        <div className="hamburger-size-cont"><span className="hamburger-size">Гамбургер макси</span></div>
        <div className="hamburger-description-cont"><span className="hamburger-description">Максимально толстый слой мяса</span></div>
        <button className="hamburger-order">ЗАКАЗАТЬ</button>
    </div>
    );
}

export default HamburgersVariety;












