<template>
  <div id="issues">
    <div v-if="issues.length < 1" id="before">
        <div class="container">
            <div class="loader">
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
                <div class="loader-text"></div>
            </div>
        </div>
    </div>
    <div v-else>
        
        <div id="issue-list">
            <div class="issue" v-for="issue in issues"> 
                <a v-bind:href="issue.url" class="issue-url">   
                    <div>
                        <img class="issue-pic" v-bind:src="issue.pic"/>
                        <div class="issue-info">
                            <p class="issue-repo">{{ issue.repo }}</p>
                            <p class="issue-title">{{ windowWidth < 768 ? issue.title.substring(0, 25) + "..." : issue.title }}</p>
                            <p class="issue-body">{{ windowWidth < 768 ? issue.body.substring(0, 42)+"..." : issue.body.substring(0, 120) + "..." }}</p>
                            
                        </div>
                        <div class="issue-labels"> 
                            <span class="issue-label" v-for="label in issue.labels" v-bind:style="{ 'background-color': '#' + label.color }">
                                {{ label.name }}
                            </span>
                        </div>
                    </div> 
                </a>  
            </div>
        </div>
        <!-- <div class="loading show-loading">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
            </defs>
            </svg>
            <div class="blob blob-0"></div>
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
            <div class="blob blob-4"></div>
            <div class="blob blob-5"></div>
        </div>  -->
    </div>
  </div>
</template>

<script>
import rest from '../service/rest'

let pageNum = 1
let lock = false
let resizeListener = false
let scrollListener = false

export default {
  methods: {
    getIssues: function () {
      console.log(pageNum)
      if (!lock) {
        lock = true
        rest.getIssues(pageNum).then((data) => {
          const iss = data.issues
          if (iss) {
            this.issues.push(...iss)
            pageNum += 1
            lock = false  
          }
        })
      }
    },
    scrollHandler: function () {
      if ((document.body.scrollHeight - window.innerHeight) < window.scrollY * 1.1) {
        this.getIssues()
      }
    },
    resizeHandler: function () {
        this.windowWidth = window.innerWidth
    }
  },
  created () {
    pageNum = 1
    window.scrollTo(0, 0)
  },
  mounted () {
    lock = false
    this.getIssues()
    if (!scrollListener) {
      window.addEventListener('scroll', this.scrollHandler)
      scrollListener = true
    }
    if (!resizeListener) {
      window.addEventListener('resize', this.resizeHandler)
      resizeListener = true
    }
  },
  data () {
    return {
      issues: [],
      windowWidth: window.innerWidth
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
div#before {
    height: 100vh;
    
}
div#issues {
    padding-top: 70px;
    padding-bottom: 40px;
}
div.issue {
    border-radius: 7px;
}
div.issue {
    position: relative;
    background-color: $backgroundColor;
    padding: 10px;
    margin: auto;
    margin-bottom: 10px;
    transition: .3s;
}
div.issue:hover {
    box-shadow: 2px 2px 5px #686868;
    transition: .3s;
}
a.issue-url {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}
div.issue-info {
    position: absolute;
    top: 10px;
    left: 120px;
    padding-right: 10px;
}
img.issue-pic {
    display: block;
    top: 10px;
    left: 10px;
    border-radius: 5px; 
    position: absolute;
}
p.issue-repo {
    font-size: .9em;
}
p.issue-title {
    font-weight: bold;
    font-size: 1em;
}
p.issue-body {
    font-size: .8em;
    word-break: break-all;
}
div.issue-labels {
    position: absolute;
    bottom: 10px;
    left: 120px;
    overflow: auto;
}
span.issue-label {
    color: white;
    display: inline-block;
    font-size: .7em;
    font-weight: bold;
    background-color: $primaryColor;
    border-radius: 3px;
    margin-right: 5px;
    padding-left: 4.5px;
    padding-right: 4.5px;
}
@media only screen and (min-width: 768px) {
    div#issue-list {
        width: 700px;
        margin: auto;
    }
    div.issue {
        width: 100%;
        height: 120px;
    }
    div.issue-info {
        width: 580px;
    }
    img.issue-pic {
        width: 100px;
        height: 100px;
        float: left;
        margin-right: 10px;
    }
    div.hori-line {
        width: 90vw;
        margin: auto;
        border: 3px solid $baseColor;
    }
    a {
        color: $primaryColor;
        text-decoration: none;
    }
    div.issue-list:last-child {
        .hori-line {
            display: none;
        }
    }
}

@media only screen and (max-width: 768px) {
    div#main {
        height: calc(100% + 10px);
        background-color: $baseColor;
    }
    div.issue {
        width: 95vw;
        height: 120px;
        background-color: $backgroundColor;
        padding: 10px;
        margin: auto;
        margin-bottom: 10px;
    }
    img.issue-pic {
        width: 100px;
        height: 100px;
        float: left;
        margin-right: 10px;
    }
    div.hori-line {
        width: 90vw;
        margin: auto;
        border: 3px solid $baseColor;
    }
    a {
        color: $primaryColor;
        text-decoration: none;
    }
}

.container {
  height: 100vh;
  width: 100vw;
  font-family: Helvetica;
}

.loader {
  height: 20px;
  width: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.loader-dot {
  animation-name: loader;
  animation-timing-function: ease-in-out;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  border: 2px solid white;
}
.loader-dot:first-child {
  background-color: #8cc759;
  animation-delay: 0.5s;
}
.loader-dot:nth-child(2) {
  background-color: #8c6daf;
  animation-delay: 0.4s;
}
.loader-dot:nth-child(3) {
  background-color: #ef5d74;
  animation-delay: 0.3s;
}
.loader-dot:nth-child(4) {
  background-color: #f9a74b;
  animation-delay: 0.2s;
}
.loader-dot:nth-child(5) {
  background-color: #60beeb;
  animation-delay: 0.1s;
}
.loader-dot:nth-child(6) {
  background-color: #fbef5a;
  animation-delay: 0s;
}
.loader-text {
  position: absolute;
  top: 200%;
  left: 0;
  right: 0;
  width: 4rem;
  margin: auto;
}
.loader-text:after {
  content: "Loading";
  font-weight: bold;
  animation-name: loading-text;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@keyframes loader {
  15% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(230px);
  }
  65% {
    transform: translateX(230px);
  }
  95% {
    transform: translateX(0);
  }
}
@keyframes loading-text {
  0% {
    content: "Loading";
  }
  25% {
    content: "Loading.";
  }
  50% {
    content: "Loading..";
  }
  75% {
    content: "Loading...";
  }
}

div.loading {
    position: relative;
    display: none;
}
div.show-loading {
    display: block;
}
.blob {
    width: 1.2rem;
    height: 1.2rem;
    background: rgb(255, 254, 254);
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 1rem);
    top: calc(50% - 1rem);
    box-shadow: 0 0 1rem rgb(255, 255, 255);
}

.blob-2 { animation: animate-to-2 1.5s infinite; }
.blob-3 { animation: animate-to-3 1.5s infinite; }
.blob-1 { animation: animate-to-1 1.5s infinite; }
.blob-4 { animation: animate-to-4 1.5s infinite; }
.blob-0 { animation: animate-to-0 1.5s infinite; }
.blob-5 { animation: animate-to-5 1.5s infinite; }

@keyframes animate-to-2 {
    25%, 75% { transform: translateX(-1.5rem) scale(0.75); }
    95% { transform: translateX(0rem) scale(1); }
}

@keyframes animate-to-3 {
    25%, 75% { transform: translateX(1.5rem) scale(0.75); }
    95% { transform: translateX(0rem) scale(1); }
}

@keyframes animate-to-1 {
    25% { transform: translateX(-1.5rem) scale(0.75); }
    50%, 75% { transform: translateX(-4.5rem) scale(0.6); }
    95% { transform: translateX(0rem) scale(1); }
}

@keyframes animate-to-4 {
    25% { transform: translateX(1.5rem) scale(0.75); }
    50%, 75% { transform: translateX(4.5rem) scale(0.6); }
    95% { transform: translateX(0rem) scale(1); }
}

@keyframes animate-to-0 {
    25% { transform: translateX(-1.5rem) scale(0.75); }
    50% { transform: translateX(-4.5rem) scale(0.6); }
    75% { transform: translateX(-7.5rem) scale(0.5); }
    95% { transform: translateX(0rem) scale(1); }
}

@keyframes animate-to-5 {
    25% { transform: translateX(1.5rem) scale(0.75); }
    50% { transform: translateX(4.5rem) scale(0.6); }
    75% { transform: translateX(7.5rem) scale(0.5); }
    95% { transform: translateX(0rem) scale(1); }
}
</style>
