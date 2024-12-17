<script setup>
import Cart from '@/components/CartComp.vue';
</script>

<template>
  <footer>
    <img class="logo" src="@/assets/Popped.png" />
    <div class="div">
      <router-link style="margin-top: padding" to="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="5vh"
          viewBox="0 -960 960 960"
          width="5.5vh"
          fill="#ffff "
        >
          <path
            d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
          />
        </svg>
        <p>Home</p>
      </router-link>
    </div>
    <div>
      <router-link to="/shop"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="5vh"
          viewBox="0 -960 960 960"
          width="5.5vh"
          fill="#ffff"
        >
          <path
            d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
          </svg>
        </router-link>
      <p>Shop</p>
    </div>
    <div>
      <router-link to="/Discovery"
        ><svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height="5vh"
          width="5.5vh"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g></svg>
        </router-link>

      <p>Discovery</p>
    </div>
    <div>
      <router-link to="/login"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="5vh"
          viewBox="0 -960 960 960"
          width="5.5vh"
          fill="#ffffff"
        >
          <path
            d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
          /></svg>
        </router-link>
      <p>Profile</p>
    </div>
    <Cart />
  </footer>
</template>

<style scoped>
.logo {
  width: 100px;
  z-index: 10;
  position: fixed;
  bottom: 10px;
}
footer {
  position: fixed;
  left: 0;
  background-color: #9e59d4;
  height: 100vh;
  width: 15vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 10vh;

  font-family: 'Inter', 'sans-serif';
}
a,
p {
  text-decoration: none;
  color: black;
}

p:hover,
a:hover {
  cursor: pointer;
  color: #e7d4ee;
  transition: all 0.5s;
}
p {
  color: #ffff;
  font-size: large;
}
</style>
