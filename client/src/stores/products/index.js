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
    setProducts() {
      ProductsServices.getAllProducts()
        .then((response) => {
          this.products = response.data.rows;
        });
    },

    setTypes() {
      ProductsServices.getAllTypes()
        .then((response) => {
          this.types = response.data;
        });
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
