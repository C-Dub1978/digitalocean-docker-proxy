/**
 * BioSite project for Web200 @ Bellevue University
 * author: Christopher Wilson
 * cswilson.site
 */

/**
 * Array containing image objects for the images container, to build our image
 * thumbnail molecules
 */
const imageMaps = [
  {
    caption: "Broken shin on landing",
    id: "broken_stoked",
    path: "images/broken_stoked.jpg",
    type: "image"
  },
  {
    caption: "Gearing up for the ballet",
    id: "leotard_gear_up",
    path: "images/leotard_gear_up.jpg",
    type: "image"
  },
  {
    caption: "Lined up and ready",
    id: "leotard_lineup",
    path: "images/leotard_lineup.jpg",
    type: "image"
  },
  {
    caption: "Like a true badass",
    id: "leotard",
    path: "images/leotard.jpg",
    type: "image"
  },
  {
    caption: "Being PCA'ed",
    id: "pca_leotard",
    path: "images/pca_leotard.jpg",
    type: "image"
  },
  {
    caption: "Landing With Style",
    id: "landing",
    path: "images/landing.jpg",
    type: "image"
  },
  {
    caption: "Exiting Perrine Bridge",
    id: "perrine_exit",
    path: "images/perrine_exit.jpg",
    type: "image"
  },
  {
    caption: "The TARD-over",
    id: "tard_over",
    path: "images/tard_over.jpg",
    type: "image"
  },
  {
    caption: "Turbine fun!",
    id: "turbine",
    path: "images/turbine.jpg",
    type: "image"
  },
  {
    caption: "AFF Training",
    id: "aff",
    path: "images/aff.jpg",
    type: "image"
  },
  {
    caption: "3-way Horny Gorilla Exit",
    id: "gorilla",
    path: "images/gorilla.jpg",
    type: "image"
  },
  {
    caption: "Exit Time",
    id: "skydive_exit",
    path: "images/skydive_exit.jpg",
    type: "image"
  },
  {
    caption: "Wingsuit Fun",
    id: "wingsuit",
    path: "images/wingsuit.jpg",
    type: "image"
  },
  {
    caption: "High on Rock",
    id: "rock_climbing1",
    path: "images/rock_climbing1.jpg",
    type: "image"
  },
  {
    caption: "High on Rock Again",
    id: "rock_climbing2",
    path: "images/rock_climbing2.jpg",
    type: "image"
  },
  {
    caption: "Shred The Gnar",
    id: "snowboard",
    path: "images/snowboard.jpg",
    type: "image"
  },
  {
    caption: "Wakeboard Stoke",
    id: "wakeboarding1",
    path: "images/wakeboarding1.jpg",
    type: "image"
  },
  {
    caption: "More Wakeboard Stoke",
    id: "wakeboarding2",
    path: "images/wakeboarding2.jpg",
    type: "image"
  }
];

/**
 * Array containing video objects for the videos container, to build our video
 * thumbnail molecules
 */
const videoMaps = [
  {
    caption: "Index, WA",
    id: "8sF3fsE9348",
    path: "https://img.youtube.com/vi/8sF3fsE9348/0.jpg",
    type: "video"
  },
  {
    caption: "Mt. Baring, WA",
    id: "un5GWCWl73s",
    path: "https://img.youtube.com/vi/un5GWCWl73s/0.jpg",
    type: "video"
  },
  {
    caption: "Perrine Bride, ID",
    id: "Unzh49DBT_o",
    path: "https://img.youtube.com/vi/Unzh49DBT_o/0.jpg",
    type: "video"
  },
  {
    caption: "Perrine Bridge, ID",
    id: "JNyPjokRr4g",
    path: "https://img.youtube.com/vi/JNyPjokRr4g/0.jpg",
    type: "video"
  },
  {
    caption: "Hoffstadt Bridge, WA",
    id: "vDGA4BFh8eQ",
    path: "https://img.youtube.com/vi/vDGA4BFh8eQ/0.jpg",
    type: "video"
  },
  {
    caption: "Moab Sessions, Moab UT",
    id: "oK6OyZi8rJs",
    path: "https://img.youtube.com/vi/oK6OyZi8rJs/0.jpg",
    type: "video"
  },
  {
    caption: "Crown Point, OR",
    id: "0V_ipYS-vjc",
    path: "https://img.youtube.com/vi/0V_ipYS-vjc/0.jpg",
    type: "video"
  }
];

// Global id number used for the modal
let currentId = null;
// Global media type used for the modal
let currentType = null;
// DOM objects
const links = document.querySelectorAll("a");
const modalClose = document.getElementById("modal__close");
const modalPrevious = document.getElementById("modal__previous");
const modalNext = document.getElementById("modal__next");
const imageContainer = document.getElementById("images__innerbox");
const videosContainer = document.getElementById("videos__innerbox");
// Set click listeners
modalClose.addEventListener("click", closeModal);
modalPrevious.addEventListener("click", previousModal);
modalNext.addEventListener("click", nextModal);

/**
 * Since there is a fixed navbar, when clicking a normal anchor link
 * the page scrolls the anchor position to the top of the viewport but the fixed
 * navbar hides it. This will offset the scroll position after clicking a link
 * so that the actual anchor point is offset by 200 px.
 * Hacky, but it works
 */
links.forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      window.scrollTo({}, window.pageYOffset - 200);
    }, 0);
  });
});

/**
 * This will build an image container molecule for each object in the images
 * array, and will append it to the images organism on the main page
 */
imageMaps.forEach((imageObj, index) => {
  // append div to the image container
  const thumbnail = buildThumbnail(imageObj, index);
  imageContainer.append(thumbnail);
});

/**
 * This will build a video container molecule for each object in the images
 * array, and will append it to the images organism on the main page
 */
videoMaps.forEach((videoObj, index) => {
  // append div to the video container
  const thumbnail = buildThumbnail(videoObj, index);
  videosContainer.append(thumbnail);
});

// HELPER FUNCTIONS

/**
 * This is a function that builds an image molecule for either the image
 * container organism or the video container organism
 * @param {*} obj
 *      The media object coming from either the image or video array
 * @param {*} index
 *      The index position of the media object in it's corresponding array
 * @returns
 *      The thumbnail molecule
 */
function buildThumbnail(obj, index) {
  let alt;
  if (obj.type === "image") {
    alt = obj.id;
  } else if (obj.type === "video") {
    alt = obj.caption;
  }
  // create div container, add class
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("image__box");

  // create the image, set it's attributes, append it to the above div
  const image = document.createElement("img");
  image.setAttribute("src", obj.path);
  image.setAttribute("alt", alt);
  image.setAttribute("width", "100%");
  image.setAttribute("height", "100%");
  image.setAttribute("id", obj.id);
  image.setAttribute("data-index", index);
  image.setAttribute("data-type", obj.type);
  thumbnail.appendChild(image);

  // set click listener on the div
  thumbnail.addEventListener("click", e => {
    openModal(e.target);
  });
  return thumbnail;
}

/**
 * Function attached to the click listener on the modal close button
 */
function closeModal() {
  const backdrop = document.getElementsByClassName("backdrop")[0];
  console.log("backdrop: ", backdrop);
  const modalContainer = document.getElementById("modal__image-box");
  modalContainer.innerHTML = null;
  hideElDisplay(backdrop);
  currentId = null;
  currentType = null;
}

/**
 * Function attached to the click listener on the modal right/next button
 */
function nextModal() {
  currentId++;
  updateModal(currentId);
}

/**
 * Function attached to the click listener on the modal left/previous button
 */
function previousModal() {
  currentId--;
  updateModal(currentId);
}

/**
 * Click listener callback, opens the modal when a user clicks an image
 * or a video in the main image or video container organisms
 * @param {} el
 *      The html element that was clicked
 */
function openModal(el) {
  // show backdrop modal
  showElDisplay(document.getElementsByClassName("backdrop")[0], "flex");
  // set image type and image id
  const type = el.getAttribute("data-type");
  const id = el.getAttribute("data-index");
  currentId = id;
  currentType = type;
  // Check the index to see whether or not to disable modal arrow
  modalArrowsCheck(id);
  insertModalContent(currentId, type);
}

/**
 * Function to insert image or video content into the parent container/modal
 * @param {} id
 *      The id of the imageMap object
 * @param {*} type
 *      either image or video
 */
function insertModalContent(id, type) {
  const container = document.getElementById("modal__image-box");
  let mediaObj;
  container.innerHTML = null;
  if (type === "image") {
    mediaObj = imageMaps[id];
    container.appendChild(createMediaImage(mediaObj));
  } else if (type === "video") {
    mediaObj = videoMaps[id];
    container.appendChild(createMediaVideo(mediaObj));
  }
  modalArrowsCheck(id);
}

/**
 * Function called when the user clicks a directional arrow in the modal,
 * which updates the content to the previous or next object in the imageMap or
 * video list
 * @param {} id
 *      The id of the image or video object in it's corresponding array
 */
function updateModal(id) {
  const container = document.getElementById("modal__image-box");
  container.innerHTML = null;
  insertModalContent(id, currentType);
}

/**
 * Function that creates a figure with image and caption to append to the modal
 * @param {*} mediaObj
 *      The object in the imageMap array
 */
function createMediaImage(mediaObj) {
  const fig = document.createElement("figure");
  fig.setAttribute("class", "modal__figure");
  const figCaption = document.createElement("figcaption");
  figCaption.innerHTML = mediaObj.caption;
  const img = document.createElement("img");
  img.setAttribute("alt", mediaObj.id);
  img.setAttribute("src", mediaObj.path);
  fig.append(img);
  fig.append(figCaption);
  return fig;
}

/**
 * Function that creates a youtube video iframe and caption to append to
 * the modal
 * @param {*} mediaObj
 *      The object in the imageMap array
 * @returns container
 *      The div organism that houses the iframe youtube video
 */
function createMediaVideo(urlObj) {
  const container = document.createElement("div");
  container.setAttribute("class", "aspect__ratio");
  const caption = document.createElement("p");
  caption.style.fontSize = "0.7em";
  caption.innerHTML = urlObj.caption;
  const iframe = document.createElement("iframe");
  iframe.setAttribute("type", "text/html");
  // iframe.setAttribute("width", 702);
  // iframe.setAttribute("height", 405);
  iframe.setAttribute(
    "src",
    "https://youtube.com/embed/" + urlObj.id + "?playsinline=0"
  );
  iframe.setAttribute("frameborder", 0);
  container.appendChild(iframe);
  container.appendChild(caption);
  return container;
}

/**
 * Helper function that sets visibility on the element to 'hidden'
 * @param {} el
 *      The html element to hide
 */
function hideElVis(el) {
  el.style.visibility = "hidden";
}

/**
 * Function that sets visibility on the element to 'visible'
 * @param {*} el
 *      The html element to show
 */
function showElVis(el) {
  el.style.visibility = "visible";
}

/**
 * Function to set display attribute on the html element
 * @param {*} el
 *      The html element to update
 * @param {*} attrib
 *      The attribute value, e.g. 'flex', 'block', 'inline', etc
 */
function showElDisplay(el, attrib) {
  el.style.display = attrib;
}

/**
 * Function to set display attribute to none on the html element
 * @param {*} el
 *      The html element to hide
 */
function hideElDisplay(el) {
  el.style.display = "none";
}

/**
 * This function checks the global currentId value and current media type
 * to see if it is the first or last object in the corresponding
 * array, and if so, it hides the previous or next arrow
 * @param {*} id
 *      The global id of the current media object
 */
function modalArrowsCheck(id) {
  let mapType;
  if (currentType === "image") {
    mapType = imageMaps;
  } else if (currentType === "video") {
    mapType = videoMaps;
  }
  const leftArrow = document.getElementById("modal__previous");
  const rightArrow = document.getElementById("modal__next");
  const parsedId = parseInt(id);
  if (parsedId === 0) {
    hideElVis(leftArrow);
  } else if (parsedId === mapType.length - 1) {
    hideElVis(rightArrow);
  } else {
    showElVis(leftArrow);
    showElVis(rightArrow);
  }
}
