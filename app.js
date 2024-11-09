function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "./imge/pic_bulboff.gif";
    } else {
      image.src = "./imge/pic_bulbon.gif";
    }
  }