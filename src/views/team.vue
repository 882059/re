<template>
    <main class="content">
      <div v-for="(group, index) in members" :key="index">
        <h2>{{ index }}</h2>
        <div class="team">
          <div class="row">
            <div
              v-for="(member, subIndex) in group"
              :key="subIndex"
              class="col-8 col-lg-12 col-sm-20 offset-sm-2"
            >
              <div class="card">
                <div class="contents contentA">
                  <img :src="member.imgUrl" alt="" />
                </div>
                <div class="contents contentB">
                  <div class="card-body">
                    <h5>{{ member.name }}</h5>
                    <p v-if="member.introduction!==''">{{ member.introduction }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script lang="ts" setup>
  const members = {
    Leaders: [
      {
        name: 'RED',
        introduction:
          'I am the student leader this year, and I am mainly responsible for external communication and human practice in the team. In my constant exploration, I discovered new worlds.',
        imgUrl: 'https://static.igem.wiki/teams/4815/wiki/team11.png'
      },
      {
        name: '',
        introduction: "",
        imgUrl: ''
      },
      {
        name: '',
        introduction: "",
        imgUrl: ''
      },
      {
        name: '',
        introduction: "",
        imgUrl: ''
      },
      {
        name: '',
        introduction: "",
        imgUrl: ''
      },
    ],
    'Wet group': [
      {
        name: '',
        introduction: "",
        imgUrl: ''
      },
      {
        name: '',
        introduction: "",
        imgUrl: ''
      },
      {
        name: '',
        introduction: "",
        imgUrl: ''
      },
      {
        name: '',
        introduction: "",
        imgUrl: ''
      },
    ],
    'Dry group': [
      {
        name: '',
        introduction:
          "",
        imgUrl: ''
      },
      
    ],
    'HP group': [
      {
        name: '',
        introduction:
          '',
        imgUrl: ''
      },

    ],
    PI: [
      {
        name: '',
        introduction: '',
        imgUrl: ''
      },
      
    ],
    Advisor: [
      {
        name: '',
        introduction: "",
        imgUrl: ''
      },
    ],
    Instructors: [
      {
        name: '',
        introduction: "",
        imgUrl: ''
      },
    ]
  }
  </script>
  
  <style lang="scss" scoped>
  .team {
    display: flex;
    flex-wrap: wrap;
  
    .card {
      position: relative;
      margin: 16px;
      font-size: 1rem;
      overflow: hidden;
  
      .contents {
        transition: all 0.4s ease-out;
        flex-direction: column;
        border-radius: 0.5rem;
        aspect-ratio: 1 / 1.3;
      }
  
      .contentA {
        border: 1px solid rgb(6, 24, 50);
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          aspect-ratio: 1 / 1.3;
          object-fit: cover;
          align-items: center;
          border-radius: 0.5rem;
          transition: all 1s;
        }
      }
  
      .contentB {
        position: absolute;
        top: 0;
        height: 100%;
        justify-content: center;
        align-items: center;
        perspective: 1000px;
  
        .card-body {
          aspect-ratio: 1 / 1.3;
          border-radius: 0.5rem;
          background-color: rgba(0, 0, 0, 0.599);
          padding: 1em;
          border: 1px solid #0c2e34ad;
          overflow: auto;
          transform: scale(0);
          transition: all 0.95s;

  
          h5,
          p {
            color: #f5e5db;
            margin-right: 5px;
            font-family:'Nunito';
          }
  
          h5 {
            font-size: 2em;
            margin-top: 1em;
            margin-bottom: 1em;
          }
          p {
            font-size: 1.3em;
          }
  
          &::-webkit-scrollbar {
            width: 10px;
          }
  
          &::-webkit-scrollbar-thumb {
            background-color: rgb(55, 55, 55);
            border-radius: 5px;
          }
          &::-webkit-scrollbar-track {
            background: none;
          }
        }
      }
    }
  
    .card:hover {
     img{
          transform: scale(2);
        }
      .contentB .card-body {
        transform: scale(1);
      }
    }
  }
  </style>
  