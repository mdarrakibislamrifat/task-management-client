
import { useForm } from 'react-hook-form';
import { FaFileImport } from 'react-icons/fa';
import UseAxiosPublic from '../../Hooks/useAxiosPublic';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import { useContext } from 'react';
import Swal from 'sweetalert2';


const AddTask = () => {
    const {user}=useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = UseAxiosPublic();
  const onSubmit = async (data) => {
    const taskItem = {
        name: data.name,
        type: data.type,
        date:data.date,
        description: data.description,
        email:user?.email,
        status:'ToDo'
      };
      const res = await axiosPublic.post("/task", taskItem);
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          title: "Good job!",
          text: `${data.name} is added to task`,
          icon: "success",
        });
      }
    
  };


  return (
    <div>
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
  <div className="flex gap-6">
  <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Titles*</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="titles"
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Priority*</span>
            </label>
            <select
              defaultValue="default"
              {...register("type", { required: true })}
              className="select select-bordered w-full "
            >
              
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
              
              
            </select>
          </div>

  </div>
        

        <div className="flex gap-6">
        <div className="form-control flex-[1]">
          <label className="label">
            <span className="label-text"> Description*</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24 "
            placeholder="description"
          ></textarea>
        </div>
          
          

          <div className="form-control flex-[1]  my-6">
            <label className="label">
              <span> Deadline*</span>
            </label>
            <input
              {...register("date", { required: true })}
              type="date"
              placeholder="deadline"
              className="input input-bordered w-full "
            />
          </div>

        </div>

        
       

        


        <button className="btn mt-6">
          Add Task <FaFileImport className="ml-2"></FaFileImport>{" "}
        </button>
      </form>
    </div>
  </div>
  );
};

export default AddTask;
