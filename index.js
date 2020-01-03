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
    "vn": "Tôi lập trình từ năm 15 tuổi, với chuyên môn là "
  },
  "#webdev": {
    "en": "Web Development",
    "es": "",
    "vn": "Lập trình Web",
  },
  "#project-list-title > span:first-child": {
    "en": "Some of my ",
    "es": "",
    "vn": "Một vài ",
  },
  "#projects-wd": {
    "en": "projects",
    "es": "",
    "vn": "projects của tôi",
  },
  "#view-more-github": {
    "en": "View more at Github",
    "es": "",
    "vn": "Xem thêm ở Github",
  },
  "#star-war-search-engine > div > a": {
    "en": "See website >",
    "es": "",
    "vn": "Xem website >",
  },
  "#smart-brain > div > a": {
    "en": "See website >",
    "es": "",
    "vn": "Xem website >",
  },
  "#note-finding-practice > div > a": {
    "en": "See demo >",
    "es": "",
    "vn": "Xem demo >",
  },
  "#habit-tracker > div > a": {
    "en": "Download file >",
    "es": "",
    "vn": "Tải file >",
  },
  "coding-page" : {
    "#project-desc": {
      "note-finding-practice": {
        "en": "A game that helps you practice finding notes on the guitar. You have to find the note that match the description (ex: Fret 8 A string) and click the corresponding button (ex: C#). There's a time limit.",
        "es": "",
        "vn": "Một game giúp bạn tập tìm notes trên guitar. Bạn phải tìm note phù hợp với miêu tả (ví dụ: Ngăn 8 dây A) và click vào nút tương ứng. Có giới hạn thời gian.",
      },
      "smart-brain": {
        "en": "Insert an image URL (link) and the website will use the power of Artificial Intelligence to recognize faces in the image. Build upon the <a id='desc-link' href='https://www.clarifai.com/' target='_blank'>Clarifai's API.</a>",
        "es": "",
        "vn": "Từ một URL (link) hình ảnh bạn chọn, website này sẽ dùng sức mạnh của Trí tuệ Nhân tạo để nhận diện những khuôn mặt trong hình. Xây dựng trên <a id='desc-link' href='https://www.clarifai.com/' target='_blank'>Clarifai's API.</a>",
      },
      "star-war-search-engine": {
        "en": "On this website you can search for Star Wars related stuff such as movies, characters, starships and so on. You can search by name, and narrow down your search using the categories. Built upon the <a id='desc-link' href='https://swapi.co/' target='_blank'>SWAPI</a> of Paul Hallett.",
        "es": "",
        "vn": "Trên website này bạn có thể tìm kiếm bất cứ nội dung nào liên quan đến Star Wars, như phim, nhân vật, tàu vũ trụ,... Bạn có thể tìm kiếm bằng tên, và thu hẹp khoảng tìm kiếm bằng các danh mục. Xây dựng trên <a id='desc-link' href='https://swapi.co/' target='_blank'>SWAPI</a> của Paul Hallett.",
      },
      "habit-tracker": {
        "en": "An Excel Workbook turned Habit Tracker App with VBA. You can add the habits you want to track and rate the level of completion of each habit everyday on the scale of 5. You can see how well you are completing your tasks with the interactive graphs at the bottom.",
        "es": "",
        "vn": "Một ứng dụng theo dõi thói quen dựa trên 1 Excel Workbook và chạy bằng VBA. Bạn có thể thêm những thói quen muốn theo dõi và đánh giá mức độ hoàn thành của mỗi thói quen hằng ngày trên thang điểm 5. Bạn có thể theo dõi tình trạng thực hiện thói quen của mình bằng những biểu đồ ở phía dưới. ",
      },
    },
    "#written-in": {
      "note-finding-practice": {
        "en": "Written in Python. <br><span class='code-green'>To run the program click 'Run' on the top of the demo page.</span>",
        "es": "",
        "vn": "Được viết bằng Python. <br><span class='code-green'>Để chạy chương trình, nhấn nút 'Run' ở đầu trang demo.</span>",
      },
      "smart-brain": {
        "en": "Built with ReactJS.<br> <span class='code-green'>To use the website, register with any combination of name, email and password (doesn't need to be true).</span>",
        "es": "",
        "vn": "Xây dựng trên thư viện ReactJS.<br> <span class='code-green'>Để sử dụng website, đăng ký (register) với bất kì tổ hợp tên, email và mật khẩu nào (không cần có thật).",
      },
      "star-war-search-engine": {
        "en": "Built with ReactJS.",
        "es": "",
        "vn": "Xây dựng trên thư viện ReactJS",
      },
      "habit-tracker": {
        "en": "Built on Excel with VBA. <br> <span class='code-green'>The file can only be used with Microsoft Excel. Make sure you click 'Enable macro' when prompted upon opening the file.</span>",
        "es": "",
        "vn": "Xây dựng trên Excel với VBA. <br> <span class='code-green'>File chỉ có thể chạt bằng Microsoft Excel. Hãy nhấn 'Cho phép macro/Enable Macro' khi được hỏi khi mở file</span>",
      }
    },
    "#project-name": {
      "note-finding-practice": {
        "en": "Note Finding Practice",
        "es": "",
        "vn": "Tập tìm Note",
      },
      "smart-brain": {
        "en": "Face Recognition App",
        "es": "",
        "vn": "Ứng dụng nhận diện khuôn mặt",
      },
      "star-war-search-engine": {
        "en": "Star Wars Search Engine",
        "es": "",
        "vn": "Công cụ tìm kiếm Star Wars",
      },
      "habit-tracker": {
        "en": "Habit Tracker",
        "es": "",
        "vn": "Theo dõi thói quen",
      }
    },
    "#demo-button > div" : {
      "note-finding-practice": {
        "en": "Go to demo",
        "es": "",
        "vn": "Đi tới demo",
      },
      "smart-brain": {
        "en": "Go to website",
        "es": "",
        "vn": "Đi tới website",
      },
      "star-war-search-engine": {
        "en": "Go to website",
        "es": "",
        "vn": "Đi tới website",
      },
      "habit-tracker": {
        "en": "Download file",
        "es": "",
        "vn": "Tải file",
      }
    },
  },
  "#music-title": {
    "en": "...And music",
    "es": "",
    "vn": "...và Âm nhạc",
  },
  "#music-subtitle": {
    "en": "I play electric and acoustic guitar.",
    "es": "",
    "vn": "Tôi chơi guitar điện và guitar thùng.",
  },
  "#covers-title": {
    "en": "Here are some song covers I have done.",
    "es": "",
    "vn": "Đây là một số bài covers tôi đã làm.",
  },
  "#fixyou-detail": {
    "en": "Recreated with electric, acoustic guitar, and keyboard. Mix and master on Audacity.",
    "es": "",
    "vn": "Chơi bằng guitar điện, guitar thùng, và đàn organ. Mix và master bằng Audacity.",
  },
  "#autumn-detail": {
    "en": "A cover of the solo in Eric Clapton's rendition of the song Autumn Leaves.",
    "es": "",
    "vn": "Một guitar solo cover từ phiên bản Autumn Leaves của Eric Clapton.",
  },
  "#other-title": {
    "en": "My other activities",
    "es": "",
    "vn": "Những hoạt động khác",
  },
  "#uxvn > div > span": {
    "en": "Translator",
    "es": "",
    "vn": "Phiên dịch",
  },
  "#uxvn > div > p": {
    "en": "I translated a research paper into Vietnamese for UXVN - an community dedicated to helping Vietnam's User Experience Designers. Translated material will help aspiring UX designers in Vietnam who find it hard to go through English academic material advance their knowledge in the field.",
    "es": "",
    "vn": "Tôi dịch một nghiên cứu sang tiếng Việt cho UXVN - một cộng đồng với mục tiêu giúp đỡ những người thiết kế trải nghiệm người dùng (UX designers) ở Việt Nam. Tài liệu được dịch sẽ giúp UX designers ở Việt Nam gặp khó khăn với những tài liệu học thuật tiếng Anh nâng cao kiến thức trong ngành.",
  },
  "#uxvn > div > p > a > span" : {
    "en": "Here's the document.",
    "es": "",
    "vn": "Đây là tài liệu đó.",
  },
  "#ted > div > span": {
    "en": "Content Writer",
    "es": "",
    "vn": "Viết bài",
  },
  "#ted > div > p": {
    "en": "I wrote argumentative essays about various topics in TED presentations, which were posted on my school's TED-Ed Facebook Page to promote the club to other students. They have received more than 50 reactions and prompted many students to join the club and deepen their critical thinking and English skills.",
    "es": "",
    "vn": "Tôi viết những bài luận về nhiều chủ đề trong các bài thuyết trình TED. Những bài luận được đăng trên trang Facebook của CLB TED-ed của trường để quảng bá CLB đến những học sinh khác. Chúng đã nhận được hơn 50 lượt phản ứng và đưa nhiều học sinh tham gia CLB để nâng cao khả năng lập luận và tiếng Anh.",
  },
  "#ted > div > p > a > span" : {
    "en": "Here's one of my posts.",
    "es": "",
    "vn": "Đây là một trong những bài post của tôi.",
  },
  "#esp > div > span": {
    "en": "Spanish",
    "es": "",
    "vn": "Tiếng Tây Ban Nha",
  },
  "#esp > div > p": {
    "en": "I have studied Spanish for 2 years. Outside language center, I learn through music, YouTube videos, and news articles. I have written several short stories to memorise the vocabulary and grammar I have learnt.",
    "es": "",
    "vn": "Tôi đã học tiếng Tây Ban Nha 2 năm. Bên ngoài trung tâm ngôn ngữ, tôi còn học qua âm nhạc, video YouTube, và những bài báo. Tôi đã viết vài truyện ngắn để ghi nhớ những từ vựng và ngữ pháp tôi đã học.",
  },
  "#esp > div > p > a > span" : {
    "en": "Here's one of my short stories.",
    "es": "",
    "vn": "Đây là một trong những truyện ngắn của tôi.",
  },
  "#ibin >div > h5": {
    "en": "iBin",
    "es": "",
    "vn": "iBin",
  },
  "#ibin >div > p": {
    "en": "I made a working cardboard prototype of a smart trashcan for a Science project",
    "es": "",
    "vn": "Tôi đã chế tạo một nguyên mẫu hoạt động được bằng cardboard cho một thùng rác thông minh cho một dự án khoa học",
  },
  "#football >div > h5": {
    "en": "Football",
    "es": "",
    "vn": "Bóng đá",
  },
  "#football >div > p": {
    "en": "I was the captain of my class's team in the school's football competition.  (I'm No.4)",
    "es": "",
    "vn": "Tôi là đội trưởng của đội bóng lớp trong giải bóng đá trường (tôi mang áo số 4)",
  },
  "#act > div > h5": {
    "en": "Acting",
    "es": "",
    "vn": "Diễn xuất",
  },
  "#act > div > p": {
    "en": "This was me acting as the Price in my team enactment of 'Cinderella'",
    "es": "",
    "vn": "Đây là tôi đóng vai Hoàng Tử trong vở kịch 'Cinderella' của nhóm",
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

var currentLang = 'en';

const language = (lang) => {
  currentLang = lang;
  for (var key in content) {
    const elem = content[key];
    if (content.hasOwnProperty(key)) {
      if (key !== "coding-page") {
        $(key).text(elem[lang]);
      } else {
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
        $("#project-desc").html(content["coding-page"]["#project-desc"][id][currentLang]);
        $("#project-name").html(content["coding-page"]["#project-name"][id][currentLang]);
        $("#written-in").html(content["coding-page"]["#written-in"][id][currentLang]);
        $("#demo-button").attr("href",links[id]["web"]);
        $("#project-video").attr("src",links[id]["youtube"]);
        $(".project").each(i => {
          var elem = $(".project")[i];
          if (elem.id !==id) {
            elem.className ="project project-inactive";
          } else {
            elem.className ="project project-active";
          }
        });
        $("#demo-button > div").html(content['coding-page']['#demo-button > div'][$('.project-active')[0].id][currentLang]);
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
