'use client'

import React from "react";
import { Component } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const uiImages = [
  {
    original: "https://i.imgur.com/nTihVLg.png",
    thumbnail: "https://i.imgur.com/nTihVLg.png",
    description: "UI Mockup for AddressBook Project (1)"
  },
  {
    original: "https://i.imgur.com/rZDEpqH.png",
    thumbnail: "https://i.imgur.com/rZDEpqH.png",
    description: "UI Mockup for AddressBook Project (2)"
  },
];

const foodImages = [
  {
    original: "https://i.imgur.com/CeLm63g.png",
    thumbnail: "https://i.imgur.com/CeLm63g.png",
  },
  {
    original: "https://i.imgur.com/Q93eaDb.png",
    thumbnail: "https://i.imgur.com/Q93eaDb.png",
  },
  {
    original: "https://i.imgur.com/mCnrHHq.jpeg",
    thumbnail: "https://i.imgur.com/mCnrHHq.jpeg",
  },
  {
    original: "https://i.imgur.com/74Y9p8e.png",
    thumbnail: "https://i.imgur.com/74Y9p8e.png",
  }
];

const eventImages = [
  {
    original: "https://i.imgur.com/iKDayVS.jpeg",
    thumbnail: "https://i.imgur.com/iKDayVS.jpeg",
  },
  {
    original: "https://i.imgur.com/Y2pYbjq.png",
    thumbnail: "https://i.imgur.com/Y2pYbjq.png",
  },
  {
    original: "https://i.imgur.com/u5pgInG.png",
    thumbnail: "https://i.imgur.com/u5pgInG.png",
  },
  {
    original: "https://i.imgur.com/8LMwnGa.png",
    thumbnail: "https://i.imgur.com/8LMwnGa.png",
  },
  {
    original: "https://i.imgur.com/IM38YMK.png",
    thumbnail: "https://i.imgur.com/IM38YMK.png",
  },
  {
    original: "https://i.imgur.com/RSMVHdq.png",
    thumbnail: "https://i.imgur.com/RSMVHdq.png",
  },
  {
    original: "https://i.imgur.com/jwjsrkd.png",
    thumbnail: "https://i.imgur.com/jwjsrkd.png",
  },
  {
    original: "https://i.imgur.com/NK8hHj3.png",
    thumbnail: "https://i.imgur.com/NK8hHj3.png",
  },
  {
    original: "https://i.imgur.com/iUN5ysX.png",
    thumbnail: "https://i.imgur.com/iUN5ysX.png",
  },
];

class GalleryTemplate extends Component {
  render() {
    return (
    <ImageGallery items={uiImages} />
    )
  }
}

class GalleryTemplate2 extends Component {
  render() {
    return <ImageGallery items={foodImages} />;
  }
}

class GalleryTemplate3 extends Component {
  render() {
    return <ImageGallery items={eventImages} />;
  }
}

export default function Gallery() {

  return (
    <div className="mx-10" id="about">
      <div>
        <h1 className="text-3xl font-semibold text-center">
          UI/UX Mockups
          <div>
            <GalleryTemplate /> 
          </div>
        </h1>
      </div>
      <br />
      <br />
      <div>  
        <h1 className="text-3xl font-semibold text-center">
          Personal Illustrations
          <div>
            <GalleryTemplate2 /> 
          </div>
        </h1>
      </div>
      <br />
      <br />
      <div>  
        <h1 className="text-3xl font-semibold text-center">
          Event Illustrations
          <div>
            <GalleryTemplate3 /> 
          </div>
        </h1>
      </div>
    </div>
  );
}