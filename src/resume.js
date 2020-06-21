import React from 'react';
import data from './data.json';
import profile from './images/images.png';


export default function resume(props) {
    fetch('https:/jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>
            console.log(data))
    let info = data.profile[props.location.data.id];
    console.log(info)
    return (
        <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
                <div className="card shadow">
                    <img src={profile} height="300" style={{ align: "center" }} />
                    <div className="card-body text-center">
                        <h1>{info.data.name}</h1>
                        <div className="card-text">
                            <h4>{info.data.role}</h4>
                        </div>
                        <a href={"tel" + info.phone}>{info.data.phone}</a><br />
                        <a href={"mailto" + info.email}>{info.data.email}</a>
                    </div>

                </div>
            </div>
            <div className="col-lg-8 m-2">
                <div className="card shadow">
                    <h2>Carrier Objective</h2>
                    <p>{info.data.carrier}</p>
                    <hr />
                    <h2>Education Profile</h2>
                    <table class="table table-bordered table-hover table-sm">
                        <thead class="table-dark">
                            <tr>
                                <th>S.no</th>
                                <th>Graduation</th>
                                <th>Institution</th>
                                <th>Board</th>
                                <th>Percentage</th>
                                <th>Year of Passing</th>
                            </tr>
                        </thead>
                        {info.data.education.map((value) => (
                            <tbody>
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.grad}</td>
                                    <td>{value.name}</td>
                                    <td>{value.board}</td>
                                    <td>{value.percent}</td>
                                    <td>{value.year}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table><br/>
                    <h2>Skills</h2>
                    <ul class="list-group">
                        {info.data.skills.map((value) => (
                            <li class="list-group-item">{value.skill}</li>
                        ))}
                    </ul><br/>
                    <h2>Hobbies</h2>
                    <ul class="list-group">
                        {info.data.hobbies.map((value) => (
                            <li class="list-group-item">{value.hobby}</li>
                        ))}
                    </ul><br/>
                    <h2>Interests</h2>
                    <ul class="list-group">
                        {info.data.Interests.map((value) => (
                            <li class="list-group-item">{value.int}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}