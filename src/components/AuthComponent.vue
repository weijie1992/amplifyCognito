<script setup>
import { Authenticator } from '@aws-amplify/ui-vue'
</script>

<template>
  <div>

    <h1>Amplify</h1>
    <Authenticator>
      <template v-slot="{user, signOut}">
        <h3>{{JSON.stringify(user)}}</h3>
        <button @click="signOut">signOut</button>
      </template>
    </Authenticator>

  </div>
</template>

