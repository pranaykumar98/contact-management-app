// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addContact, editContact } from "../store/contactSlice";
// import { v4 as uuidv4 } from "uuid";

// interface ContactFormProps {
//   contact?: {
//     id: string;
//     firstName: string;
//     lastName: string;
//     status: "Active" | "Inactive";
//   };
// }

// const ContactForm: React.FC<ContactFormProps> = ({ contact }) => {
//   const [firstName, setFirstName] = useState(contact?.firstName || "");
//   const [lastName, setLastName] = useState(contact?.lastName || "");
//   const [status, setStatus] = useState<"Active" | "Inactive">(
//     contact?.status || "Active"
//   );

//   const dispatch = useDispatch();

//   const handleSubmit = () => {
//     if (contact) {
//       dispatch(editContact({ id: contact.id, firstName, lastName, status }));
//     } else {
//       dispatch(addContact({ id: uuidv4(), firstName, lastName, status }));
//     }
//   };

//   return (
//     <div className="w-full  flex justify-center mt-24">
//       <div className="bg-white w-1/2">
//         <p className="text-black text-xl my-2 flex justify-center font-bold">
//           Create Contact
//         </p>
//         <div className=" p-4 border-2 border-black rounded">
//           <div className="flex flex-col justify-center items-center">
//             <div className="mb-4 flex justify-center items-center w-full gap-x-4 mt-6">
//               <label className="block text-black-700 ml-10">First Name</label>
//               <input
//                 className="w-1/2 p-2 border-[1.5px] border-black rounded"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </div>
//             <div className="my-4 flex justify-center items-center w-full gap-x-4">
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
//             onClick={handleSubmit}
//             className=" bg-slate-300 text-black p-2 rounded ml-10 border-2 border-black mt-4"
//           >
//             {contact ? "Save Edited Contact" : "Save Contact"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../store/contactSlice";
import { v4 as uuidv4 } from "uuid";

interface ContactFormProps {
  contact?: {
    id: string;
    firstName: string;
    lastName: string;
    status: "Active" | "Inactive";
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ contact }) => {
  const [firstName, setFirstName] = useState(contact?.firstName || "");
  const [lastName, setLastName] = useState(contact?.lastName || "");
  const [status, setStatus] = useState<"Active" | "Inactive">(
    contact?.status || "Active"
  );

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (contact) {
      dispatch(editContact({ id: contact.id, firstName, lastName, status }));
    } else {
      dispatch(addContact({ id: uuidv4(), firstName, lastName, status }));
    }
  };

  return (
    <div className="w-full flex justify-center mt-12 sm:mt-24 px-4">
      <div className="bg-white w-full sm:w-3/4 md:w-1/2">
        <p className="text-black text-xl my-2 flex justify-center font-bold">
          {contact ? "Edit Contact" : "Create Contact"}
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
              <label className="block text-black-700 mt-4">Status:</label>
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
            onClick={handleSubmit}
            className="bg-slate-300 text-black p-2 rounded border-2 border-black w-full sm:w-3/4 md:w-1/2"
          >
            {contact ? "Save Edited Contact" : "Save Contact"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
