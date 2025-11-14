<script>


export default {
  name: "Footer",
  props: {
    card: {
      type: Object,
      required: true
    }
  }
};

</script>

<template>
  <main>
    <!-- Your page content -->

    <footer class="site-footer">
      <div class="footer-content">
        <p>&copy; 2025 Samanta Petrova. All rights reserved.</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/samanta-petrova-873a86220/" target="_blank">LinkedIn</a>
          <a href="mailto:samanta0950@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  </main>
</template>


<style scoped>
.site-footer {
  background-color: #817696;
  color: white;
  padding: 30px 20px;
  text-align: center;
  margin-top: 60px;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.social-links a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.social-links a:hover {
  text-decoration: underline;
}

</style>