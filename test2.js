function cambiarImagen() {
  const imagen = document.getElementById("miImagen");
  if (imagen.src.includes("imagen1.jpg")) {
    imagen.src = "imagen2.jpg";
  } else {
    imagen.src = "imagen1.jpg";
  }
}
