
fetch("./developers/v3/introduction.html")
    .then((response) => response.text())
    .then((data) => {
        // console.log(data);
        document.querySelector("article").innerHTML = data;
    });
document.querySelector('#en').addEventListener("click", ()=> {
    document.querySelectorAll('[lang="en"]').forEach(element=>element.style.display="revert");
    document.querySelectorAll('[lang="ko"]').forEach(element=>element.style.display="none");
}) 

document.querySelector('#ko').addEventListener("click", ()=> {
    document.querySelectorAll('[lang="ko"]').forEach(element=>element.style.display="revert");
    document.querySelectorAll('[lang="en"]').forEach(element=>element.style.display="none");
}) 

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
                // console.log(data.innerHTML);
                let text = data.innerHTML;
                let text1 = text.replace(/[<>]/g, "<span>$&</span>");
                // console.log(text1);
                // "([^"]*)"
                let text2 = text1.replace(/['"]([^'"]*)["']/g, "<span class='value'>$&</span>");
                // console.log(text2);
                let text3 = text2.replace(/ var | if | return| let | const | function | new | window| document| for /g, "<span class='reserved'>$&</span>");
                // console.log(text3)
                let text4 = text3.replace(/[{}\(\)]/g, "<span class='special'>$&</span>");
                let text5 = text4.replace(/\/\/.+/g, "<span class='comment'>$&</span>")
                data.innerHTML = text5;
                })
            });
    });
});
