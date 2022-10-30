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
            v-model="formDataType[field.name]"
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
            v-model="formDataBrand[field.name]"
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
    <BaseFormWrapper
      @submit="submitDevice"
    >
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
            :options="getOptions(field.options)"
            :required="field.required"
            :on-change="field.type === 'file' ? selectFile : null"
            v-model="formDataDevice[field.name]"
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
import {
  computed,
  reactive,
  onBeforeMount,
} from 'vue';
import { useMeta } from 'vue-meta';
import useCommonStore from '@/stores/common';
import useProductsStore from '@/stores/products';
import BaseFormWrapper from '@/components/ui/forms/BaseFormWrapper.vue';
import typeFormData from '@/components/forms/type.json';
import brandFormData from '@/components/forms/brand.json';
import deviceFormData from '@/components/forms/device.json';

useMeta({
  title: 'Admin panel',
});

onBeforeMount(() => {
  useProductsStore().setTypes();
  useProductsStore().setBrands();
});

const formDataType = reactive({});
const formDataBrand = reactive({});
const formDataDevice = reactive({});
// const fileData = ref(null);

const getOptions = (type) => {
  const options = {
    types: computed(() => useProductsStore().getTypes),
    brands: computed(() => useProductsStore().getBrands),
  };

  return options[type];
};

const submitType = () => {
  useProductsStore().addType(formDataType)
    .then(() => {
      formDataType.name = {};
      useCommonStore().setToastMessage('Type added');
      useCommonStore().setToastMessageIsVisible(true);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
};

const submitBrand = () => {
  useProductsStore().addBrand(formDataBrand)
    .then(() => {
      formDataBrand.name = {};
      useCommonStore().setToastMessage('Brand added');
      useCommonStore().setToastMessageIsVisible(true);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
};

const selectFile = (event) => {
  const { files } = event.target;
  // eslint-disable-next-line prefer-destructuring
  formDataDevice.fileData = files[0];
};

const createFormData = () => {
  const data = new FormData();

  data.append('name', formDataDevice.name);
  data.append('price', formDataDevice.price);
  data.append('typeId', formDataDevice.typeId);
  data.append('brandId', formDataDevice.brandId);
  data.append('img', formDataDevice.fileData);

  return data;
};

const submitDevice = () => {
  useProductsStore().addProduct(createFormData())
    .then(() => {
      formDataDevice.name = {};
      useCommonStore().setToastMessage('Device added');
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
