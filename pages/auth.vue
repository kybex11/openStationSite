<template>
    <main>
        <Head>
            <Title>Login Or Register</Title>
        </Head>
        <div class="form">
          <h1>Login Or Register</h1>
        <div class="form">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="username" class="form-control" id="username" placeholder="Enter username">
            </div>
            <br>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email"  placeholder="Enter email">
            </div>
            <br>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password"  placeholder="Enter password">
            </div>
            <button class="btn btn-primary" @click="auth_event_register_user()">Join</button>
            <button class="btn btn-forget">Forget password?</button>
          </div>
        </div>
      </main>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'auth.css',
      crossorigin: ''
    },
    {
        rel: 'stylesheet',
        href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
        crossorigin: ''
    }
  ]
});
</script>
