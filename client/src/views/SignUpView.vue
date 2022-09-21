<template>
  <BaseFormWrapper
    @submit="onSubmit"
  >
    <template v-slot:title>
      <h2>Sign up</h2>
    </template>
    <template v-slot:fields>
      <fieldset>
        <BaseInput
          id="email"
          type="email"
          label="Email"
          name="email"
          v-model="formData.email"
          required
        />
      </fieldset>
      <fieldset>
        <BaseInput
          id="password"
          type="password"
          label="Password"
          name="password"
          v-model="formData.password"
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
    <template
      v-if="isError"
      v-slot:message
    >
      {{ errorMessage }}
    </template>
  </BaseFormWrapper>
</template>

<script setup>
import jwtDecode from 'jwt-decode';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import { useMeta } from 'vue-meta';
import useUserStore from '@/stores/user';
import useCommonStore from '@/stores/common';
import BaseFormWrapper from '@/components/ui/forms/BaseFormWrapper.vue';
import BaseInput from '@/components/ui/forms/BaseInput.vue';
import BaseButton from '@/components/ui/forms/BaseButton.vue';

useMeta({
  title: 'Sign up',
});

const router = useRouter();

const formData = ref({
  email: '',
  password: '',
  role: 'ADMIN',
});

const isError = computed(() => useCommonStore().isError);
const errorMessage = computed(() => useCommonStore().errorMessages);

const onSubmit = () => {
  useUserStore().signUp(formData.value)
    .then((res) => {
      const { token } = res.data;
      const decodedToken = jwtDecode(token);

      localStorage.setItem('token', token);
      useUserStore().setCurrentUser(decodedToken);
      useUserStore().setAuthenticated(true);

      router.push({
        name: 'home',
      });
    })
    .catch(() => (error) => {
      console.log(error);
    });
};
</script>
