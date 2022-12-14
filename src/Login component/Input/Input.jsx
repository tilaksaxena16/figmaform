
import "./Input.css";

const Input = (props) => {


    return (
        <>
            <div>
                <input type="text" value={props.userinput} onChange={props.onChangeCall} className="input-container" /> 
                <p style={{color:"red"}}>{props.errormessg}</p>
            </div>
        </>
    )
}

export { Input }