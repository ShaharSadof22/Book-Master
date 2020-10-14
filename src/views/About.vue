<template>
  <div class="about container">
    <h1>Welcome to Mister Book!</h1>

    <p>
      <br />
      Bookshop is an online bookstore with a mission to financially support
      local, independent bookstores.<br /><br />
      We believe that bookstores are essential to a healthy culture. They’re
      where authors can connect with readers, where we discover new writers,
      where children get hooked on the thrill of reading that can last a
      lifetime. They’re also anchors for our downtowns and communities.<br /><br />
      As more and more people buy their books online, we wanted to create an
      easy, convenient way for you to get your books and support bookstores at
      the same time.
    </p><br />
    <router-link to="/about/aboutMe">About me</router-link>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
