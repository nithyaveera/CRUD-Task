import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditComp = ({ id }) => {
    const [data, setdata] = useState({
        department: '',
        email: '',
        id: '',
        imgage: '',
        name: '',
        phone: '',
        position: ''

    })
    console.log(data)

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        await axios.get(`https://65d5f1fff6967ba8e3bd0b3d.mockapi.io/employees/${id}`)
            .then(res => setdata(res.data))
            .catch((err) => console.log(err))
    }
    
    let navigate=useNavigate()
    let handleinput = (e) => {
        let { name, value } = e.target
        setdata((pval) =>({
            ...pval,[name] : value
        }))
    }
    //api put call
    let handlesubmit = async (e) => {
        e.preventDefault()
        await axios.put(`https://65d5f1fff6967ba8e3bd0b3d.mockapi.io/employees/${id}`, data)
        window.alert('Update Success')
        navigate('/')
    }
    let handlecancel = async () => {
        navigate('/')
    }
    return (
        <div>
            <div className='container mt-4' >
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <form className='row box border p-4 ' onSubmit={handlesubmit}>
                            <h2>Fill Employee Details</h2>
                            <div className='col'>
                                <div className='row'>
                                    <div className="col-12">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" name='name' value={data.name} placeholder='Enter Name' onChange={handleinput} />                     </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" name='email' value={data.email} id="inputEmail4" onChange={handleinput} placeholder='Ex : example@gmail.com' />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Phone</label>
                                        <input type="tel" className="form-control" name='phone' value={data.phone} id="inputAddress" onChange={handleinput} placeholder="Ex : 78698-87654" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Job Title</label>
                                        <input type="text" className="form-control" name='position' value={data.position} onChange={handleinput} placeholder="job title" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Department</label>
                                        <input type="text" className="form-control" name='department' value={data.department} onChange={handleinput} placeholder='department' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12">
                                        <label className="form-label">Image Url</label>
                                        <input type="text" className="form-control" name='imgage' value={data.imgage} onChange={handleinput} placeholder='image URL' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-3 pt-3">
                                        <button type="submit" className="btn createbtn">Update</button>
                                    </div>
                                    <div className="col-9 pt-3">
                                        <button type="button" onClick={handlecancel} className="btn createbtn">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditComp;