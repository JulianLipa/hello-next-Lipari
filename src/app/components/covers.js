import Image from "next/image";

const Album = (props) => {
    const {title, img, year, long} = props;

    return(
        <div className="cards-single" style={{backgroundColor:"white", color:"black", padding:"30px", borderRadius:"10px", margin:"10px"}}>
            <Image
                src={img}
                alt="cover image"
                width={150}
                height={150}
                style={{borderRadius:"10px"}}
            />
            <h2 style={{width:"200px", marginBottom:"5px"}}>{title}</h2>
            <p style={{marginBottom:"5px"}}>{year}</p>
            <p style={{fontSize:"0.7em", color:"grey"}}>{long}</p>
        </div>
    );
};

export default Album;