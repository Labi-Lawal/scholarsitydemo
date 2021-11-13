<template>
  <router-view />
</template>

<style>
  @import url('./style/colors.css');
  
  * {
    font-family: 'Work Sans', sans-serif;
  }
  html, body {
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    height: 100%;
    width: 100%;
    color: inherit;
  }
  .container_padding_3 {
    margin: 0% 3%;
  }
  .container_padding_5 {
    margin: 0% 5%;
    height: 100%;
    width: 90%;
  }
</style>
