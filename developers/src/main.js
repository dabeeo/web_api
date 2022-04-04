// import a from './a.js';

fetch("v3/introduction.html")
    .then((response) => response.text())
    .then((data) => {
        // console.log(data);
        document.querySelector("article").innerHTML = data;
    });

const li = document.querySelectorAll("nav li a");
li.forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        let current = document.querySelector("main nav li a.active");
        current.className = current.className.replace("active", "");
        e.target.className += "active";
        fetch(e.target.href)
            .then((response) => response.text())
            .then((data) => {
                // console.log(data);
                document.querySelector("article").innerHTML = data;
            })
            .then(() => {
                let codeElement = document.querySelectorAll("code");
                if (!codeElement) return;
                codeElement.forEach((data) => {
                console.log(data.innerHTML);
                let text = data.innerHTML;
                let text1 = text.replace(/[<>]/g, "<span>$&</span>");
                console.log(text1);
                // "([^"]*)"
                let text2 = text1.replace(/['"]([^'"]*)["']/g, "<span class='value'>$&</span>");
                console.log(text2);
                let text3 = text2.replace(/ var | if | return| let | const | function | new | window| document/g, "<span class='reserved'>$&</span>");
                console.log(text3)
                data.innerHTML = text3;
                })
            });
    });
});
