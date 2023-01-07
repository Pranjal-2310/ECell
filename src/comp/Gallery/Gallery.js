import React from 'react';
import { useState } from 'react';
import './Gallery.css';

const Modal = (props)=>{
    const handleOnClick = (setGalleryModal)=>{
        setGalleryModal(false);
    }
    return(
        <div className="myModal myModal" onClick={()=>handleOnClick(props.setGalleryModal)}>
             <div className="myModal-image">
                <img className = 'modal-image' src = {props.modalImage} alt="modal-image" />      
             </div>
        </div>
    )
}

export default function Gallery() {
    const [galleryModal , setGalleryModal] = useState(false);
    const [modalImage , setModalImage] = useState('');
    const handleOnClick = (event)=>{
        // console.log(event.target.src);
        setModalImage(event.target.src);
        setGalleryModal(true);


    }
    return (
        <>
            {galleryModal && <Modal setGalleryModal = {setGalleryModal} modalImage = {modalImage}/ >}
            <h1 style={{color:"#ceefff" , fontFamily:"Arial, Helvetica, sans-serif"}}>Gallery</h1>
            <hr/>
                <div id="gallery" class="container-fluid">
                    <img src="https://source.unsplash.com/1600x1200?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/1024x768?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/1366x768?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/1920x1080?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/640x360?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/320x640?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/1200x1600?cat,portrait" class="card img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/800x600?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/600x800?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/400x600?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/600x400?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/1100x1600?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/1600x1100?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/992x768?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                    <img src="https://source.unsplash.com/768x992?cat,portrait" class="img-responsive" onClick = {handleOnClick}/>
                </div>
                
        </>
            )
}
