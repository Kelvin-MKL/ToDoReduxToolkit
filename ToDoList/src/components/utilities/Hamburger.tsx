interface Props {
    isExpanded: boolean;
}

const Hamburger = ({isExpanded}: Props) => {
    const open = isExpanded
    return ( 
    <>
        <div className="hamburger" onClick={() => console.log(open)}>
            {isExpanded?         <section>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
             </section> :      
            <>
            <div className="xburger"></div>
            <div className="xburger"></div>
            <div className="xburger"></div></>       
            }

        </div>

    </>

     );
}
 
export default Hamburger;