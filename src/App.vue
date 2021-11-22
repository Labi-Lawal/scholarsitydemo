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
  .loader {
    position: relative;
  }
  .loader div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .loader div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .loader div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .loader div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .loader div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
</style>
