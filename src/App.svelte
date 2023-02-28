<script>
</script>

<main>
  <div class="container main-page">
    <nav>
      <ul class="nav-list">
        <li class="nav-element"><a href=".">Home</a></li>
        <li class="nav-element"><a href=".">About</a></li>
        <li class="nav-element"><a href=".">My Projects</a></li>
        <li class="nav-element"><a href=".">Contact Me</a></li>
      </ul>
    </nav>

    <!-- end of navbar  -->

    <div class="content">
      <h1>Hello!</h1>
      <h3>My name is Jacob and I'm a professional Web Designer.</h3>
      <button class="btn-cta">My Story</button>
    </div>
  </div>

  <!-- end of main  -->

  <div class="container about-me">
    <h3>Something about me.</h3>
    <div class="content header">
      <div class="img" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
        temporibus praesentium placeat necessitatibus. Consequuntur dolor nihil
        iste et repudiandae quasi fugit quia? Enim, nostrum reiciendis?
      </p>
    </div>
    <button class="btn-cta">Why You should hire </button>
  </div>

  <!-- end of about-me  -->

  <div class="container grid-gallery">
    <div class="grid-element">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        adipisci placeat, unde velit tempore officiis eius quos pariatur!
        Perspiciatis necessitatibus illum hic fuga qui voluptatem exercitationem
        ab nobis excepturi totam, natus aliquam doloremque repellendus
        explicabo, alias tenetur doloribus laudantium iure iusto minima! Porro
        quaerat accusamus facilis nemo mollitia accusantium ab?
      </p>
      <div class="img" />
      <button class="btn-cta" />
    </div>
    <div class="grid-element">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        adipisci placeat, unde velit tempore officiis eius quos pariatur!
        Perspiciatis necessitatibus illum hic fuga qui voluptatem exercitationem
        ab nobis excepturi totam, natus aliquam doloremque repellendus
        explicabo, alias tenetur doloribus laudantium iure iusto minima! Porro
        quaerat accusamus facilis nemo mollitia accusantium ab?
      </p>
      <div class="img" />
      <button class="btn-cta" />
    </div>
    <div class="grid-element">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        adipisci placeat, unde velit tempore officiis eius quos pariatur!
        Perspiciatis necessitatibus illum hic fuga qui voluptatem exercitationem
        ab nobis excepturi totam, natus aliquam doloremque repellendus
        explicabo, alias tenetur doloribus laudantium iure iusto minima! Porro
        quaerat accusamus facilis nemo mollitia accusantium ab?
      </p>
      <div class="img" />
      <button class="btn-cta" />
    </div>
  </div>

  <!-- end of gallery  -->

  <div class="container contact-me">
    <!-- <form action=""></form> Do this form later -->
  </div>
</main>

<style>
  .main-page {
    display: flex;
    justify-content: space-between;
  }
  nav {
    width: 55px;
  }
  .nav-list {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    padding: 0;
    gap: 4rem;
  }
  .nav-element {
    list-style: disc;
    list-style-position: outside;
    padding-top: 1rem;
    font-size: 16px;
    writing-mode: vertical-lr;
    rotate: 180deg;
  }

  .nav-element:nth-child(4) {
    list-style: none;
  }

  /* end of nav styling (for now) */

  .content {
    padding: 5rem;
  }

  .content > h3 {
    width: 60%;
    margin-bottom: 2rem;
  }

  /* main page done  */
  /* 
  .decoration {
    position: absolute;
    border-radius: 50px 0 0 50px;
    height: 115px;
  }

  .decoration.one {
    z-index: 3;
    margin-top: 0rem;
    right: 0;
    background-color: #00adb5;
    width: calc(50% + 75px); */

  /* for text to apper corectly  */
  /* display: flex;
    align-items: center;
    justify-content: center;
  }

  .decoration.two {
    z-index: 2;
    transform: translateY(calc(115px - 3rem));
    right: 0;
    background-color: #007f85;
    width: calc(50% + 15px);
  }

  .decoration > h3 {
    font-size: 48px;
    font-weight: 300;
  } */

  .about-me {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 80vh;

    background-color: #222831;
  }
  .content.header {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  p {
    width: 400px;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .content.header > .img {
    background-image: url("C:\Users\Kuba Wlos\Documents\Programming\Emphie_solutions_portfolio_jakeww\Portfolio\images\IMG_1252.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1;
    width: 40vmin;
  }

  /* .cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.314);
  } */

  /* .wrapper {
    margin: 0 auto;
    margin-top: 0;
    justify-content: space-between;
    display: flex;
    width: 80%;
  } */

  /* this layout is not working, too bad! gonna use a different one l8r */
  .grid-gallery {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }

  .grid-element {
    height: 33vh;
    aspect-ratio: 3/2;
  }

  .grid-element > p {
    z-index: 1;
  }

  .grid-element > .img {
    z-index: 2;
    background-image: url("../images/");
  }
</style>
