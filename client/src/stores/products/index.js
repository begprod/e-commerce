import { defineStore } from 'pinia';

const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Iphone 13 pro max',
        img: 'https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png',
        price: 100000,
      },
      {
        id: 2,
        name: 'Iphone 12 pro max',
        img: 'https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png',
        price: 200000,
      },
      {
        id: 3,
        name: 'Iphone 11 pro',
        img: 'https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png',
        price: 300000,
      },
      {
        id: 4,
        name: 'Iphone XR',
        img: 'https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png',
        price: 400000,
      },
    ],
    types: [
      {
        id: 1,
        name: 'Холодильники',
      },
      {
        id: 2,
        name: 'Смартфоны',
      },
      {
        id: 3,
        name: 'Часы',
      },
      {
        id: 4,
        name: 'Пылесосы',
      },
    ],
    brands: [
      {
        id: 1,
        name: 'Samsung',
      },
      {
        id: 2,
        name: 'Apple',
      },
      {
        id: 3,
        name: 'Xiaomi',
      },
      {
        id: 4,
        name: 'Huawei',
      },
    ],
    currentBrand: null,
    currentType: null,
  }),

  actions: {
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
