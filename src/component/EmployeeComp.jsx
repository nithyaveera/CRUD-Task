import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeComp = ({ setid }) => {
    const [data, setdata] = useState([])
    const nevigate = useNavigate()
    const [dummy, setdummy]=useState([])
    useEffect (() => {
        fetchdata()
    }, [dummy])
    //api get call
    const fetchdata = async () => {
        await axios.get('https://65d5f1fff6967ba8e3bd0b3d.mockapi.io/employees')
            .then(res => setdata(res.data))
        .catch((err)=>console.log(err))
    }
    let handleEdit = (id) => {
        setid(id)
        nevigate(`/edit/:${id}`)
    }
    //api delete call
    let handleRemove = async (id) => {
        if (confirm('If you want to delete click Ok!')) {
            await axios.delete(`https://65d5f1fff6967ba8e3bd0b3d.mockapi.io/employees/${id}`)
                .then(res => setdummy(res.data))
                .catch((err) => console.log(err))
        }
    }
    console.log(data)
    return (
        <div style={{ backgroundColor: '#c6d3e8' }}>
            {data.map((item, index) => {
                return (
                    <>
                            <div key={index} className='container'>
                                <div className="card mb-3" style={{ maxWidth: '80vw' }} >
                                    <div className="row g-0 p-4">
                                        <div className="col-md-5">
                                        <img src={item.imgage} className="img-fluid  mx-auto d-block rounded-5" alt="Single Image" style={{width:'60%'}}/>                                        </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <div className='row'>
                                                <div className='col-6'>
                                            <h4 className="card-title">{item.name}</h4>
                                                    <p className="card-text">Job Title : {item.position}</p>
                                                    <h6 className="card-text">Department :{item.department}</h6>
                                                </div>
                                             <div className='col-6'>
                                                    <h6><i class="fa-solid fa-envelope-circle-check"></i> {item.email}</h6>
                                                    <h6><i class="fa-solid fa-mobile-retro p-1"></i> {item.phone}</h6>
                                                </div>
                                            </div>
                                                <div className='row'>
                                                    <div className='col mt-4'>
                                                    <button
                                                        style={{marginRight:'5%'}}
                                                        className="btn btn-outline-success shadow "
                                                        onClick={() => { handleEdit(item.id) }}
                                                                type="button">
                                                                Edit
                                                            </button>
                                                    <button className='btn btn-outline-danger shadow' onClick={() => { handleRemove(item.id) }}>Romove</button>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                )
            })}
        </div>
    );
};

export default EmployeeComp;