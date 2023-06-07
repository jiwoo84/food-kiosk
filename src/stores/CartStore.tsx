import { singleton } from "tsyringe";

import { Action, Store } from "usestore-ts";

import Food from './../types/Food';

@singleton()
@Store()
export default class CartStore {
    menu: Food[] = [];

    @Action()
    add(food: Food) {
        this.menu = [...this.menu, food]
    }

    @Action()
    remove(index: number) {
        this.menu = this.menu.filter((_, i) => i !== index);
    }

    @Action()
    clear() {
        this.menu = [];
    }
}