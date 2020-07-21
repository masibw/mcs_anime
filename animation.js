let ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;





const myTimeline = anime.timeline({loop:true})
myTimeline
  .add({
    targets: ".greeting .g-letters-1",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".greeting .g-letters-1",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".greeting .g-letters-2",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".greeting .g-letters-2",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".greeting",
    opacity: 0,
    duration: 500,
    delay: 500,
  }).add({
    targets: ".wall-r",
    opacity: [0, 1],
    width: [0, "100%"],
    height: [0, "100%"],
    duration: 500,
    easing:"easeInExpo",
  })
 


/* Media Creative Supporter ってなるところのアニメーション*/

//.ml1の.lettersを１文字ずつ.letterってクラスのspanの中に入れる
let textWrapper = document.querySelectorAll(".ml1 .letters");

textWrapper.forEach((element) => {
  element.innerHTML = element.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
});

myTimeline
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add(
    {
      targets: ".ml1 .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700,
      delay: (el, i, l) => 0 * (l - i),
    },
    "-=1475"
  )
  .add({
    targets: ".ml1 .letter",
    opacity: [1, 0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 700,
    delay: (el, i) => 1000 + 30 * (-i + 1),
  })
  .add(
    {
      targets: ".ml1 .line",
      opacity: [1, 0],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 700,
    },
    "-=700"
  )
  .add(
    {
      targets: ".ml1 .box",
      opacity: 1,
      translateZ: 0,
      translateX: "-50rem",
      easing: "easeOutExpo",
      duration: 900,
      rotate: {
        value: -720,
        duration: 600,
        easing: "easeOutExpo",
      },
    },
    "-=1150"
  )
  .add({
    targets: ".ml1 .box",
    width: "1000vw",
    height: "1000vh",
    borderRadius: ["50%", "0%"],
    backgroundColor:"#0A7500",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    easing: "easeInExpo",
    duration: 1000,
  });
  // .add(
  //   {
  //     targets: ".wall-r",
  //     opacity: [0, 1],
  //     width: "100%",
  //     height: "100%",
  //     duration: 500,
  //     easing: "easeInExpo",
  //   },
  //   "-=600"
  // )
  // .add(
  //   {
  //     targets: ".wall-b",
  //     opacity: [0, 1],
  //     width: "100%",
  //     height: "100%",
  //     duration: 500,
  //     easing: "easeInExpo",
  //   },
  //   "-=400"
  // )
  // .add(
  //   {
  //     targets: ".wall-g",
  //     opacity: [0, 1],
  //     width: "100%",
  //     height: "100%",
  //     duration: 500,
  //     easing: "easeInExpo",
  //   },
  //   "-=200"
  // );





  



