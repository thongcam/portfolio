var teleoffset = $("#fulltele").offset().top;

const content = {
  "#pretitle" : {
    "en": "Hi, I'm ",
    "es": "Hola, soy ",
    "vn": "Chào, tôi là ",
  },
  "#code-title": {
    "en": "I love ",
    "es": "Me amo ",
    "vn": "Tôi đam mê ",
  },
  "#coding": {
    "en": "coding...",
    "es": "...",
    "vn": "lập trình..."
  },
  "#code-subtitle": {
    "en": "I have been coding since 15, with a focus on ",
    "es": "",
    "vn": ""
  },
  "#webdev": {
    "en": "Web Development",
    "es": "",
    "vn": "",
  },
  "#project-list-title": {
    "en": "Some of my ",
    "es": "",
    "vn": "",
  },
  "#projects-wd": {
    "en": "projects",
    "es": "",
    "vn": "",
  },
  "#website": {
    "en": "See website >",
    "es": "",
    "vn": "",
  },
  "#demo": {
    "en": "See demo >",
    "es": "",
    "vn": "",
  },
  "#view-more-github": {
    "en": "View more at Github",
    "es": "",
    "vn": "",
  },
  "#project-desc": {
    "note-finding-practice": {
      "en": "A game that helps you practice finding notes on the guitar. You have to find the note that match the description (ex: Fret 8 A string) and click the corresponding button (ex: C#). There's a time limit.",
      "es": "",
      "vn": "",
    },
    "smart-brain": {
      "en": "Insert an image URL (link) and the website will use the power of Artificial Intelligence to recognize faces in the image. To use the site, register with any combination of name, email and password (do not need to be real). Built upon <a id='desc-link'>Clatifai's API</a>.",
      "es": "",
      "vn": "",
    },
    "star-war-search-engine": {
      "en": "On this website you can search for Star Wars related stuff such as movies, characters, starships and so on. You can search by name, and narrow down your search using the categories. Built upon the <a id='desc-link'>SWAPI</a> of Paul Hallett.",
      "es": "",
      "vn": "",
    },
    "this-website": {
      "en": "A little website I made to help people know me better.",
      "es": "",
      "vn": "",
    },
  },
  "#written-in": {
    "note-finding-practice": {
      "en": "Written in Python. <br><span class='code-green'>To run the program click 'Run' on the top of the demo page.</span>",
      "es": "",
      "vn": "",
    },
    "smart-brain": {
      "en": "Built with ReactJS.<br> <span class='code-green'>To use the website, register with any combination of name, email and password (doesn't need to be true).</span>",
      "es": "",
      "vn": "",
    },
    "star-war-search-engine": {
      "en": "Built with ReactJS.",
      "es": "",
      "vn": "",
    },
    "this-website": {
      "en": "Built with JQuery and Bootstrap4.",
      "es": "",
      "vn": "",
    }
  },
  "#project-name": {
    "note-finding-practice": {
      "en": "Note Finding Practice",
      "es": "",
      "vn": "",
    },
    "smart-brain": {
      "en": "Face Recognition App",
      "es": "",
      "vn": "",
    },
    "star-war-search-engine": {
      "en": "Star Wars Search Engine",
      "es": "",
      "vn": "",
    },
    "this-website": {
      "en": "Portfolio Site",
      "es": "",
      "vn": "",
    }
  },
  "#demo-button": {
    "en": "Go to website",
    "es": "",
    "vn": "",
  },
  "#music-title": {
    "en": "...And music",
    "es": "",
    "vn": "",
  },
  "#music-subtitle": {
    "en": "I play electric and acoustic guitar.",
    "es": "",
    "vn": "",
  },
  "#covers-title": {
    "en": "Here are some song covers I have done.",
    "es": "",
    "vn": "",
  },
  "#fixyou-detail": {
    "en": "Recreated with electric, acoustic guitar, and keyboard. Mix and master on Audacity.",
    "es": "",
    "vn": "",
  },
  "#autumn-detail": {
    "en": "A cover of the solo in Eric Clapton's rendition of the song Autumn Leaves.",
    "es": "",
    "vn": "",
  },
  "#other-title": {
    "en": "My other activities",
    "es": "",
    "vn": "",
  },
  "#uxvn > div > span": {
    "en": "Translator",
    "es": "",
    "vn": "",
  },
  "#uxvn > div > p": {
    "en": "I translated a research paper into Vietnamese for UXVN - an community dedicated to helping Vietnam's User Experience Designer. Translated material will help aspiring UX designers in Vietnam who find it hard to go through English academic material advance their knowledge in the field.",
    "es": "",
    "vn": "",
  },
  "#uxvn > div > p > a > span" : {
    "en": "Here's the document.",
    "es": "",
    "vn": "",
  },
  "#ted > div > span": {
    "en": "Content Writer",
    "es": "",
    "vn": "",
  },
  "#ted > div > p": {
    "en": "I wrote argumentative essays about various topics in TED presentations, which were posted on my school's TED-Ed Facebook Page to promote the club to other students. They have received more than 50 reactions and prompted many students to join the club and deepen their critical thinking and English skills.",
    "es": "",
    "vn": "",
  },
  "#ted > div > p > a > span" : {
    "en": "Here's one of my posts.",
    "es": "",
    "vn": "",
  },
  "#esp > div > span": {
    "en": "Spanish",
    "es": "",
    "vn": "",
  },
  "#esp > div > p": {
    "en": "I have studied Spanish for 2 years. Outside language center, I learn through music, YouTube videos, and new articles. I have written several short stories to memorise the vocabulary and grammar I have learnt.",
    "es": "",
    "vn": "",
  },
  "#esp > div > p > a > span" : {
    "en": "Here's one of my short stories.",
    "es": "",
    "vn": "",
  },
  "#ibin >div > h5": {
    "en": "iBin",
    "es": "",
    "vn": "",
  },
  "#ibin >div > p": {
    "en": "I made a working cardboard prototype of a smart trashcan for a Science project",
    "es": "",
    "vn": "",
  },
  "#football >div > h5": {
    "en": "Football",
    "es": "",
    "vn": "",
  },
  "#football >div > p": {
    "en": "I was the captain of my class's team in the school's football competition.  (I'm No.4)",
    "es": "",
    "vn": "",
  },
  "#act > div > h5": {
    "en": "Acting",
    "es": "",
    "vn": "",
  },
  "#act > div > p": {
    "en": "This was me acting as the Price in my team enactment of 'Cinderella'",
    "es": "",
    "vn": "",
  },
}

const links =
{
  "note-finding-practice": {
    "web": "https://repl.it/@ThngDuyDuy/note-finding-practice",
    "youtube": "https://www.youtube.com/embed/7b3TFWmCQfc?autoplay=1&loop=1",
  },
  "smart-brain":
  {
    "web": "https://smart-brain-thong.herokuapp.com/",
    "youtube": "https://www.youtube.com/embed/fd0dlPm1MAg?autoplay=1&loop=1",
  },
  "star-war-search-engine":
  {
    "web": "https://thongcam.github.io/star-war-search-engine/",
    "youtube": "https://www.youtube.com/embed/3I1NWXlmc0s?autoplay=1&loop=1",
  },
  "this-website": {
    "web": "#",
    "youtube": "https://www.youtube.com/embed/u9b1tIlgT64?autoplay=1&loop=1",
  },
}

$(document).ready(() => {
  $(".project").each((i) => {
    var project = $(".project")[i];
    console.log(project);
    project.addEventListener("click",(event) => {
      console.log($(event.currentTarget).attr("class"));
      if ($(event.currentTarget).hasClass("project-inactive")) {
        var id = $(event.currentTarget).attr("id");
        $("#project-desc").html(content["#project-desc"][id][$("#dropdownMenuLink > img").attr("id")]);
        $("#project-name").html(content["#project-name"][id][$("#dropdownMenuLink > img").attr("id")]);
        $("#written-in").html(content["#written-in"][id][$("#dropdownMenuLink > img").attr("id")]);
        $("#demo-button").attr("href",links[id]["web"]);
        $("#project-video").attr("src",links[id]["youtube"]);
        $(".project").each(i => {
          var elem = $(".project")[i];
          if (elem.id !==id) {
            elem.className ="project project-inactive";
          } else {
            elem.className ="project project-active";
          }
        })
      }
    })
  })
});


$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#tele').css('bottom',(0-(scrolled*.25))+'px');
    $('#code').css('top',(0-(scrolled*.25))+'px');
    $('#fulltele').css('top',(0-(teleoffset-scrolled)*.25)+'px');
}
