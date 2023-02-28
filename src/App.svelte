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
    <div class="content header">Who am I?</div>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
      temporibus praesentium placeat necessitatibus. Consequuntur dolor nihil
      iste et repudiandae quasi fugit quia? Enim, nostrum reiciendis?
    </p>
    <div class="image-container"><img src="" alt="" /></div>
    <button class="btn-cta">Why You should hire <menu /></button>
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
</style>
