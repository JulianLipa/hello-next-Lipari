const HeaderSection = (props) => {
    const {cont1, cont2, cont3} = props;
    <h1>hoal</h1>
    return(
    <nav>
        <ul>
            <li>{cont1}</li>
            <li>{cont2}</li>
            <li>{cont3}</li>
        </ul>
    </nav>
    );
};

export default HeaderSection;