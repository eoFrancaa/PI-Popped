<script setup>
</script>

<template>
<footer>
<img class="logo" src="@/assets/Popped.png">
<div class="home"><router-link to="/"><svg xmlns="http://www.w3.org/2000/svg" height="90px" viewBox="0 -960 960 960" width="84px" fill="#ffff "><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></router-link><h2>Home</h2></div>
<div class="Discovery"><p><svg xmlns="http://www.w3.org/2000/svg" height="90px" viewBox="0 -960 960 960" width="84px" fill="#ffff "><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></p><h2>Discovery</h2></div>
<div class="shop"><router-link to="/shop"><svg xmlns="http://www.w3.org/2000/svg" height="90px" viewBox="0 -960 960 960" width="84px" fill="#ffff "><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></router-link><h2>Shop</h2></div>
</footer>
</template>

<style scoped>
.home{
    margin-top: 2vh;
}
.logo{
  z-index: 10;
  position: fixed;
  bottom: 10px;
}
h2{
    color: #FFFF;
    
}
footer{
  position:fixed;
  left: 0;
  background-color: #9E59D4;  
  height: 100vh;
  width: 10vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center   ;
  gap: 5vh;
  font-family: "Noto Sans Thai", sans-serif;
  border-radius: 0px 10px 10px 0px;
}
a , p {
    text-decoration: none;
    color: black;
}

p:hover , a:hover{
  cursor: pointer;
  color:#e7d4ee;
  transition: all 0.5s;
}

</style>
