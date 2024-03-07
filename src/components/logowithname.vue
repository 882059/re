<template>
    <router-link class="logo" :to="'/' + profile.teamName + '/'">
      <div class="link">
        <img src="../assets/vue.svg" alt="logo" width="60" height="60" />
      </div>
      <span> ZJUT-2023 </span>
    </router-link>
  </template>
  <script setup lang="ts">
  import { profile } from '@/use'
  </script>
  <style lang="scss" scoped>
  a.logo {
    margin: 0;
    padding: 0;
    display: flex;
    text-decoration-line: none;
    font-size: 1em;
  
    .link {
      height: 100%;
      img {
        height: 100%;
      }
      margin-right: 5px;
    }
    span {
      height: 100%;
      font-family: Museo Sans Rounded;
      font-size: 1em;
      // background: linear-gradient(to right, #ff5dce, #178aff);
      background-color: #3d3d3d;
      background-clip: text;
      font-weight: 600;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      * {
        text-decoration-line: none;
      }
    }
  }
  </style>