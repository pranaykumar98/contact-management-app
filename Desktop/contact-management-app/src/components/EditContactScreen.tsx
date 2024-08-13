// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { editContact } from "../store/contactSlice";

// interface Contact {
//   id: string;
//   firstName: string;
//   lastName: string;
//   status: "Active" | "Inactive";
// }

// const EditContactScreen: React.FC = () => {
//   const location = useLocation();
//   const contact = location.state as Contact; // Explicitly type the state

//   const [firstName, setFirstName] = useState(contact.firstName);
//   const [lastName, setLastName] = useState(contact.lastName);
//   const [status, setStatus] = useState<"Active" | "Inactive">(contact.status);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleFormSubmit = () => {
//     dispatch(editContact({ id: contact.id, firstName, lastName, status }));
//     navigate("/"); // Navigate back to the contact list after editing
//   };

//   return (
//     <div className="w-full flex justify-center">
//       <div className="bg-white w-1/2">
//         <p className="text-black text-xl my-2 flex justify-center font-bold">
//           Edit Contact
//         </p>
//         <div className="p-4 border-2 border-black rounded">
//           <div className="flex flex-col justify-center items-center">
//             <div className="mb-4 flex justify-center items-center w-full gap-x-4 mt-6">
//               <label className="block text-black-700 ml-10">First Name</label>
//               <input
//                 className="w-1/2 p-2 border-[1.5px] border-black rounded"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </div>
//             <div className="mb-4 flex justify-center items-center w-full gap-x-4">
//               <label className="block text-black-700 ml-10">Last Name</label>
//               <input
//                 className="w-1/2 p-2 border-[1.5px] border-black rounded"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </div>
//             <div className="mb-4 ml-10 flex mt-10 gap-x-12">
//               <label className="block text-black-700 mb-3 mt-6">Status:</label>
//               <div className="flex flex-col gap-y-4">
//                 <label className="mr-4">
//                   <input
//                     type="radio"
//                     name="status"
//                     value="Active"
//                     checked={status === "Active"}
//                     onChange={() => setStatus("Active")}
//                   />
//                   Active
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="status"
//                     value="Inactive"
//                     checked={status === "Inactive"}
//                     onChange={() => setStatus("Inactive")}
//                   />
//                   Inactive
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button
//             onClick={handleFormSubmit}
//             className="bg-slate-300 text-black p-2 rounded ml-10 border-2 border-black mt-4"
//           >
//             Save Edited Contact
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditContactScreen;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editContact } from "../store/contactSlice";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: "Active" | "Inactive";
}

const EditContactScreen: React.FC = () => {
  const location = useLocation();
  const contact = location.state as Contact; // Explicitly type the state

  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [status, setStatus] = useState<"Active" | "Inactive">(contact.status);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    dispatch(editContact({ id: contact.id, firstName, lastName, status }));
    navigate("/"); // Navigate back to the contact list after editing
  };

  return (
    <div className="w-full flex justify-center mt-12 sm:mt-24 px-4">
      <div className="bg-white w-full sm:w-3/4 md:w-1/2">
        <p className="text-black text-xl my-2 flex justify-center font-bold">
          Edit Contact
        </p>
        <div className="p-4 border-2 border-black rounded">
          <div className="flex flex-col justify-center items-center">
            <div className="my-4 w-full flex justify-center items-center gap-x-2">
              <label className="block text-black-700 ml-2 sm:ml-10">
                First Name
              </label>
              <input
                className="w-full sm:w-3/4 p-2 border-[1.5px] border-black rounded mt-1"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4 w-full flex justify-center items-center gap-x-2">
              <label className="block text-black-700 ml-2 sm:ml-10">
                Last Name
              </label>
              <input
                className="w-full sm:w-3/4 p-2 border-[1.5px] border-black rounded mt-1"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4 ml-2 sm:ml-10 flex gap-x-4 sm:gap-x-12">
              <label className="block text-black-700 mt-2">Status:</label>
              <div className="flex flex-col gap-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={status === "Active"}
                    onChange={() => setStatus("Active")}
                    className="mr-2"
                  />
                  Active
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    checked={status === "Inactive"}
                    onChange={() => setStatus("Inactive")}
                    className="mr-2"
                  />
                  Inactive
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleFormSubmit}
            className="bg-slate-300 text-black p-2 rounded border-2 border-black w-full sm:w-3/4 md:w-1/2"
          >
            Save Edited Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditContactScreen;
