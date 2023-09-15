import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";

const Gallery = ({photos}) => (
    <div>
    <PhotoAlbum 
    layout="rows" 
    photos={photos} 
    renderPhoto={NextJsImage}
    defaultContainerWidth={1200}
            sizes={{ size: "calc(100vw - 240px)" }}
    />
    </div>
);

export default Gallery;