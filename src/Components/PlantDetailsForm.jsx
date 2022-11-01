import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import Nbar from './Navbar.jsx'

import './form.css'

function PlantDetailsForm() {
    // const initialValues = { plantName: "" , testImage:""};
    const [item, setItem] = useState({ plantName: '', image: '', desc: '' });
    //const [formData, setFormData] = useState({});

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(item)
        axios({
            method: 'post',
            url: 'http://localhost:5001/upload',
            data: item //formData
        })

    }

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    return (
        <>
            <Nbar />

            <div className="create">
                <h2>Add a New Plant</h2>
                <div className="card p-4" style={{ margin: "50px 1%", border: "2px solid red", borderRadius: "1.5rem" }}>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <label className="form-label">Product Name:</label>
                            <input type="text" className="form-control" required
                                onChange={e => setItem({ ...item, plantName: e.target.value })}
                            />
                            <label className="form-label">Attach Image:</label>
                            <FileBase64 
                                type="file" required
                                multiple={false}
                                onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                            />
                            <label className="form-label">Description:</label>
                            <textarea className="form-control" required
                                onChange={e => setItem({ ...item, desc: e.target.value })}
                            />
                            <button type='submit'>SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div>
                    <Link to='/PlantsDisplay'>Plants Display</Link>
                </div>
            </div>
        </>
        // <div>
        //     <div>
        //         <Link to='/PlantsDisplay'>Plants Display</Link>
        //     </div>

        //     <div>
        //         <form onSubmit={handleFormSubmit}>
        //             <label>Plant Name: </label>
        //             {/* <input onChange={handleChange} autoComplete="off" type="text" name="plantName" value={formData.plantName} /> */}
        //             {/* <input onChange={handleChange} autoComplete="off" type="text" name="plantName" value={formData.plantName}/> */}
        //             {/* <input type = "file" value={formData.testImage} name = "testImage"/> */}
        //             <input type="text" className="input-field"
        //                 onChange={e => setItem({ ...item, plantName: e.target.value })}
        //             />
        //             <FileBase64
        //                 type="file"
        //                 multiple={false}
        //                 onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        //             />
        //             <label>
        //                 Description
        //             </label>
        //              <input type="text" className="input-field"
        //                 onChange={e => setItem({ ...item, desc: e.target.value })}
        //             />
        //             <button type='submit'>SUBMIT</button>
        //         </form>
        //     </div>
        //     <div>
        //         PlantDetailsForm
        //     </div>
        //     <div>
        //         <p>{JSON.stringify(formData, undefined)}</p>
        //     </div>
        // </div>
    )
}

export default PlantDetailsForm