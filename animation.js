let textWrapper = document.querySelectorAll('.ml1 .letters')

textWrapper.forEach(element => {
element.innerHTML = element.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
});



anime.timeline({ loop: true })
  .add({
    targets: '.ml1 .letter',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay:(el,i)=>70*(i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay:(el,i,l)=>0*(l-i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay:1000
})