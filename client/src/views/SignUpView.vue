<template>
  <BaseFormWrapper>
    <template v-slot:title>
      <h2>Sign up</h2>
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
        text="Sign up"
      />
      <router-link to="/login">Already have an account? Sign in →</router-link>
    </template>
  </BaseFormWrapper>
</template>

<script setup>
import BaseFormWrapper from '@/components/ui/BaseFormWrapper.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
</script>
