new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/Foto6.jpg",
          img2: "images/Foto5.jpg",
          img3: "images/Foto4.jpg",
          title: "First Date✨",
          isOpen: false,
        },
        {
          img1: "images/Foto1.jpg",
          img2: "images/Foto2.jpg",
          img3: "images/Foto3.jpg",
          title: "Movie Date🎬",
          isOpen: false,
        },
        {
          img1: "images/Foto9.jpg",
          img2: "images/Foto7.jpg",
          img3: "images/Foto8.jpg",
          title: "Photobox📸",
          isOpen: false,
        },
        {
          img1: "images/Foto11.jpg",
          img2: "images/Foto10.jpg",
          img3: "images/Foto12.jpg",
          title: "Memories😊",
          isOpen: false,
        },
        {
          img1: "images/Foto15.jpg",
          img2: "images/Foto14.jpg",
          img3: "images/Foto13.jpg",
          title: "Kny Date🧟",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
