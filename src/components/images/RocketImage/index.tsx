import { RocketImageProps } from "../../../@types/appPropTypes";
import "./RocketImage.scss";

export default function RocketImage({ images = [] }: RocketImageProps) {
  return (
    <>
      {images.length > 0 ? (
        <img src={images[0]} className="rocketimage" loading="lazy" />
      ) : null}
    </>
  );
}
