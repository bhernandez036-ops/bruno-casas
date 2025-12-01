onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("Sleigh-Ride-(Indian-Christmas-Remix).mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://img.freepik.com/fotos-premium/hombre-indio-sombrero-santa-decorando-arbol-navidad-adornos_175356-12255.jpg");
});
