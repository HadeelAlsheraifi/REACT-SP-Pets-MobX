import { makeAutoObservable } from "mobx";
import petsData from "./petsData";

class PetStore {
  pets = petsData;
  constructor() {
    makeAutoObservable(this);
  }
  adopt = (id) => {
    this.pets = this.pets.filter((pet) => +pet.id !== +id);
  };
}
const petStore = new PetStore();

export default PetStore;
