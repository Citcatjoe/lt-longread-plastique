jQuery(document).ready(function($){function e(){var e=new ScrollMagic.Controller,o=$(".header__content__container__box"),a=new ScrollMagic.Scene({triggerHook:"onEnter",duration:1e3,offset:0}).setTween(o,{autoAlpha:0,yPercent:"-50%",ease:Power0.easeInOut,clearProps:"all"}).addTo(e),r=new ScrollMagic.Controller,a=new ScrollMagic.Scene({triggerHook:"onEnter",duration:500,offset:0}).setTween(u,{yPercent:"105",ease:Power0.easeInOut}).addTo(r)}var o;$(window).width()>1200?($hVideoWrapperTiming="+=5.0",o="+=1.0"):($hVideoWrapperTiming="+=0.1",o="+=0.1");var a=!1,r=$("header .video-wrapper"),t=$(".overlay"),n=$(".overlay .logo-lt-blanc, .overlay .logo-sponsor"),l=$(".spinner"),s=$(".header__bg"),c=$("header h1"),i=$("h2"),u=$(".scroll-indicator"),d;d=new TimelineMax({paused:!1}),d.set([u],{yPercent:"105"}).set([c,i],{autoAlpha:0}).set([s],{scale:1.05}).to([l,n],.7,{autoAlpha:0,ease:Power4.easeOut},"+=1.5").to(t,1.5,{autoAlpha:0,ease:Linear.easeNone},"-=0.0").to(s,10,{scale:1,ease:Power4.easeOut,y:0},"-=1.5").to([c],0,{autoAlpha:1,yPercent:"0",ease:Power4.easeOut},"-=7.0").to(i,0,{autoAlpha:1,ease:Power4.easeOut},"-=6").to(u,1,{yPercent:"2",ease:Power4.easeOut,onComplete:e},"-=4.0")});