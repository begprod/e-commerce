<template>
  <div class="panel">
    <BaseFormWrapper
      @submit="submitType"
    >
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
            v-model="formDataType.name"
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
            @click="useProductStore().setTypes()"
          >
            <option value="">Select type</option>
            <option
              v-for="type in types"
              :key="type.id"
              :value="type.id"
            >
              {{ type.name }}
            </option>
          </BaseSelect>
        </fieldset>
        <fieldset>
          <BaseSelect
            id="brandId"
            name="brandId"
            label="Brand"
            required
            @click="useProductStore().setBrands()"
          >
            <option value="">Select brand</option>
            <option
              v-for="brand in brands"
              :key="brand.id"
              :value="brand.id"
            >
              {{ brand.name }}
            </option>
          </BaseSelect>
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
          text="Add device"
        />
      </template>
    </BaseFormWrapper>
  </div>
</template>

<script setup>
import { computed, reactive, onBeforeMount } from 'vue';
import { useMeta } from 'vue-meta';
import useCommonStore from '@/stores/common';
import useProductStore from '@/stores/products';
import BaseFormWrapper from '@/components/ui/forms/BaseFormWrapper.vue';
import BaseInput from '@/components/ui/forms/BaseInput.vue';
import BaseSelect from '@/components/ui/forms/BaseSelect.vue';
import BaseButton from '@/components/ui/forms/BaseButton.vue';

useMeta({
  title: 'Admin panel',
});

onBeforeMount(() => {
  useProductStore().setTypes();
  useProductStore().setBrands();
});

const types = computed(() => useProductStore().getTypes);
const brands = computed(() => useProductStore().getBrands);

console.log(types);
console.log(brands);

const formDataType = reactive({
  name: '',
});

const submitType = () => {
  useProductStore().addType(formDataType)
    .then(() => {
      formDataType.name = '';
      useCommonStore().setToastMessage('Type added');
      useCommonStore().setToastMessageIsVisible(true);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style lang="postcss" scoped>
.panel {
  margin-bottom: 80px;
}
</style>
