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

  .addtocart_success_message {
    border: 1px solid green;
    height: 100px;
    width: 30%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .page_loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .page_loader div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 4px solid var(--blue-100);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--blue-100) transparent transparent transparent;
  }
  .page_loader div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .page_loader div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .page_loader div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
