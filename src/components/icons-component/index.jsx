import './style.scss';

const IconsComponent = ({phone,location, email}) => {


    return(

        <ul className=" cord P-icons">
            <li className="G-flex P_icon " style={{justifyContent: "space-between", gap: 10}}>
                <span className='icon phone'/>
                <p>{phone}</p>
            </li>

            <li className="G-flex P_icon " style={{justifyContent: "space-between", gap: 10}}>
                <span className='icon let'/>
                <p>{email}</p>
            </li>
            <li className="G-flex P_icon " style={{justifyContent: "space-between", gap: 10}}>
                <span className='icon loc'/>
                <p>{location}</p>
            </li>

        </ul>
    )
}

export default IconsComponent;
