<template>
  <div class="panel">
    <BaseFormWrapper
      @submit="submitType"
    >
      <template v-slot:title>
        <h2>{{ typeFormData.form_settings.title }}</h2>
      </template>
      <template v-slot:fields>
        <fieldset
          v-for="field in typeFormData.fields"
          :key="field.name"
        >
          <component
            :is="field.component"
            :id="field.id"
            :type="field.type"
            :label="field.label"
            :name="field.name"
            :required="field.required"
          ></component>
        </fieldset>
      </template>
      <template v-slot:controls>
        <component
          v-for="button in typeFormData.buttons"
          :key="button.name"
          :is="button.component"
          :type="button.type"
          :text="button.text"
        ></component>
      </template>
    </BaseFormWrapper>
  </div>

  <div class="panel">
    <BaseFormWrapper
      @submit="submitBrand"
    >
      <template v-slot:title>
        <h2>{{ brandFormData.form_settings.title }}</h2>
      </template>
      <template v-slot:fields>
        <fieldset
          v-for="field in brandFormData.fields"
          :key="field.name"
        >
          <component
            :is="field.component"
            :id="field.id"
            :type="field.type"
            :label="field.label"
            :name="field.name"
            :required="field.required"
          ></component>
        </fieldset>
      </template>
      <template v-slot:controls>
        <component
          v-for="button in brandFormData.buttons"
          :key="button.name"
          :is="button.component"
          :type="button.type"
          :text="button.text"
        ></component>
      </template>
    </BaseFormWrapper>
  </div>

  <div class="panel">
    <BaseFormWrapper>
      <template v-slot:title>
        <h2>{{ deviceFormData.form_settings.title }}</h2>
      </template>
      <template v-slot:fields>
        <fieldset
          v-for="field in deviceFormData.fields"
          :key="field.name"
        >
          <component
            :is="field.component"
            :id="field.id"
            :type="field.type"
            :label="field.label"
            :name="field.name"
            :required="field.required"
          ></component>
        </fieldset>
      </template>
      <template v-slot:controls>
        <component
          v-for="button in deviceFormData.buttons"
          :key="button.name"
          :is="button.component"
          :type="button.type"
          :text="button.text"
        ></component>

      </template>
    </BaseFormWrapper>
  </div>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue';
import { useMeta } from 'vue-meta';
import useCommonStore from '@/stores/common';
import useProductStore from '@/stores/products';
import BaseFormWrapper from '@/components/ui/forms/BaseFormWrapper.vue';
import typeFormData from '@/components/forms/type.json';
import brandFormData from '@/components/forms/brand.json';
import deviceFormData from '@/components/forms/device.json';

useMeta({
  title: 'Admin panel',
});

onBeforeMount(() => {
  useProductStore().setTypes();
  useProductStore().setBrands();
});

// const types = computed(() => useProductStore().getTypes);
// const brands = computed(() => useProductStore().getBrands);

const formDataType = reactive({
  name: '',
});

const formDataBrand = reactive({
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
      // eslint-disable-next-line no-console
      console.log(err);
    });
};

const submitBrand = () => {
  useProductStore().addBrand(formDataBrand)
    .then(() => {
      formDataBrand.name = '';
      useCommonStore().setToastMessage('Brand added');
      useCommonStore().setToastMessageIsVisible(true);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
};
</script>

<style lang="postcss" scoped>
.panel {
  margin-bottom: 80px;
}
</style>
