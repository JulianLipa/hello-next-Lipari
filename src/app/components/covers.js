import Image from "next/image";

const Album = (props) => {
    const {title, img, year, long} = props;

    return(
        <div className={'cards-single'}>
            <Image
                src={img}
                alt="cover image"
                width={200}
                height={200}
                style={{borderRadius:"10px"}}
            />
            <h2>{title}</h2>
            <div className={'one-liner'}>
                <p className={'one-liner'}>{year}</p>
                <p className={'one-liner'}>{long}</p>
            </div>
                <Image
                    src="/images/icons/play.svg"
                    alt="cover image"
                    width={200}
                    height={200}
                    style={{borderRadius:"10px"}}
                    className="playButton"
                />
        </div>
    );
};

export default Album;