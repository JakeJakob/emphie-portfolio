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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis sit
        illum sed, enim recusandae earum dignissimos dolor, tempora, aliquid
        neque repellendus! Rem omnis quisquam ab dolore quam. Animi voluptatum
        neque fugit quae ullam magni molestiae illum facere eligendi autem
        officiis dolorem reprehenderit, eos tempore ipsum a quo voluptatem
        quaerat voluptates.
      </p>
    </div>
    <button class="btn-cta">Why You should hire </button>
  </div>

  <!-- end of about-me  -->

  <div class="container gallery">
    <div class="grid-container">
      <div class="grid-element">
        <div class="grid-img" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          fugiat eveniet possimus! Sint fugiat, rerum ipsam ad ab, odit magnam
          voluptates veniam facilis ea esse?
        </p>
        <button class="btn-cta grid">See this project</button>
      </div>
      <div class="grid-element">
        <div class="grid-img" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          fugiat eveniet possimus! Sint fugiat, rerum ipsam ad ab, odit magnam
          voluptates veniam facilis ea esse?
        </p>
        <button class="btn-cta grid">See this project</button>
      </div>
      <div class="grid-element">
        <div class="grid-img" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          fugiat eveniet possimus! Sint fugiat, rerum ipsam ad ab, odit magnam
          voluptates veniam facilis ea esse?
        </p>
        <button class="btn-cta grid">See this project.</button>
      </div>
    </div>
  </div>

  <!-- end of gallery  -->

  <div class="container contact-me">
    <!-- <form action=""></form> Do this form later -->
  </div>
</main>

<style>
  .main-page {
    border-bottom: solid 1px #eee;
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
    border-bottom: solid 1px #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;

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
    border: solid #00adb5;
    border-width: 1px 0 0 1px;

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

  .grid-container {
    height: 100%;
    display: flex;
    border-bottom: solid 1px #eee;
    align-items: baseline;
    justify-content: space-evenly;
    align-items: center;
  }

  .grid-element {
    width: 400px;
    position: relative;
    border: solid 1px #eee;
    padding: 1rem;
    aspect-ratio: 3/2;
  }

  .grid-element > .grid-img {
    width: 100%;
    aspect-ratio: inherit;
    background-image: url("../images/pobrane.jpg");
    background-position: center;
    background-size: cover;
    z-index: 1;
  }

  .grid-element > p {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .grid-element > .btn-cta {
    top: 0;
    left: 0;
    position: absolute;
    border: line 1px inherit;
    background-color: #00adb5;
    color: #eee;
    box-shadow: 1px #222831;
    display: none;
    z-index: 3;
  }
</style>
