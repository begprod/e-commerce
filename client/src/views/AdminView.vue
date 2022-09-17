<template>
  <div class="panel">
    <BaseFormWrapper>
      <template v-slot:title>
        <h2>Add type</h2>
      </template>
      <template v-slot:fields>
        <fieldset>
          <BaseInput
            id="type"
            type="text"
            label="Type"
            name="name"
            required
          />
        </fieldset>
      </template>
      <template v-slot:controls>
        <BaseButton
          type="submit"
          text="Add type"
        />
      </template>
    </BaseFormWrapper>
  </div>

  <div class="panel">
    <BaseFormWrapper>
      <template v-slot:title>
        <h2>Add brand</h2>
      </template>
      <template v-slot:fields>
        <fieldset>
          <BaseInput
            id="brand"
            type="text"
            label="Brand"
            name="name"
            required
          />
        </fieldset>
      </template>
      <template v-slot:controls>
        <BaseButton
          type="submit"
          text="Add brand"
        />
      </template>
    </BaseFormWrapper>
  </div>

  <div class="panel">
    <BaseFormWrapper>
      <template v-slot:title>
        <h2>Add device</h2>
      </template>
      <template v-slot:fields>
        <fieldset>
          <BaseInput
            id="name"
            type="text"
            label="Name"
            name="name"
            required
          />
        </fieldset>
        <fieldset>
          <BaseInput
            id="price"
            type="number"
            label="Price"
            name="price"
            required
          />
        </fieldset>
        <fieldset>
          <BaseInput
            id="typeId"
            type="number"
            label="Type ID"
            name="typeId"
            required
          />
        </fieldset>
        <fieldset>
          <BaseInput
            id="brandId"
            type="number"
            label="brand ID"
            name="brandId"
            required
          />
        </fieldset>
        <fieldset>
          <BaseInput
            id="img"
            type="file"
            label="image"
            name="img"
            required
          />
        </fieldset>
      </template>
      <template v-slot:controls>
        <BaseButton
          type="submit"
          text="Add brand"
        />
      </template>
    </BaseFormWrapper>
  </div>
</template>

<script setup>
import { useMeta } from 'vue-meta';
import BaseFormWrapper from '@/components/ui/forms/BaseFormWrapper.vue';
import BaseInput from '@/components/ui/forms/BaseInput.vue';
import BaseButton from '@/components/ui/forms/BaseButton.vue';

useMeta({
  title: 'Admin panel',
});
</script>

<style lang="postcss" scoped>
.panel {
  margin-bottom: 80px;
}
</style>
