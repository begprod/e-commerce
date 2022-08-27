<template>
  <BaseFormWrapper>
    <template v-slot:title>
      <h2>Sign in</h2>
    </template>
    <template v-slot:fields>
      <fieldset>
        <BaseInput
          id="email"
          type="email"
          label="Email"
          required
        />
      </fieldset>
      <fieldset>
        <BaseInput
          id="password"
          type="password"
          label="Password"
          required
        />
      </fieldset>
    </template>
    <template v-slot:controls>
      <BaseButton
        type="submit"
        text="Sign in"
      />
      or
      <router-link to="/signup">Sign up</router-link>
    </template>
  </BaseFormWrapper>
</template>

<script setup>
import { useMeta } from 'vue-meta';
import BaseFormWrapper from '@/components/ui/BaseFormWrapper.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

useMeta({
  title: 'Sign in',
});
</script>
