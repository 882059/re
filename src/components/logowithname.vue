<template>
    <router-link class="logo" :to="'/' + profile.teamName + '/'">
      <div class="link">
        <img src="../assets/vite.svg" alt="logo" width="60" height="60" />
      </div>
      <span> ZJUT-2024 </span>
    </router-link>
  </template>
  <script setup lang="ts">
  import { profile } from '@/use'
  </script>
  <style lang="scss" scoped>
  a.logo {
    max-width: 400px;
    margin: 0;
    padding: 0;
    display: flex;
    text-decoration-line: none;
    font-size: 1em;
    
  
    .link {
      height: 100%;
      img {
        height: 40px;
      }
      margin-right: 5px;
    }
    span {
      height: 100%;
      font-family: Museo Sans Rounded;
      font-size: 2em;
      background-color: #d9a459;
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