const Box = ({id, handleToggle, on}) => {

    const styles = {
        backgroundColor:on?"#222222":"transparent"
    }   

    return(
        <div className="boxes" style={styles} 
        
        onClick={handleToggle}>

        </div>
    );
}

export default Box;