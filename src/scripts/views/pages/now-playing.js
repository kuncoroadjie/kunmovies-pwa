const NowPlaying = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Now Playing in Cinema</h2>
    </div>
  `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default NowPlaying;
