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

/*
let data; 

fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The+Strokes&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json')
  .then(res => res.json())
  .then(responseData => {
    data = responseData.topalbums.album;
    data = data[1].image[3]['#text'];

    console.log(data);
  });
*/