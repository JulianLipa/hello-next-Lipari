import Image from "next/image";
import classNames from 'classnames';

const Single = (props) => {
    const {num, title, img, views, long} = props;
    let songClasses = classNames('one-liner', 'single-theme');

    return(
        <div className={songClasses}>
            <p>{num}</p>
            <Image
                src={img}
                alt="cover image"
                width={50}
                height={50}
                style={{borderRadius:"5px"}}
            />
            <h2>{title}</h2>
            <p>{views}</p>
            <p className={'one-liner'}>{long}</p>
        </div>
    );
};

export default Single;