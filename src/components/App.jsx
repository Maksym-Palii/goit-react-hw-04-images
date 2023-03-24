import React, { useState, useEffect } from "react";

import toast, { Toaster } from 'react-hot-toast'

import { fetchImg } from "api/api";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button"
import {Loader} from "components/Loader/Loader"

import css from "components/App.module.css"


export const App = () => {
  const [images, setImages] = useState([]);
  const [searcImages, setSearcImages] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(null);


  const toggleModal = () => {
    setShowModal(!showModal)
  }
  
 

  const hendleFormSubmit = (searchQuery) => {
    setImages([]);
    setSearcImages(searchQuery);
    setPage(1);
    setError(null)
  }

  // Пошук зображень

  

  const nextPage = () => {    
    setPage(prevPage=>prevPage+1)
  }

  const toggleLoader = () => setShowLoader(prevLoader=>!prevLoader )
 

  useEffect(() => {
    const search = async () => {
    try {
      toggleLoader();
      const response = await fetchImg(searcImages, page)
      if (response.length === 0) {
        toast.error(`Sorry, no images for this request ${searcImages}`)
        // return Promise.reject(new Error(`Sorry no images for this request ${searcImages}`))
      }
      const data = await response.map(el => ({
        id: el.id,
        smallImage: el.webformatURL,
        largeImage: el.largeImageURL,
        tags: el.tags,
      }))
        
      setImages(prevImages => [...prevImages, ...data]);
    }
    // catch не ловить помилки
    catch (error) {
      setError(error.mesage)
    } finally {
      toggleLoader()
    }
  }
      if(searcImages){search()}
    },[page, searcImages])
 
   
    return (
      
      <div className={css.app}>
        <Searchbar submit={hendleFormSubmit} />
         {error && <h1>{error}</h1>}
        <ImageGallery images={images} toggleModal={toggleModal} showModal={showModal} />
        <Loader showLoader={ showLoader} />
        <Button nextPage={nextPage} showBtn={images.length} />
        <Toaster toastOptions={{
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
          }
        }} />


    </div>
  );
  };
