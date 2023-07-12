interface Props {
    isExpanded: Boolean;
}

const Hamburger = ({isExpanded}: Props) => {

    return ( 
    <>
        <div className="hamburger" onClick={() => console.log(isExpanded)}>
            {isExpanded ?         
                <>
                    <div className="burger"></div>
                    <div className="burger"></div>
                    <div className="burger"></div>
                </> :      
                <>
                    <div className="xburger"></div>
                    <div className="xburger"></div>
                    <div className="xburger"></div>
                </>       
            }

        </div>

    </>

     );
}
 
export default Hamburger;