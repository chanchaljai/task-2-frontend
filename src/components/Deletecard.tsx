import { RiDeleteBin6Line } from "react-icons/ri";

type DeletecardProps = {
  setOpenCard: React.Dispatch<React.SetStateAction<boolean>>;
}
const Deletecard = ({ setOpenCard }: DeletecardProps) => {
  return (
    <div className="w-72 p-5 bg-gray-400 rounded-xl shadow-lg border justify-center">
      <div className="flex justify-center mb-3">
        <RiDeleteBin6Line size={35} color="red" />
      </div>

      <h2 className="text-center text-red-500 font-semibold mb-5">
        Do you want to delete?
      </h2>

      <div className="flex justify-center gap-3">
        <button onClick={()=> setOpenCard(false)}
         className="bg-green-500 text-white px-4 py-2 rounded">
          Cancel
        </button>

        <button onClick={()=> setOpenCard(false)}
        className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Deletecard;