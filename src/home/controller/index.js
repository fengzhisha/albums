'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        return this.display('');
    }
  
    categoryAction() {
        return this.display();
    }
    
    aboutusAction() {
        return this.display();
    }
    
    async modelAction() {
        let data = await this.model("post").select();;
        this.success(data);
    }
    
     async apiAction() {
        let data = await this.model("nav").select();;
        this.success(data);
    }


    async addAction() {
        let id = await this.model('nav').addNav();
        this.success(id)
    }
    
    async addcategoryAction() {
        let id = await this.model('category').addCat();
        this.success(id)
    }


}