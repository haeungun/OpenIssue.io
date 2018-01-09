<template>
  <div id="main">
    <div class="search">
        <div id="search-box">
            <input id="search-bar" type="text" v-model="searchWord">
            <div id="btn-search" class="btn" v-on:click="search()"><img src="../assets/search.png"></div>
            <div id="btn-cancel" class="btn" v-on:click="removeSearch($event)"><img src="../assets/cancel.png"></div>
        </div>
    </div>
    <div id="menu">
        <img id="logo" src="../assets/logo2.png">
        <ul id="menu-list">
            <router-link to="/main"> <li>Issues</li></router-link>
            <li v-on:click="showSearch($event)">Search</li>
            <router-link to="/main/sign"><li>{{ isAuthen? "Logout" : "Sign in" }}</li></router-link>
        </ul>
        <div id="menu-mobile">
            <div id="btn-drop" v-on:click="dropdown($event)"><img src="../assets/line-menu.png"/></div>
            <ul class="drop-list">
                <li>{{ isAuth? "Logout" : "Sign in" }}</li>
                <li>Issues</li>
                <li>Search</li>
            </ul>
        </div>
        <div id="github">
            <p>powerd by</p>
            <img src="../assets/GitHub_Logo_White.png">
        </div>
    </div>
    <router-view></router-view>
    <router-link to="/main/developer">
        <div id="bottom-menu">
            About us
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    isAuth: function () {
    },
    dropdown: function (event) {
      this.$el.querySelector('.drop-list').classList.toggle('show-drop')
      console.log(this.$el.querySelector('.drop-list'))
    },
    search: function () {
      console.log(this.searchWord)
      this.$el.querySelector('.search').id = ''
    },
    showSearch: function (event) {
      this.$el.querySelector('.search').id = 'show-search'
    },
    removeSearch: function (event) {
      this.$el.querySelector('.search').id = ''
    }
  },

  data () {
    return {
      isAuthen: false,
      searchWord: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
ul {
    list-style: none;
}
div#main {
    background-color: $baseColor;
    height: calc(100% + 10px);
}
img#logo {
    float: left;
    width: 110px;
    margin-top: 3px;
    margin-left: 10px;
}
div.search {
    width: 100vw;
    height: 50px;
    background-color: $primaryColor;
    padding-top: 13px;
    position: fixed;
    transform: .5s;
    transition: .5s;
    top: -100px;
    z-index: 120;
}
div#show-search {
    top: 0px;
    transition: .5s;
}
div#search-box {
    width: calc(70vw + 80px);
    max-width: 500px;
    margin: auto;
    text-align: center;
}
input#search-bar {
    width: 70vw;
    max-width: 400px;
    min-width: 130px;
    height: 20px;
    float: left;
}
div.btn {
    width: 30px;
    height: 22.5px;
    background-color: $secondaryColor;
    border-radius: 5px;
    display: inline-block;
}
div.btn img {
    width:80%;
    height:80%;    
    object-fit: contain;
    padding: 10%;
}
div#btn-search {
    background-color: white;
    margin-right: 5px;
    margin-left: 5px;
}
div#menu {
    width: 100vw;
    height: 50px;
    background-color: $primaryColor;
    margin-bottom: 20px;
    position: fixed;
    z-index: 100;
}
div#github {
    float: right;
    margin-right: 10px;
    margin-top: 10px;
}
div#github p {
    color: white;
    display: inline;
    font-size: .8em;
    position: absolute;
    top: 23px;
    right: 95px;
}
div#github img {
    width: 85px;
}
ul#menu-list {
    width: 300px;
    color: white;
    margin: auto;
    list-style: none;
    justify-content: center;
    :hover {
        cursor: pointer;
    }
    :last-child {
        margin-right: 0;
    }
}
ul#menu-list li {
    width: 90px;
    float: left;
    line-height: 50px;
    text-align: center;
}
ul#menu-list li:hover {
}
ul a {
    color: white;
    text-decoration: none;
    transition: .4s;
}
div#bottom-menu {
    width: 120px;
    height: 40px;
    background-color: $primaryColor;
    bottom: 0;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 1px -1px 4px #686868;
    color: white;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
    right: 100px;
    opacity: .9;
    position: fixed;
    z-index: 50;
}
div#bottom-menu:hover {
    cursor: pointer;
} 
@media only screen and (min-width: 768px) {
    div#menu-mobile {
        display: none;
    }
}
@media only screen and (max-width: 768px) {

    @mixin dropdown-animation {
        -webkit-transition:height 200ms ease-in;
        -moz-transition:height 200ms ease-in;
        -o-transition:height 200ms ease-in;
        transition:height 200ms ease-in;
    }
    img#logo {
        display: none;
    }
    div#btn-drop {
        width: 40px;
        height: 40px;
        float: left;
        margin-top: 5px;
        padding-left: 10px;  
    }
    div#btn-drop img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    div#bottom-menu {
        right: 30px;
    }
    ul#menu-list {
        display: none;
    }
    ul.drop-list {
        position: fixed;
        top: 50px;
    }
    ul.drop-list li {
        width: 100vw;
        height: 0px;
        background-color: white;
        border-bottom: .3px solid $baseColor;
        overflow:hidden;
        text-align: center;
        @include dropdown-animation;
    }
    ul.show-drop li {
        opacity: 1;
        visibility: visible;
        height: 50px;
        line-height: 50px;
        @include dropdown-animation;
    }
}
</style>