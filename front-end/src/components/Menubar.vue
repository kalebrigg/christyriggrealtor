<template>
  <div>
    <nav
      class="navbar navbar-expand-lg mx-auto sticky-top navbar-dark bg-light"
    >
      <router-link to="/">
        <img src="assets\images\logoOnly.png" class="brandLogo" alt="" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Listings">
              Listings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/AboutChristy">
              Meet Christy
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Testimonials">
              Testimonials
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-light {
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.navbar-brand {
  color: white !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: white !important;
}
</style>
