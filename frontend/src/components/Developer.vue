<template>
<div id="developer">
    <img id="dev-logo" src="../assets/logo.png"/>
    <div id="devs">
        <div class="dev-info">
            <figure><img class="dev-pic" src="https://avatars1.githubusercontent.com/u/22026074?s=460&v=4"/></figure>
            <p class="dev-name">Grace</p>
            <p class="dev-pos">Software Engineer</p>
            <p class="dev-email">haeungun@gmail.com</p>

            <div class="dev-icons">
                <a href="https://www.facebook.com/hekim93"><img src="../assets/fb.png"/></a>
                <a href="https://github.com/haeungun"><img src="../assets/gh.png"/></a>
                <a href="https://www.linkedin.com/in/haeun-kim-659783135/"><img src="../assets/li.png"/></a>
            </div>
        </div>

        <div class="dev-info">
            <figure><img class="dev-pic" src="https://avatars1.githubusercontent.com/u/5110323?s=460&v=4"/></figure>
            <p class="dev-name">Denny</p>
            <p class="dev-pos">Software Engineer</p>
            <p class="dev-email">donghee.na92@gmail.com</p>

            <div class="dev-icons">
                <a href="https://www.facebook.com/donghee.na"><img src="../assets/fb.png"/></a>
                <a href="https://github.com/corona10"><img src="../assets/gh.png"/></a>
                <a href="https://www.linkedin.com/in/dong-hee-na-2b713b49/"><img src="../assets/li.png"/></a>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";
div#developer {
    height: 100vh;
    padding-top: 60px; 
    padding-bottom: 10px;
    overflow: auto;
    text-align: center;
}
div.dev-info {
    width: 230px;
    height: 330px;
    background-color: white;
    border-radius: 10px;
    padding-top: 40px;
    transition: .5s;
}
div.dev-info:hover {
    box-shadow: 2px 2px 4px #686868;
}
div.dev-info > figure {
    width: 110px;
    height: 110px;
    background-color: $primaryColor;
    border-radius: 100%;
    overflow: hidden;
    display: block;
    margin: auto;
}
div.dev-info > figure img {
    width: 110px;
	-webkit-transform: scale(1);
	transform: scale(1);
}
p.dev-name {
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 20px;
}
p.dev-email {
    color: $secondaryColor;
    font-size: .8em;
    margin-top: 10px;
}
div.dev-icons {
    width: 150px;
    margin: auto;
    margin-top: 20px;
}
div.dev-icons img {
    width: 30px;
    height: 30px;
    margin-right: 25px;
}
div.dev-icons img:hover {
    cursor: pointer;
}
div.dev-icons a:last-child {
    img {
        margin-right: 0;
    }
}
@media only screen and (min-width: 768px) {
    img#dev-logo {
        width: 300px;
        margin-top: 40px;
    }
    div#devs {
        width: calc(470px + 3vw);
        margin: auto;
        margin-top: 30px;
    }
    div#devs > div {
        float: left;
    }
    div.dev-info {
        margin-right: 3vw;
    }
    div.dev-info:last-child {
        margin: 0;
    }
}
@media only screen and (max-width: 768px) {
    img#dev-logo {
        width: 300px;
        margin-top: 10px;
    }
    div#devs {
        margin-top: 15px;
    }
    div.dev-info {
        margin: auto;
        margin-bottom: 20px;
    }
}
</style>
