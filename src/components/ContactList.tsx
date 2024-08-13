// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store/store";
// import { deleteContact, editContact } from "../store/contactSlice";

// type ContactStatus = "Active" | "Inactive";

// interface Contact {
//   id: string;
//   firstName: string;
//   lastName: string;
//   status: ContactStatus;
// }

// const ContactList: React.FC = () => {
//   const contacts = useSelector((state: RootState) => state.contacts.contacts);
//   const dispatch = useDispatch();

//   // State to track the contact being edited
//   const [editingContactId, setEditingContactId] = useState<string | null>(null);
//   const [editedContact, setEditedContact] = useState<Contact>({
//     id: "",
//     firstName: "",
//     lastName: "",
//     status: "Active", // Default to "Active"
//   });

//   // Handle edit button click
//   const handleEditClick = (contact: Contact) => {
//     setEditingContactId(contact.id);
//     setEditedContact({
//       id: contact.id,
//       firstName: contact.firstName,
//       lastName: contact.lastName,
//       status: contact.status,
//     });
//   };

//   // Handle input change in the edit form
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     // If changing the status, ensure it's one of the allowed values
//     if (name === "status" && (value === "Active" || value === "Inactive")) {
//       setEditedContact({
//         ...editedContact,
//         [name]: value,
//       });
//     } else if (name !== "status") {
//       setEditedContact({
//         ...editedContact,
//         [name]: value,
//       });
//     }
//   };

//   // Handle form submission
//   const handleFormSubmit = () => {
//     if (editingContactId) {
//       dispatch(editContact(editedContact)); // Pass the entire editedContact object
//       setEditingContactId(null); // Exit editing mode
//     }
//   };

//   return (
//     <div className="flex justify-center gap-x-5">
//       {contacts.map((contact: Contact) => (
//         <div
//           key={contact.id}
//           className="bg-white mt-5 p-4 rounded border-2 border-black mb-4 flex flex-col justify-between items-center w-[280px]"
//         >
//           <p className="text-xl text-black font-bold my-2">Contact</p>
//           {editingContactId === contact.id ? (
//             <div>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={editedContact.firstName}
//                 onChange={handleInputChange}
//                 className="border p-1 mb-2"
//                 placeholder="First Name"
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 value={editedContact.lastName}
//                 onChange={handleInputChange}
//                 className="border p-1 mb-2"
//                 placeholder="Last Name"
//               />
//               <select
//                 name="status"
//                 value={editedContact.status}
//                 onChange={() => handleInputChange}
//                 className="border p-1 mb-2"
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//               <button
//                 onClick={handleFormSubmit}
//                 className="bg-blue-500 text-white p-2 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           ) : (
//             <div>
//               <p>First Name: {contact.firstName}</p>
//               <p>Last Name: {contact.lastName}</p>
//               <p>Status: {contact.status}</p>
//             </div>
//           )}
//           <div className="flex flex-col gap-y-5 mt-5">
//             {editingContactId !== contact.id && (
//               <button
//                 onClick={() => handleEditClick(contact)}
//                 className="bg-green-500 text-white p-2 rounded ml-2 min-w-[150px]"
//               >
//                 Edit
//               </button>
//             )}
//             <button
//               onClick={() => dispatch(deleteContact(contact.id))}
//               className="bg-red-500 text-white p-2 rounded ml-2"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContactList;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store/store";
// import { deleteContact } from "../store/contactSlice";
// import { useNavigate } from "react-router-dom";

// type ContactStatus = "Active" | "Inactive";

// interface Contact {
//   id: string;
//   firstName: string;
//   lastName: string;
//   status: ContactStatus;
// }

// const ContactList: React.FC = () => {
//   const contacts = useSelector((state: RootState) => state.contacts.contacts);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Handle edit button click
//   const handleEditClick = (contact: Contact) => {
//     navigate(`/edit/${contact.id}`, { state: { contact } });
//   };

//   return (
//     <div className="flex justify-center gap-x-5">
//       {contacts.map((contact: Contact) => (
//         <div
//           key={contact.id}
//           className="bg-white mt-5 p-4 rounded border-2 border-black mb-4 flex flex-col justify-between items-center w-[280px]"
//         >
//           <p className="text-xl text-black font-bold my-2">Contact</p>
//           <div>
//             <p>First Name: {contact.firstName}</p>
//             <p>Last Name: {contact.lastName}</p>
//             <p>Status: {contact.status}</p>
//           </div>
//           <div className="flex flex-col gap-y-5 mt-5">
//             <button
//               onClick={() => handleEditClick(contact)}
//               className="bg-green-500 text-white p-2 rounded ml-2 min-w-[150px]"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => dispatch(deleteContact(contact.id))}
//               className="bg-red-500 text-white p-2 rounded ml-2"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContactList;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { deleteContact } from "../store/contactSlice";
import { useNavigate } from "react-router-dom";

type ContactStatus = "Active" | "Inactive";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: ContactStatus;
}

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle edit button click
  const handleEditClick = (contact: Contact) => {
    navigate(`/edit/${contact.id}`, { state: contact }); // Pass the contact object as state
  };

  return (
    <div className="flex justify-center gap-x-5">
      {contacts.map((contact: Contact) => (
        <div
          key={contact.id}
          className="bg-white mt-5 p-4 rounded border-2 border-black mb-4 flex flex-col justify-between items-center w-[280px]"
        >
          <p className="text-xl text-black font-bold my-2">Contact</p>
          <div>
            <p>First Name: {contact.firstName}</p>
            <p>Last Name: {contact.lastName}</p>
            <p>Status: {contact.status}</p>
          </div>
          <div className="flex flex-col gap-y-5 mt-5">
            <button
              onClick={() => handleEditClick(contact)}
              className="bg-green-500 text-white p-2 rounded ml-2 min-w-[150px]"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteContact(contact.id))}
              className="bg-red-500 text-white p-2 rounded ml-2"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
