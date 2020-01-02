var teleoffset = $("#fulltele").offset().top;

const content = {
  "#pretitle > span:first-child" : {
    "en": "Hi, I'm ",
    "es": "Hola, soy ",
    "vn": "Chào, tôi là ",
  },
  "#code-title > span:first-child": {
    "en": "I love ",
    "es": "Me amo ",
    "vn": "Tôi đam mê ",
  },
  "#coding": {
    "en": "coding...",
    "es": "...",
    "vn": "lập trình..."
  },
  "#code-subtitle  > span:first-child": {
    "en": "I have been coding since 15, with a focus on ",
    "es": "",
    "vn": ""
  },
  "#webdev": {
    "en": "Web Development",
    "es": "",
    "vn": "",
  },
  "#project-list-title > span:first-child": {
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
  "coding-page" : {
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
      "habit-tracker": {
        "en": "An Excel Workbook turned Habit Tracker App with VBA. You can add the habits you want to track and rate the level of completion of each task everyday on the scale of 5. You can see how well you are completing your tasks with the interactive graphs at the bottom.",
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
      "habit-tracker": {
        "en": "Built with JQuery and Bootstrap4. <br> <span class='code-green'>The file can only be used with Microsoft Excel. Make sure you click 'Enable macro' when promted upon opening the file.</span>",
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
      "habit-tracker": {
        "en": "Portfolio Site",
        "es": "",
        "vn": "",
      }
    }
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
    "habit-tracker": {
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
    "habit-tracker": {
      "en": "Built with Excel VBA.",
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
    "habit-tracker": {
      "en": "Excel Habit Tracker",
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
  "habit-tracker": {
    "web": "https://drive.google.com/file/d/10XztrVoQt-C5MluSR9IjKs5jHONPdpyQ/view?usp=sharing",
    "youtube": "https://www.youtube.com/embed/HyY_zqTUGkE?autoplay=1&loop=1",
  },
}

const lang = [
  {
    "id": "en",
    "name": "English",
    "img": "./img/first/usflag.png"
  },
  {
    "id": "es",
    "name": "Spanish",
    "img": "./img/first/spain.png"
  },
  {
    "id": "vn",
    "name": "Vietnamese",
    "img": "./img/first/vietnam.png"
  }
];

const vh = $("#first-page").offsetHeight;

const language = (lang) => {
  for (var key in content) {
    const elem = content[key];
    if (content.hasOwnProperty(key)) {
      if (key !== "coding-page") {
        $(key).text(elem[lang]);
      } else {
        console.log(elem);
        for (var k in elem) {
          if (elem.hasOwnProperty(k)) {
              $(k).html(elem[k][$('.project-active')[0].id][lang]);
          }
        }
      }
    }
  }
}


$(document).ready(() => {
  $(".project").each((i) => {
    var project = $(".project")[i];
    project.addEventListener("click",(event) => {
      if ($(event.currentTarget).hasClass("project-inactive")) {
        var id = $(event.currentTarget).attr("id");
        $("#project-desc").html(content["coding-page"]["#project-desc"][id][$("#dropdownMenuLink > img").attr("id")]);
        $("#project-name").html(content["coding-page"]["#project-name"][id][$("#dropdownMenuLink > img").attr("id")]);
        $("#written-in").html(content["coding-page"]["#written-in"][id][$("#dropdownMenuLink > img").attr("id")]);
        $("#demo-button").attr("href",links[id]["web"]);
        $("#project-video").attr("src",links[id]["youtube"]);
        if (id === "note-finding-practice") {
          $("#demo-button > div").html("Go to demo");
        } else if (id === "habit-tracker") {
          $("#demo-button > div").html("Download the file");
        }
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
  $(".dropdown-item").each((i) => {
    const item = $(".dropdown-item")[i];
    item.addEventListener("click", (event) => {
      const lang_id = event.currentTarget.getElementsByTagName("img")[0].id;
      language(lang_id);
      const lang_clone = lang.slice();
      const lang_used = lang.filter(i => i["id"]===lang_id)[0];
      const other_lang = lang.filter(i => i["id"]!==lang_id);
      $("#dropdownMenuLink > img")[0].src = lang_used["img"];
      $("#dropdownMenuLink > span")[0].textContent = lang_used["name"];
      $("#dropdownMenuLink > img")[0].id = lang_used["id"];
      $(".dropdown-item").each(i => {
        $(".dropdown-item")[i].getElementsByTagName("img")[0].src = other_lang[i]["img"];
        $(".dropdown-item")[i].getElementsByTagName("span")[0].textContent = other_lang[i]["name"];
        $(".dropdown-item")[i].getElementsByTagName("img")[0].id = other_lang[i]["id"];
      })
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
    if (Number($('#fulltele').css('top').slice(0,-2))>=0) {
      $('#fulltele').css('top',0)
    }
}
