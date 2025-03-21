const Carousel = () => {
  return (<>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/736x/8e/51/30/8e51302d51089d0f234dc16314c4e5b6.jpg" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVLcSEbZlLskmN8OHzipA0sKLLCw84pqevA&s" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg" class="d-block w-100"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
  );
}

export default Carousel;