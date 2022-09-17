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
          <BaseSelect
            id="typeId"
            name="typeId"
            label="Type"
            required
          >
            <option value="">Select type</option>
            <option value="1" label="Phone">Phone</option>
            <option value="2" label="Laptop">Laptop</option>
            <option value="3" label="Tablet">Tablet</option>
          </BaseSelect>
        </fieldset>
        <fieldset>
          <BaseSelect
            id="brandId"
            name="brandId"
            label="Brand"
            required
          >
            <option value="">Select brand</option>
            <option value="1" label="Apple">Apple</option>
            <option value="2" label="Samsung">Samsung</option>
            <option value="3" label="Xiaomi">Xiaomi</option>
          </BaseSelect>
        </fieldset>
        <fieldset>
<!--    TODO: добавить стили для type="file"      -->
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
import BaseSelect from '@/components/ui/forms/BaseSelect.vue';
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
