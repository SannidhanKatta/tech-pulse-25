import '../styles/Date.css';
function Date(props) {
    return (
        <div className="mx-auto text-center">
            <h1 className="date_title dark:text-gray-100">
                {props.day} <sup className="dark:text-gray-300">{props.subtxt}</sup>
                <span className="month_title dark:text-gray-200">{props.month}</span>
            </h1>
        </div>
    )
}

export default Date;