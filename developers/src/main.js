let lang = "ko";

window.addEventListener("load", function () {
    init();
});

function init() {
    let splits = window.location.href.split("#");
    if (splits.length==1) {
        splits[1] = "introduction"
    }
    let url = splits[0] + "developers/v3/" + splits[1];

    let current = document.querySelector("nav a[href$='"+ splits[1]+"']");
    current.classList.add("active");

    fetchText(url);
    document.querySelector("#en").addEventListener("click", () => {
        lang = "en";
        document.querySelectorAll('[lang="en"]').forEach((element) => (element.style.display = "revert"));
        document.querySelectorAll('[lang="ko"]').forEach((element) => (element.style.display = "none"));
    });

    document.querySelector("#ko").addEventListener("click", () => {
        lang = "ko";
        document.querySelectorAll('[lang="ko"]').forEach((element) => (element.style.display = "revert"));
        document.querySelectorAll('[lang="en"]').forEach((element) => (element.style.display = "none"));
    });

    const li = document.querySelectorAll("nav li a");
    li.forEach((item) => {
        item.addEventListener("click", function (e) {
            // alert('click');
            // e.preventDefault();

            let current = document.querySelector("main nav li a.active");
            current.className = current.className.replace("active", "");
            e.target.className += "active";
            console.log(window.location.hash);
            let splits = e.target.href.split("#");
            let url = splits[0] + "developers/v3/" + splits[1];
        
            fetchText(url);
        });
    });
}

function fetchText(url) {
    fetch(url+".html")
        .then((response) => response.text())
        .then((data) => {
            // console.log(data);
            document.querySelector("article").innerHTML = data;
        })
        .then(() => {
            if (lang === "en") {
                document.querySelectorAll('[lang="en"]').forEach((element) => (element.style.display = "revert"));
                document.querySelectorAll('[lang="ko"]').forEach((element) => (element.style.display = "none"));
            }
            let codeElement = document.querySelectorAll("code");
            if (!codeElement) return;
            codeElement.forEach((data) => {
                // console.log(data.innerHTML);
                let text = data.innerHTML;
                let text1 = text.replace(/[<>]/g, "<span>$&</span>");
                // console.log(text1);
                // "([^"]*)"
                let text2 = text1.replace(/['"]([^'"]*)["']/g, "<span class='value'>$&</span>");
                // console.log(text2);
                let text3 = text2.replace(
                    / var | if | return| let | const | function | new | window| document| for /g,
                    "<span class='reserved'>$&</span>",
                );
                // console.log(text3)
                let text4 = text3.replace(/[{}\(\)]/g, "<span class='special'>$&</span>");
                let text5 = text4.replace(/\/\/.+/g, "<span class='comment'>$&</span>");
                data.innerHTML = text5;
            });
        });
}
