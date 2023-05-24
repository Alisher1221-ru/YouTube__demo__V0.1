export default function Cart(props) {
    return(
        <div className="items">
            <img src={props.img} width={"40px"} height={"40px"} alt=""/>
            <p>{props.title}</p>
        </div>
    )
}