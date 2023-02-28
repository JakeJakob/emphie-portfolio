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
    <div class="decoration one"><h3>Something about me.</h3></div>

    <div class="decoration two" />
    <div class="content header">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
        temporibus praesentium placeat necessitatibus. Consequuntur dolor nihil
        iste et repudiandae quasi fugit quia? Enim, nostrum reiciendis?
      </p>
      <div class="image-container"><img src="" alt="" /></div>
      <button class="btn-cta">Why You should hire <menu /></button>
    </div>
  </div>

  <!-- end of about-me  -->

  <div class="container gallery">
    <div class="grid-container gallery">
      <div class="grid-element">
        <grid-img />
        <button class="btn-cta grid">See this project</button>
      </div>
      <div class="grid-element">
        <grid-img />
        <button class="btn-cta grid">See this project</button>
      </div>
      <div class="grid-element">
        <grid-img />
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

  .decoration {
    position: absolute;
    border-radius: 50px 0 0 50px;
    height: 115px;
  }

  .decoration.one {
    z-index: 3;
    margin-top: 5rem;
    right: 0;
    background-color: #00adb5;
    width: calc(50% + 175px);

    /* for text to apper corectly  */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .decoration.two {
    z-index: 2;
    transform: translateY(calc(115px + 1.5rem));
    right: 0;
    background-color: #007f85;
    width: calc(50% + 115px);
  }

  .decoration > h3 {
    font-size: 48px;
    font-weight: 300;
  }

  .content.header {
    background-color: #393e46;
  }

  p {
    width: 400px;
  }

  .img {
    background-image: url(./images/);
  }
</style>
