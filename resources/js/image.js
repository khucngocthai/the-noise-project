class DisplayImage {
  constructor(path, backgroundColor, particleColor) {
    this.path = path;
    this.backgroundColor = backgroundColor;
    this.particleColor = particleColor;
  }
}

let whiteHexColor = "#FFFFFF";
let orangeHexColor = "#F27126";
let blackHexColor = "#000000";
let imagePath = "resources/images";

// Set up an image gallery
var imageCollection = [
  new DisplayImage(imagePath + "/Noise Logo OFFICIAL.png", blackHexColor, whiteHexColor),
];
