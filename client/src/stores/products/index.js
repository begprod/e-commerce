import { defineStore } from 'pinia';
import ProductsServices from '@/services/ProductsService';

const useProductsStore = defineStore('products', {
  state: () => ({
    products: null,
    types: null,
    brands: null,
    currentBrand: null,
    currentType: null,
  }),

  actions: {
    addProduct(payload) {
      return ProductsServices.addProduct(payload);
    },

    getProduct(id) {
      return ProductsServices.getProduct(id);
    },

    setProducts() {
      ProductsServices.getAllProducts()
        .then((response) => {
          this.products = response.data.rows;
        });
    },

    addType(payload) {
      return ProductsServices.addType(payload);
    },

    setTypes() {
      ProductsServices.getAllTypes()
        .then((response) => {
          this.types = response.data;
        });
    },

    addBrand(payload) {
      return ProductsServices.addBrand(payload);
    },

    setBrands() {
      ProductsServices.getAllBrands()
        .then((response) => {
          this.brands = response.data;
        });
    },

    setCurrentBrand(brand) {
      this.currentBrand = brand;
    },

    setCurrentType(type) {
      this.currentType = type;
    },
  },

  getters: {
    getProducts: (state) => state.products,
    getTypes: (state) => state.types,
    getBrands: (state) => state.brands,
    getCurrentBrand: (state) => state.currentBrand,
    getCurrentType: (state) => state.currentType,
  },
});

export default useProductsStore;
