<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Tečajevi</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tutorialsfull" class="nav-link">Svi tečajevi</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Dodavanje tečaja</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/students" class="nav-link">Studenti</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addstudent" class="nav-link">Dodavanje studenata</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/googlemap" class="nav-link">Google map</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
