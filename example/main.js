window.addEventListener("load", function () {
    init();
});

function init() {
    document.querySelector(".hamburger").addEventListener("click", function (e) {
        document.querySelector("nav").classList.toggle("on");
    });

    let list = document.querySelectorAll("nav a");
    let selectOption = window.location.href.split("#")[1];
    if (!selectOption) selectOption = "index";
    document.querySelector("iframe").src="../samples/"+selectOption+".html";
    document.querySelector(".code").href = "https://github.com/dabeeo/web_api/blob/master/samples/" + selectOption+".html";
    let current = document.querySelector("nav a[href$='"+ selectOption+"']");
    current.classList.add("on");
    // console.log(current);

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function (e) {
            let fileName = e.target.href.split("#")[1] + ".html";
            let filePath = "../samples/" + fileName;
            // console.log(filePath);
            document.querySelector("iframe").src = filePath;
            let current = document.querySelector("nav a.on");
            current.className = current.className.replace("on", "");
            e.target.classList.add("on");
            document.querySelector(".code").href = "https://github.com/dabeeo/web_api/blob/master/samples/" + fileName;
            // fetch("../docs/README.md")
            //     .then((response) => response.text())
            //     .then(func_a);
        });
    }
}
function func_a(data) {
    let lines = [];
    let outlines = [];
    lines = data.split("\n");
    for (let i = 0; i < lines.length; i++) {
        outline = lines[i] + "<br>";
        if (lines[i].startsWith("####")) {
            outline = "<h4>" + lines[i].replace("####", "") + "</h4>";
        } else if (lines[i].startsWith("###")) {
            outline = "<h3>" + lines[i].replace("###", "") + "</h3>";
        } else if (lines[i].startsWith("##")) {
            outline = "<h2>" + lines[i].replace("##", "") + "</h2>";
        } else if (lines[i].startsWith("#")) {
            outline = "<h1>" + lines[i].replace("#", "") + "</h1>";
        }
        outlines.push(outline);
    }
    document.querySelector(".md").innerHTML = outlines.join(" ");
}
