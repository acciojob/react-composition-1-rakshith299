import React, {useState} from "react";
import ReactDOM  from "react-dom";

const Tabs = ({tabData}) => {

    const [content, setContent] = useState("");

    function getContent(data){
        setContent(data);
    }

    return (
        <div>
            <ul>
                {            
                tabData.map((each) => 
                    <li onClick={() => getContent(each.content)}> {each.title} </li>
                )          
                }
            </ul>

            {content !== ""? <p>{content}</p>: ""}
        </div>
       
    )
}

export default Tabs;