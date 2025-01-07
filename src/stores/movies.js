import { defineStore } from 'pinia';

export const movieManagementStore = defineStore('movies', {
  state: () => ({
    movieList: [
      { title: 'Breaking Bad', image: 'breaking-bad.jpg' },
      { title: 'Black Mirror', image: 'black-mirror.jpg' },
      { title: 'Tron: Legacy', image: 'tron-legacy.jpg' },
      { title: 'Iron Man', image: 'iron-man.jpg' },
      { title: 'Mr. Robot', image: 'mr-robot.jpg' },
      { title: 'Black Mirror: Bandersnatch', image: 'black-mirror-bandersnatch.jpg' },
      { title: 'Silicon Valley', image: 'silicon-valley.jpg' },
    ],
  }),
  getters: {
    getFirstMovie: (state) => state.movieList[0],
    getMovies: (state) => state.movieList,
  },
  actions: {
    addMovie(newMovie) {
      this.movieList.push(newMovie);
    },
    deleteMovie(indice){
        this.movieList.splice(indice, 1)
    }
  },
});
