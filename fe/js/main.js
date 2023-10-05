const { createApp } = Vue;

createApp({
  data() {
    return {
      test: "ciao",
      testB: "dischi",
      disk: [
        {
          author: "",
          genre: "",
          poster: "",
          title: "",
          year: "",
        },
      ],
    };
  },
  methods: {
    getDisks() {
      axios
        .get("http://localhost/php-dischi-json/be/get_disc.php")
        .then((res) => {
          console.warn("Response Data", res.data);
          this.disk = res.data;
          console.log(this.disk, "after");
        });
    },
    getDiskDetails(index) {
      const postData = {
        params: {
          index,
        },
      };
      {
        axios
          .get("http://localhost/php-dischi-json/be/get_disc.php", postData)
          .then((res) => {
            this.getDiskDetails = res.data;
            this.showDiskDetails = true;
          });
      }
    },

    hideDiskDetails() {
      this.showDiskDetails = false;
    },
  },
  mounted() {
    this.getDisks();
  },
}).mount("#app");
