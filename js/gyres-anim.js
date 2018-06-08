jQuery(document).ready(function ($) {

    mainTl = new TimelineMax(),
    $scene = $('svg.gyres'),
    $sceneFond = $scene.find('#scene-fond'),
    $sceneLand = $scene.find("#scene-land"),
    $sceneEquateur = $scene.find('#scene-equateur'),
    $sceneFond = $scene.find('#scene-fond'),
    $sceneFlecheZoom1 = $scene.find('#fleche-zoom-1_1_'),
    $sceneFlecheZoom2 = $scene.find('#fleche-zoom-2'),
    $sceneFlecheZoom3 = $scene.find('#fleche-zoom-3'),
    $sceneFlecheZoom4 = $scene.find('#fleche-zoom-4'),
    $sceneFlecheZoom5 = $scene.find('#fleche-zoom-5'),
    $sceneGyre1 = $scene.find('#gyre1'),
    $sceneGyre2 = $scene.find('#gyre2'),
    $sceneGyre3 = $scene.find('#gyre3'),
    $sceneGyre4 = $scene.find('#gyre4'),
    $sceneGyre5 = $scene.find('#gyre5'),
    $sceneBullet = $('.scene-bullet'),
    $sceneTitle = $('.scene-title'),
    $sceneText = $('.scene-text');
       

    clearStage();
    function clearStage() {
        var clearTl = new TimelineMax();

        clearTl
            .set($sceneFond, { autoAlpha: 1, transformOrigin: "center center" })
            .set($sceneLand, { autoAlpha: 1, transformOrigin: "center center" })
            .set($sceneEquateur, { autoAlpha: 1, transformOrigin: "center center" })
            .set($sceneFlecheZoom1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFlecheZoom2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFlecheZoom3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFlecheZoom4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFlecheZoom5, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneGyre1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneGyre2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneGyre3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneGyre4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneGyre5, { autoAlpha: 0, transformOrigin: "center center" });

        return clearTl;
    }

    // init controller
    var controller = new ScrollMagic.Controller();
    var step = 500
    
    // build scene
    new ScrollMagic.Scene({
        triggerElement: 'section.scene-map',
        triggerHook: 0,
        duration: step * 18
    })
        .setPin('section.scene-map', { pushFollowers: true })
        .offset(0)
        .addIndicators()
        .addTo(controller);

    //------------------------------------------------------------------------------------------------------------//
    //--EQUATEUR
    //------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneEquateur, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 1) //VOLONTAIRE
      .addTo(controller);

    //------------------------------------------------------------------------------------------------------------//
    //--ZOOM + TEXTE OUT + TEXT CHANGE
    //------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step*3
    })
        .setTween($sceneLand, { scale: 2.5, xPercent: 36, yPercent: 20, ease: Power0.easeNone })
        .offset(step * 2) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step * 3
    })
      .setTween([$sceneBullet, $sceneTitle, $sceneText], {
        autoAlpha: 0,
        ease: Power0.easeNone
      })
      .offset(step * 2) //tip top
      .on("start end", function(e) {
        if (e.type == "end") {
          if (e.target.controller().info("scrollDirection") === "REVERSE") {
            //mainTl.set($sceneTextBullet, { scale: 0 });
            $sceneBullet.text("");
            $sceneTitle.text("Formation des trucs");
          } else {
            //mainTl.set($sceneTextBullet, { scale: 0.5 });
            $sceneBullet.text("1");
            $sceneTitle.text(" – Mon titre numéro 1");
          }
        }
      })
      .addTo(controller);

    //------------------------------------------------------------------------------------------------------------//
    //--FLECHES ZOOMED
    //------------------------------------------------------------------------------------------------------------//

    //STEP 1
    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step
    })
        .setTween($sceneFlecheZoom1, { autoAlpha: 1, ease: Power0.easeNone })
        .offset(step * 5) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step
    })
      .setTween([$sceneBullet, $sceneTitle, $sceneText], {
        autoAlpha: 1,
        ease: Power0.easeNone
      })
        .offset(step * 5) //tip top
        
      .addTo(controller);

    //STEP 2
    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneFlecheZoom2, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 6) //tip top
      .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step/2
    })
    .setTween([$sceneBullet, $sceneTitle, $sceneText], {
        autoAlpha: 0,
        ease: Power0.easeNone
    })
    .offset(step * 6) //tip top
    .on("start end", function (e) {
        if (e.type == "end") {
            if (e.target.controller().info("scrollDirection") === "REVERSE") {
                //mainTl.set($sceneTextBullet, { scale: 0 });
                $sceneBullet.text("1");
                $sceneTitle.text(" – Mon titre numéro 1");
            } else {
                //mainTl.set($sceneTextBullet, { scale: 0.5 });
                $sceneBullet.text("2");
                $sceneTitle.text(" – Mon titre numéro 2");
            }
        }
    })
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step/2
    })
        .setTween([$sceneBullet, $sceneTitle, $sceneText], {
            autoAlpha: 1,
            ease: Power0.easeNone
        })
        .offset(step * 6.5) //tip top
        .addTo(controller);







    //STEP 3
    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneFlecheZoom3, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 7) //tip top
      .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step / 2
    })
        .setTween([$sceneBullet, $sceneTitle, $sceneText], {
            autoAlpha: 0,
            ease: Power0.easeNone
        })
        .offset(step * 7) //tip top
        .on("start end", function (e) {
            if (e.type == "end") {
                if (e.target.controller().info("scrollDirection") === "REVERSE") {
                    //mainTl.set($sceneTextBullet, { scale: 0 });
                    $sceneBullet.text("2");
                    $sceneTitle.text(" – Mon titre numéro 2");
                } else {
                    //mainTl.set($sceneTextBullet, { scale: 0.5 });
                    $sceneBullet.text("3");
                    $sceneTitle.text(" – Mon titre numéro 3");
                }
            }
        })
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step / 2
    })
        .setTween([$sceneBullet, $sceneTitle, $sceneText], {
            autoAlpha: 1,
            ease: Power0.easeNone
        })
        .offset(step * 7.5) //tip top
        .addTo(controller);




    //------------------------------------------------------------------------------------------------------------//
    //--DEZOOM
    //------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step
    })
        .setTween([$sceneFlecheZoom1, $sceneFlecheZoom2, $sceneFlecheZoom3, $sceneFlecheZoom4, $sceneFlecheZoom5], { autoAlpha: 0, ease: Power0.easeNone })
        .offset(step * 8) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step * 3
    })
        .setTween($sceneLand, { scale: 1, xPercent: 0, yPercent: 0, ease: Power0.easeNone })
        .offset(step * 9) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene-map",
      triggerHook: 0,
      duration: step * 3
    })
      .setTween([$sceneBullet, $sceneTitle, $sceneText], {
        autoAlpha: 0,
        ease: Power0.easeNone
      })
      .offset(step * 9) //tip top
        .on("start end", function (e) {
            if (e.type == "end") {
                if (e.target.controller().info("scrollDirection") === "REVERSE") {
                    //mainTl.set($sceneTextBullet, { scale: 0 });
                    $sceneBullet.text("3");
                    $sceneTitle.text(" – Mon titre numéro 3");
                } else {
                    //mainTl.set($sceneTextBullet, { scale: 0.5 });
                    $sceneBullet.text("");
                    $sceneTitle.text("Toutes les gyres du monde");
                }
            }
        })
      .addTo(controller);








    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step 
    })
        .setTween($sceneGyre1, { autoAlpha: 1, ease: Power0.easeNone })
        .offset(step * 12) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step
    })
        .setTween($sceneEquateur, { autoAlpha: 1, ease: Power0.easeNone })
        .offset(step * 13) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step
    })
        .setTween([$sceneGyre2, $sceneGyre3, $sceneGyre4, $sceneGyre5], { autoAlpha: 1, ease: Power0.easeNone })
        .offset(step * 14) //tip top
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.scene-map",
        triggerHook: 0,
        duration: step * 3
    })
        .setTween([$sceneBullet, $sceneTitle, $sceneText], {
            autoAlpha: 1,
            ease: Power0.easeNone
        })
        .offset(step * 14) //tip top
        .addTo(controller);
});