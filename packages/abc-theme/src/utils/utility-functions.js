import { useEffect, useState } from 'react';

export const myunescape = (s) => {
  const text = s.replace(/(<([^>]+)>)/ig, '')
  var re = /&(?:amp|#38|#038|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#8211|#8216|#8217);/g;
  var myunescaped = {
    '&amp;': '&',
    '&#38;': '&',
    '&#038;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp': ' ',
    '&#8211;': '-',
    '&#8216;': "'",
    '&#8217;': "'",
  };
  return text.replace(re, function (m) {
    return myunescaped[m];
  });
}

export const useCurrentWidth = () => {

  const getWidth = () => {
    if  (typeof window !== "undefined") {
      const myWindow = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth
      return myWindow
    }
    return null
  }

  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    // timeoutID for debounce
    let timeoutID = null;
    const resizeListener = () => {
      //prevent previous setTimeout
      clearTimeout(timeoutID);
      // change width after 150ms
      timeoutID = setTimeout(() => setWidth(window.innerWidth), 150);
    };
    //set resize listener
    window.addEventListener('resize', resizeListener)
    //clean up
    return () => {
      //remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  })

  return width;
}




// function findScroller(element) {
//     element.onscroll = function() { console.log(element)}

//     Array.from(element.children).forEach(findScroller);
// }

// findScroller(document.body);

 
export const  dataURItoBlob = (dataURI) => {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}