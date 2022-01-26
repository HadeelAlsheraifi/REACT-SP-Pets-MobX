import petStore from "../petStore";
import React from "react";
import store from "../petStore";

const PetItem = ({ pet }) => {
  const petThePet = () => {};

  const adopt = () => petStore.adopt(pet.id);

  return (
    <div>
      <img src={pet.image} alt="" className="img" />
      <p className="title">{pet.name}</p>
      <button onClick={petThePet} className="btn">
        Pet
      </button>
      <button onClick={adopt} className="btn">
        Adopt
      </button>
    </div>
  );
};

export default PetItem;

// export default function PetItem({ pet, handleAdopt }) {
//   return (
//     <div class="col-lg-4 col-md-8 col-sm-10">
//       <div class="single-doctor">
//         <img className="image" alt={store.pet.name} src={store.pet.image} />
//         <div class="content">
//           <h3>{store.pet.name}</h3>
//           <button
//             type="button"
//             class="btn btn-info"
//             onClick={() => handleAdopt(store.pet.id)}
//           >
//             Adopt
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
