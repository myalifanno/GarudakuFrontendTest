import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    url: 'https://dummyjson.com',
    news:[
      {
        id:'cnn',
        image: 'https://logodownload.org/wp-content/uploads/2014/11/cnn-logo-1.png',
        newsName:'CNN',
        newsUrl:'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=974e1c93f07644dba31b6052055bf59d'
      },
      {
        id:'bbc-news',
        image: 'https://assets.kompasiana.com/items/album/2021/11/07/1200px-bbc-news-2019-svg-61874a13ffe7b502d90723b4.png?t=o&v=400',
        newsName:'BBC News',
        newsUrl:'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=974e1c93f07644dba31b6052055bf59d'
      },
      {
        id:'engadget',
        image: 'https://yt3.googleusercontent.com/ytc/AGIKgqP7o1ujfP4bjsgC36RiQC-bVSZm6HUzg4d2An73qP0=s900-c-k-c0x00ffffff-no-rj',
        newsName:'ENGADGET',
        newsUrl:'https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=974e1c93f07644dba31b6052055bf59d'
      },
      {
        id:'cbs-news',
        image: 'https://m.media-amazon.com/images/I/41+ipon2ZIL._AC_UL400_.png',
        newsName:'CBS News',
        newsUrl:'https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=974e1c93f07644dba31b6052055bf59d'
      },
      {
        id:'the-washington-post',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Washington_Post_favicon_white-on-black.jpg',
        newsName:'The Washington Post',
        newsUrl:'https://newsapi.org/v2/top-headlines?sources=the-washington-post&apiKey=974e1c93f07644dba31b6052055bf59d'
      },
      {
        id:'independent',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b044a30737273.5630ac2fe96d3.png',
        newsName:'Independent',
        newsUrl:'https://newsapi.org/v2/top-headlines?sources=independent&apiKey=974e1c93f07644dba31b6052055bf59d'
      },

    ],
    users: '',
    userPick: '',
  }),
  actions: {
    async fetchUsers(){
      try {
        const { data } = await axios({
          url: this.url + '/users',
          method: 'GET'
        })
        this.users = data.users
      } catch (error) {
        console.log(error)
      }
    },
    async findUser(id){
      try {
        const { data } = await axios({
          url: `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=974e1c93f07644dba31b6052055bf59d`,
          method: 'GET'
        })
        this.userPick = data.articles
        this.dateString = data.articles
        this.router.push(`/news/${id}`)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
