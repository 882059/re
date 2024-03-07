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
                  <div class="card-body">
                    <h4>{{ member.name }}</h4>
                  </div>
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
        name: '',
        introduction:
          '',
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
  
      .contents {
        transition: all 0.4s ease-out;
        flex-direction: column;
        border-radius: 0.5rem;
        aspect-ratio: 1 / 1.5;
      }
  
      .contentA {
        border: 1px solid rgba(108, 108, 108, 0.337);
        // border-radius: 0.5rem;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          aspect-ratio: 1 / 1.2;
          object-fit: cover;
          align-items: center;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }
  
        .card-body {
          background-color: var(--bg-card);
          padding: 0.75rem 1rem;
          width: 100%;
          aspect-ratio: 1/0.3;
          position: relative;
          box-sizing: border-box;
  
          h4 {
            color: var(--text-h4);
            font-family: Museo Sans Rounded;
            display: block;
            text-align: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 2em;
          }
        }
      }
  
      .contentB {
        position: absolute;
        top: 0;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.35);
        justify-content: center;
        align-items: center;
        display: flex;
        transform-style: preserve-3d;
        transform: rotateX(180deg);
        backface-visibility: hidden;
        perspective: 1000px;
  
        .card-body {
          height: auto;
          max-height: 95%;
          max-width: 100%;
          box-shadow:
            0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          border-radius: 0.5rem;
          background-color: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(2px);
          padding: 1em;
          backface-visibility: hidden;
          transform: translateZ(80px);
          border: 1px solid rgba(255, 255, 255, 0.29);
          overflow: auto;
  
          h5,
          p {
            color: aliceblue;
            margin-right: 5px;
          }
  
          h5 {
            font-size: 2em;
            margin-top: 0.5em;
            margin-bottom: 0.5em;
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
      .contentA {
        transform: rotateX(180deg);
      }
  
      .contentB {
        transform: rotateX(0);
      }
    }
  
    // @media (max-width: 1320px) {
    //     .card {
    //         font-size: 1.7rem;
    //     }
    // }
  
    // @media (max-width: 1100px) {
    //     .card {
    //         font-size: 1.2rem;
    //     }
    // }
  
    // @media (max-width: 640px) {
    //     .card {
    //         font-size: 1rem;
    //     }
    // }
  }
  html.dark .team {
    --bg-card: #161618;
    --text-h4: #f7f7f9;
  }
  
  html .team {
    --bg-card: #f7f7f9;
    --text-h4: #6eb3a2;
  }
  </style>
  