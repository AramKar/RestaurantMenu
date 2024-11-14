import React from "react";
import './BurgerTypes.css';



function BurgerTypes(props) {
    return(
        <div style = {{display: "flex", alignItems: "center", gap: "30px"}}>
            <div><img style = {{width: "210px", height: "140px",}} src = "https://s3-alpha-sig.figma.com/img/b809/7ea6/cc3a738cc3c595dce4f51cc20347632d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OUA8CbpO~zIW-~rRpWiadKnaSyqMo8Z1YxQxIC~V-pIPfGm3qjCl4zFM7iY62ilfvdXRq0ctrVQnO4QnVVWMBXHSVRdh8t5ioZazk~B-Pz5LesCpVLM2LWo~R934VAQck8TKFvBE-AixbbeRSTjfl-ma4JlD2XpfXIB5xoy6WLARQNWvg5UGkSYooMCH6ndTNsNGqTuvSZxI~6ZeMOf-fdFr2iRKVlAGRgUt2hUeR9IGofohXfE0HYXmmlsRAvxe7ExWRMADX25fz5jH60FtrGc1NaBhDmsvh1L9DAF7ZoETEN8VK-HVNzx-a6MtS38-hmQkVpO5IOKDOiZ2p8OeTA__"></img></div>

            <div>
                <p>{props.text} ----------------- {props.price}</p>

            </div>
            
        </div>
    );
}

export default BurgerTypes;
























